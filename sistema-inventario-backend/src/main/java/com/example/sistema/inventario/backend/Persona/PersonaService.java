package com.example.sistema.inventario.backend.Persona;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
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

    
    @Async
    public void delete(long id) {
        Persona persona=this.findById(id);
        persona.setDiscapacidad(null);
        persona.setEnfermedadCatastrofica(null);
        persona.setEntidadPublica(null);
        persona.setFechaIngresoInstituto(null);
        persona.setUser(null);
        persona.setAula(null);
        this.save(persona);
        this.deleteById(id);
    }
}
