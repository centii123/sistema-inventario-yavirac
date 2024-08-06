package com.example.sistema.inventario.backend.EstudiosenCurso;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Optional;

@Service
public class EstudiosenCursoService {
    @Autowired
    EstudiosenCursoRepository repository;

    public ArrayList<EstudiosenCursos> getAll() {
        return (ArrayList<EstudiosenCursos>) repository.findAllActive();
    }
    
    public EstudiosenCursos save(EstudiosenCursos entity){
        return repository.save(entity);
    }

    @Transactional
    public void deleteById(long id){
        Optional<EstudiosenCursos> optional = repository.findById(id);
        if (optional.isPresent()) {
            EstudiosenCursos entity = optional.get();
            entity.setDeletedAt(LocalDateTime.now());
            repository.save(entity);
        }
    }
    
    public EstudiosenCursos findById(long id){
        return repository.findById(id)
                         .filter(e -> e.getDeletedAt() == null)
                         .orElse(null);
    }
}
