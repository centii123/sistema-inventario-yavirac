package com.example.sistema.inventario.backend.Persona;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaService {
    @Autowired
    PersonaRepository repository;

    public List<Persona> getAll() {
        return (List<Persona>) repository.findAll();
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

    public Persona findByDni(String dni) {
        return repository.findByDni(dni);
    }
}
