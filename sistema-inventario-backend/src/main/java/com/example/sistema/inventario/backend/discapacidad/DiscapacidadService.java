package com.example.sistema.inventario.backend.discapacidad;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;

@Service
public class DiscapacidadService {

    @Autowired
    private DiscapacidadRepository repository;

    // Obtener todas las discapacidades activas
    public ArrayList<Discapacidad> getAll() {
        return (ArrayList<Discapacidad>) repository.findAllActive();
    }

    // Guardar una nueva discapacidad
    public Discapacidad save(Discapacidad entity) {
        return repository.save(entity);
    }

    // Eliminar discapacidad por ID (eliminación lógica)
    @Transactional
    public void deleteById(long id) {
        Discapacidad discapacidad = repository.findById(id).orElse(null);
        if (discapacidad != null && discapacidad.getDeletedAt() == null) {
            discapacidad.setDeletedAt(LocalDateTime.now());
            repository.save(discapacidad);
        }
    }

    public void deleteByIdFisical(long id){
        repository.deleteById(id);
    }

    // Obtener discapacidad por ID
    public Discapacidad findById(long id) {
        return repository.findById(id).filter(d -> d.getDeletedAt() == null).orElse(null);
    }
}
