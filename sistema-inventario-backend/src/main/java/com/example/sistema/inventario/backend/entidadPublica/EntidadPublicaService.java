package com.example.sistema.inventario.backend.entidadPublica;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;

@Service
public class EntidadPublicaService {

    @Autowired
    private EntidadPublicaRepository repository;

    // Obtener todas las entidades públicas activas
    public ArrayList<EntidadPublica> getAll() {
        return (ArrayList<EntidadPublica>) repository.findAllActive();
    }

    // Guardar una nueva entidad pública
    public EntidadPublica save(EntidadPublica entity) {
        return repository.save(entity);
    }

    // Eliminar entidad pública por ID (eliminación lógica)
    @Transactional
    public void deleteById(long id) {
        EntidadPublica entidadPublica = repository.findById(id).orElse(null);
        if (entidadPublica != null && entidadPublica.getDeletedAt() == null) {
            entidadPublica.setDeletedAt(LocalDateTime.now());
            repository.save(entidadPublica);
        }
    }

    // Obtener entidad pública por ID
    public EntidadPublica findById(long id) {
        return repository.findById(id).filter(e -> e.getDeletedAt() == null).orElse(null);
    }
}
