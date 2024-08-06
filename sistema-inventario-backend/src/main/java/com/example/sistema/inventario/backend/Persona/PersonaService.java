package com.example.sistema.inventario.backend.Persona;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.sistema.inventario.backend.FechaIngresoInstituto.FechaIngresoInstitutoService;
import com.example.sistema.inventario.backend.authz.service.UserService;
import com.example.sistema.inventario.backend.discapacidad.DiscapacidadService;
import com.example.sistema.inventario.backend.enfermedadCatastrofica.EnfermedadCatastroficaService;
import com.example.sistema.inventario.backend.entidadPublica.EntidadPublicaService;

@Service
public class PersonaService {
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

    // Guardar una nueva persona
    public Persona save(Persona entity) {
        return repository.save(entity);
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
        /*if(persona.getDiscapacidad() != null | 
        persona.getEnfermedadCatastrofica() != null |
        persona.getEntidadPublica() != null |
        persona.getFechaIngresoInstituto() != null |
        persona.getUser() != null){
            
            Persona DataEliminar=this.findById(id);
            persona.setDiscapacidad(null);
            persona.setEnfermedadCatastrofica(null);
            persona.setEntidadPublica(null);
            persona.setFechaIngresoInstituto(null);
            persona.setUser(null);
            persona.setAula(null);
            this.save(persona);
            this.DiscapacidadService.deleteById(DataEliminar.getDiscapacidad().getId());
            this.EnfermedadCatastroficaService.deleteById(DataEliminar.getEnfermedadCatastrofica().getId());
            this.EntidadPublicaService.deleteById(DataEliminar.getEntidadPublica().getId());
            this.FechaIngresoInstitutoService.deleteFechaIngresoInstituto(DataEliminar.getFechaIngresoInstituto().getId());
            this.UserService.deleteById(DataEliminar.getUser().getId());
        }*/
        this.deleteById(id);
    }
}
