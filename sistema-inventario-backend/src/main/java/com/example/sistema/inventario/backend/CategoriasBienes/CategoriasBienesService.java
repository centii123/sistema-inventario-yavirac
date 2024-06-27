package com.example.sistema.inventario.backend.CategoriasBienes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CategoriasBienesService {

    @Autowired
    private CategoriasBienesRepository repository;

    public ArrayList<CategoriasBienes> getAll() {
        return (ArrayList<CategoriasBienes>) repository.findAll();
    }

    public CategoriasBienes findById(long id) {
        return repository.findById(id).orElse(null);
    }

    public CategoriasBienes save(CategoriasBienes entity) {
        return repository.save(entity);
    }

    public void deleteById(long id) {
        repository.deleteById(id);
    }
}
