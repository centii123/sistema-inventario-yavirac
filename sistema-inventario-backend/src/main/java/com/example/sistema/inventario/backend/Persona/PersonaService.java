package com.example.sistema.inventario.backend.Persona;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.example.sistema.inventario.backend.FechaIngresoInstituto.FechaIngresoInstitutoService;
import com.example.sistema.inventario.backend.authz.service.UserService;
import com.example.sistema.inventario.backend.discapacidad.DiscapacidadService;
import com.example.sistema.inventario.backend.enfermedadCatastrofica.EnfermedadCatastroficaService;
import com.example.sistema.inventario.backend.entidadPublica.EntidadPublicaService;

@Service
public class PersonaService {

    private static final String UPLOAD_DIR = "uploads/images/";
    private static final long MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

    @Autowired
    PersonaRepository repository;

    @Autowired
    DiscapacidadService discapacidadService;

    @Autowired
    EnfermedadCatastroficaService enfermedadCatastroficaService;

    @Autowired
    EntidadPublicaService entidadPublicaService;

    @Autowired
    FechaIngresoInstitutoService fechaIngresoInstitutoService;

    @Autowired
    UserService userService;

    // Obtener todas las personas activas
    public List<Persona> getAll() {
        return repository.findAllActive();
    }

    // Guardar una nueva persona con imagen
    public Persona save(Persona entity, MultipartFile imageFile) throws IOException {
        if (imageFile != null && !imageFile.isEmpty()) {
            // Validar tamaño de archivo
            if (imageFile.getSize() > MAX_FILE_SIZE) {
                throw new IOException("Archivo demasiado grande. El tamaño máximo permitido es 5MB.");
            }

            // Validar tipo de archivo
            String contentType = imageFile.getContentType();
            if (!isImage(contentType)) {
                throw new IOException("Tipo de archivo no soportado. Solo se permiten imágenes.");
            }

            // Generar un nombre único para el archivo
            String fileName = UUID.randomUUID().toString() + "_" + imageFile.getOriginalFilename();
            Path imagePath = Paths.get(UPLOAD_DIR + fileName);

            // Crear directorio si no existe
            Files.createDirectories(imagePath.getParent());

            // Guardar la imagen en el directorio
            Files.write(imagePath, imageFile.getBytes());

            // Asignar la URL de la imagen a la entidad
            String imageUrl = "http://localhost:8080/images/" + fileName; // Ruta accesible públicamente
            entity.setImagen(imageUrl);
        }
        return repository.save(entity);
    }

    // Método para verificar si el tipo de archivo es una imagen
    private boolean isImage(String contentType) {
        return contentType != null && (contentType.equals("image/png") || contentType.equals("image/jpeg") || contentType.equals("image/jpg") || contentType.equals("image/gif") || contentType.equals("image/webp"));
    }

    // Eliminar persona por ID (eliminación lógica)
    @Transactional
    public void deleteById(long id) {
        Persona persona = repository.findById(id).orElse(null);
        if (persona != null && persona.getDeletedAt() == null) {
            persona.setDeletedAt(LocalDateTime.now());
            repository.save(persona);
        }
    }

    // Obtener persona por ID
    public Persona findById(long id) {
        return repository.findById(id).filter(p -> p.getDeletedAt() == null).orElse(null);
    }

    // Obtener persona por DNI
    public Persona findByDni(String dni) {
        return repository.findByDni(dni);
    }

    // Método asincrónico para eliminar personas
    @Async
    public void delete(long id) {
        Persona persona = this.findById(id);
        // Eliminar relaciones si existen
        this.deleteById(id);
    }
}
