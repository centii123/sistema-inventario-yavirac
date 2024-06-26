package com.example.sistema.inventario.backend.Provincias;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ProvinciasService {
    
    @Autowired
    ProvinciasRepository repository;

    public ArrayList<Provincias> getAll() {
        return (ArrayList<Provincias>) this.repository.findAll();
    }
    
    public Provincias save(Provincias entity){
        return repository.save(entity);
    }
    
    public void deleteById(long id){
        repository.deleteById(id);
    }
    
    public Provincias findById(long id){
        return repository.findById(id).orElse(null);
    }
    
}
