package com.example.sistema.inventario.backend.FamiliarLaboraotraEntidadPublica;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Optional;

@Service
public class FamiliarLaboraotraEntidadPublicaService {
    @Autowired
    FamiliarLaboraotraEntidadPublicaRepository repository;

    public ArrayList<FamiliarLaboraotraEntidadPublica> getAll() {
        return (ArrayList<FamiliarLaboraotraEntidadPublica>) repository.findAllActive();
    }
    
    public FamiliarLaboraotraEntidadPublica save(FamiliarLaboraotraEntidadPublica entity){
        return repository.save(entity);
    }
    
    @Transactional
    public void deleteById(long id){
        Optional<FamiliarLaboraotraEntidadPublica> optional = repository.findById(id);
        if (optional.isPresent()) {
            FamiliarLaboraotraEntidadPublica entity = optional.get();
            entity.setDeletedAt(LocalDateTime.now());
            repository.save(entity);
        }
    }

    public void deleteByIdFisical(long id){
        repository.deleteById(id);
    }
    
    public FamiliarLaboraotraEntidadPublica findById(long id){
        return repository.findById(id)
                         .filter(f -> f.getDeletedAt() == null)
                         .orElse(null);
    }
}
