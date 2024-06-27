package com.example.sistema.inventario.backend.Persona;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaService {
     @Autowired
    PersonaRepository repository;

    public ArrayList<Persona> getAll() {
        return (ArrayList<Persona>) this.repository.findAll();
    }
    
    public Persona save(Persona entity){
        return repository.save(entity);
    }
    
    public void deleteById(long id){
        repository.deleteById(id);
    }
    
    public Persona findById(long id){
        return repository.findById(id).orElse(null);
    }
}
