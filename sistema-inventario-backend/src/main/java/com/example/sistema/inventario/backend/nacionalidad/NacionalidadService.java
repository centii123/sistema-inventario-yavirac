package com.example.sistema.inventario.backend.nacionalidad;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NacionalidadService {

    @Autowired
    NacionalidadRepository repository;

    public ArrayList<Nacionalidad> getAll(){
        return (ArrayList<Nacionalidad>) this.repository.findAll();
    }

    public Nacionalidad save(Nacionalidad entity){
        return repository.save(entity);
    }

    public void deleteById(long id){
        repository.deleteById(id);
    }

    public Nacionalidad findById(long id){
        return repository.findById(id).orElse(null);
    }
    
}

