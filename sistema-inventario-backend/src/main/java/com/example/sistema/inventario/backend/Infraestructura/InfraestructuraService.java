package com.example.sistema.inventario.backend.Infraestructura;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class InfraestructuraService {

    @Autowired
    InfraestructuraRepository repository;

    public ArrayList<Infraestructura> getAll() {
        return (ArrayList<Infraestructura>) this.repository.findAll();
    }

    public Infraestructura save(Infraestructura entity) {
        return repository.save(entity);
    }

    public void deleteById(long id) {
        repository.deleteById(id);
    }

    public Infraestructura findById(long id) {
        return repository.findById(id).orElse(null);
    }

    @Async
    public void delete(long id) {
        Infraestructura aula=this.findById(id);
        aula.setPersona(null);
        aula.setBienes(null);
        this.save(aula);
        this.deleteById(id);
    }
}
