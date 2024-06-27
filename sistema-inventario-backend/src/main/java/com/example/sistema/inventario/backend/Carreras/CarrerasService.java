package com.example.sistema.inventario.backend.Carreras;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarrerasService {

    @Autowired
    CarrerasRepository repository;

    public ArrayList<Carreras> getAll() {
        return (ArrayList<Carreras>) this.repository.findAll();
    }
    
    public Carreras save(Carreras entity){
        return repository.save(entity);
    }
    
    public void deleteById(long id){
        repository.deleteById(id);
    }
    
    public Carreras findById(long id){
        return repository.findById(id).orElse(null);
    }

}
