package com.example.sistema.inventario.backend.Institutos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;

@Service
public class InstitutosService {

    @Autowired
    private InstitutosRepository repository;

    // Obtener todos los institutos
    public ArrayList<Institutos> getAll() {
        return (ArrayList<Institutos>) repository.findAllActive();
    }
    
    // Guardar un nuevo instituto
    public Institutos save(Institutos entity){
        return repository.save(entity);
    }
    
    // Eliminar instituto por ID (eliminación lógica)
    @Transactional
    public void deleteById(long id){
        Institutos instituto = repository.findById(id).orElse(null);
        if (instituto != null && instituto.getDeletedAt() == null) {
            instituto.setDeletedAt(LocalDateTime.now());
            repository.save(instituto);
        }
    }
    
    // Obtener instituto por ID
    public Institutos findById(long id){
        return repository.findById(id).filter(i -> i.getDeletedAt() == null).orElse(null);
    }
}
