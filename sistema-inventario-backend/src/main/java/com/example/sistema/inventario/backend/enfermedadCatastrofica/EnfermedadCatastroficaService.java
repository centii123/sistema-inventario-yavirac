package com.example.sistema.inventario.backend.enfermedadCatastrofica;

//import java.lang.reflect.Array;
import java.util.ArrayList;

//import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EnfermedadCatastroficaService {
    @Autowired
    EnfermedadCatastroficaRepository repository;

    public ArrayList<EnfermedadCatastrofica> getAll(){
        return (ArrayList<EnfermedadCatastrofica>) this.repository.findAll();
    }

    public EnfermedadCatastrofica save(EnfermedadCatastrofica entity){
        return repository.save(entity);
    }

    public void deleteById(long id){
        repository.deleteById(id);
    }

    public EnfermedadCatastrofica findById(long id){
        return repository.findById(id).orElse(null);
    }

}
