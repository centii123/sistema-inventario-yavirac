package com.example.sistema.inventario.backend.Titulos;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TitulosService {

    @Autowired
    TitulosRepository repository;

    public ArrayList<Titulos> getAll() {
        return (ArrayList<Titulos>) this.repository.findAll();
    }

    public Titulos save(Titulos entity) {
        return repository.save(entity);
    }

    public void deleteById(long id) {
        repository.deleteById(id);
    }

    public Titulos findById(long id) {
        return repository.findById(id).orElse(null);
    }
}
