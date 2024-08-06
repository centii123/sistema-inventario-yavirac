package com.example.sistema.inventario.backend.Carreras;

import java.util.ArrayList;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CarrerasService {

    @Autowired
    CarrerasRepository repository;

    // Obtener todas las carreras activas
    public ArrayList<Carreras> getAll() {
        return (ArrayList<Carreras>) repository.findAllActive();
    }

    // Guardar una nueva carrera
    public Carreras save(Carreras entity) {
        return repository.save(entity);
    }

    // Eliminar carrera por ID (eliminación lógica)
    @Transactional
    public void deleteById(long id) {
        Carreras carrera = repository.findById(id).orElse(null);
        if (carrera != null && carrera.getDeletedAt() == null) {
            carrera.setDeletedAt(LocalDateTime.now());
            repository.save(carrera);
        }
    }

    // Obtener carrera por ID
    public Carreras findById(long id) {
        return repository.findById(id).filter(c -> c.getDeletedAt() == null).orElse(null);
    }
}
