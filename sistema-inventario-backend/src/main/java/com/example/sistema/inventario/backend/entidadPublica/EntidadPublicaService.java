package com.example.sistema.inventario.backend.entidadPublica;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EntidadPublicaService {

    @Autowired
    EntidadPublicaRepository repository;

    public ArrayList<EntidadPublica> getAll(){
        return (ArrayList<EntidadPublica>) this.repository.findAll();
    }

    public EntidadPublica save(EntidadPublica entity){
        return repository.save(entity);
    }

    public void deleteById(long id){
        repository.deleteById(id);
    }

    public EntidadPublica findById(long id){
        return repository.findById(id).orElse(null);
    } 
}
