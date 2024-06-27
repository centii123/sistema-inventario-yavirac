package com.example.sistema.inventario.backend.aula;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AulaService {

    @Autowired
    AulaRepository repository;

    public ArrayList<Aula> getAll() {
        return (ArrayList<Aula>) this.repository.findAll();
    }

    public Aula save(Aula entity) {
        return repository.save(entity);
    }

    public void deleteById(long id) {
        repository.deleteById(id);
    }

    public Aula findById(long id) {
        return repository.findById(id).orElse(null);
    }
}
