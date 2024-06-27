package com.example.sistema.inventario.backend.Genero;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class GenerosService {

    @Autowired
    GenerosRepository repository;

    public ArrayList<Generos> getAll() {
        return (ArrayList<Generos>) this.repository.findAll();
    }
    
    public Generos save(Generos entity){
        return repository.save(entity);
    }
    
    public void deleteById(long id){
        repository.deleteById(id);
    }
    
    public Generos findById(long id){
        return repository.findById(id).orElse(null);
    }
}
