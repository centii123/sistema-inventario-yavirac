package com.example.sistema.inventario.backend.discapacidad;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DiscapacidadService {

    @Autowired
    DiscapacidadRepository repository;

    public ArrayList<Discapacidad> getAll() {
        return (ArrayList<Discapacidad>) this.repository.findAll();
    }

    public Discapacidad save(Discapacidad entity) {
        return repository.save(entity);
    }

    public void deleteById(long id) {
        repository.deleteById(id);
    }

    public Discapacidad findByid(long id) {
        return repository.findById(id).orElse(null);
    }
}
