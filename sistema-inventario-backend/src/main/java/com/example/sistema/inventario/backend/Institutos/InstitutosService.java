package com.example.sistema.inventario.backend.Institutos;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InstitutosService {

     @Autowired
    InstitutosRepository repository;

    public ArrayList<Institutos> getAll() {
        return (ArrayList<Institutos>) this.repository.findAll();
    }
    
    public Institutos save(Institutos entity){
        return repository.save(entity);
    }
    
    public void deleteById(long id){
        repository.deleteById(id);
    }
    
    public Institutos findById(long id){
        return repository.findById(id).orElse(null);
    }
    
}
