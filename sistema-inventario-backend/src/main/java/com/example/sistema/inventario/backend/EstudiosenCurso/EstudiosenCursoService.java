package com.example.sistema.inventario.backend.EstudiosenCurso;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class EstudiosenCursoService {
    @Autowired
    EstudiosenCursosRepository repository;

    public ArrayList<EstudiosenCursos> getAll() {
        return (ArrayList<EstudiosenCursos>) this.repository.findAll();
    }
    
    public EstudiosenCursos save(EstudiosenCursos entity){
        return repository.save(entity);
    }
    
    public void deleteById(long id){
        repository.deleteById(id);
    }
    
    public EstudiosenCursos findById(long id){
        return repository.findById(id).orElse(null);
    }
    
}
