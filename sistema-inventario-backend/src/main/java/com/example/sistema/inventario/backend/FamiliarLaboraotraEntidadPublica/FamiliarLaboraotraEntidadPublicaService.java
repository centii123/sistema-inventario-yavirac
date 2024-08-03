package com.example.sistema.inventario.backend.FamiliarLaboraotraEntidadPublica;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FamiliarLaboraotraEntidadPublicaService {
    @Autowired
    FamiliarLaboraotraEntidadPublicaRepository repository;

    public ArrayList<FamiliarLaboraotraEntidadPublica> getAll() {
        return (ArrayList<FamiliarLaboraotraEntidadPublica>) this.repository.findAll();
    }
    
    public FamiliarLaboraotraEntidadPublica save(FamiliarLaboraotraEntidadPublica entity){
        return repository.save(entity);
    }
    
    public void deleteById(long id){
        repository.deleteById(id);
    }
    
    public FamiliarLaboraotraEntidadPublica findById(long id){
        return repository.findById(id).orElse(null);
    }
}
