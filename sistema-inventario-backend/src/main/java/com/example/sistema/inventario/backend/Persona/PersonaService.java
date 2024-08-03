package com.example.sistema.inventario.backend.Persona;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.example.sistema.inventario.backend.FechaIngresoInstituto.FechaIngresoInstitutoService;
import com.example.sistema.inventario.backend.authz.service.UserService;
import com.example.sistema.inventario.backend.discapacidad.DiscapacidadService;
import com.example.sistema.inventario.backend.enfermedadCatastrofica.EnfermedadCatastroficaService;
import com.example.sistema.inventario.backend.entidadPublica.EntidadPublicaService;

@Service
public class PersonaService {
    @Autowired
    PersonaRepository repository;

    @Autowired
    DiscapacidadService DiscapacidadService;

    @Autowired
    EnfermedadCatastroficaService EnfermedadCatastroficaService;

    @Autowired
    EntidadPublicaService EntidadPublicaService;

    @Autowired
    FechaIngresoInstitutoService FechaIngresoInstitutoService;

    @Autowired
    UserService UserService;

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
        /*if(persona.getDiscapacidad() != null | 
        persona.getEnfermedadCatastrofica() != null |
        persona.getEntidadPublica() != null |
        persona.getFechaIngresoInstituto() != null |
        persona.getUser() != null){
            
            Persona DataEliminar=this.findById(id);
            persona.setDiscapacidad(null);
            persona.setEnfermedadCatastrofica(null);
            persona.setEntidadPublica(null);
            persona.setFechaIngresoInstituto(null);
            persona.setUser(null);
            persona.setAula(null);
            this.save(persona);
            this.DiscapacidadService.deleteById(DataEliminar.getDiscapacidad().getId());
            this.EnfermedadCatastroficaService.deleteById(DataEliminar.getEnfermedadCatastrofica().getId());
            this.EntidadPublicaService.deleteById(DataEliminar.getEntidadPublica().getId());
            this.FechaIngresoInstitutoService.deleteFechaIngresoInstituto(DataEliminar.getFechaIngresoInstituto().getId());
            this.UserService.deleteById(DataEliminar.getUser().getId());
        }*/
        
        this.deleteById(id);
    }
}
