package com.example.sistema.inventario.backend.CategoriasAulas;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoriasAulasService {
    @Autowired
    CategoriasAulasRepository repository;

    public ArrayList<CategoriasAulas> getAll() {
        return (ArrayList<CategoriasAulas>) this.repository.findAll();
    }
    
    public CategoriasAulas save(CategoriasAulas entity){
        return repository.save(entity);
    }
    
    public void deleteById(long id){
        repository.deleteById(id);
    }
    
    public CategoriasAulas findById(long id){
        return repository.findById(id).orElse(null);
    }
}
