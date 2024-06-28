package com.example.sistema.inventario.backend.DetallesDelBien;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class DetallesDelBienService {
    @Autowired
    private final DetallesDelBienRepository detallesDelBienRepository;

    
    public DetallesDelBienService(DetallesDelBienRepository detallesDelBienRepository) {
        this.detallesDelBienRepository = detallesDelBienRepository;
    }

    // Obtener todos los detalles del bien
    public List<DetallesDelBien> getAllDetallesDelBien() {
        return detallesDelBienRepository.findAll();
    }

    // Obtener detalles del bien por ID
    public DetallesDelBien getDetallesDelBienById(Long id) {
        Optional<DetallesDelBien> detallesOptional = detallesDelBienRepository.findById(id);
        return detallesOptional.orElse(null);
    }

    // Crear nuevos detalles del bien
    public DetallesDelBien createDetallesDelBien(DetallesDelBien detallesDelBien) {
        return detallesDelBienRepository.save(detallesDelBien);
    }

    // Actualizar detalles del bien existente
    public DetallesDelBien updateDetallesDelBien(Long id, DetallesDelBien detallesDelBien) {
        if (detallesDelBienRepository.existsById(id)) {
            detallesDelBien.setId(id);
            return detallesDelBienRepository.save(detallesDelBien);
        }
        return null;
    }

    // Eliminar detalles del bien por ID
    public void deleteDetallesDelBien(Long id) {
        detallesDelBienRepository.deleteById(id);
    }
}
