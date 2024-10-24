package com.example.sistema.inventario.backend.nacionalidad;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class NacionalidadService {

    @Autowired
    private NacionalidadRepository repository;

    // Obtener todas las nacionalidades activas (sin eliminación lógica)
    public ArrayList<Nacionalidad> getAll(){
        return (ArrayList<Nacionalidad>) repository.findAllActive();
    }

    // Guardar una nueva nacionalidad
    public Nacionalidad save(Nacionalidad entity){
        return repository.save(entity);
    }

    // Guardar múltiples nacionalidades a la vez
    @Transactional
    public void saveAll(List<Nacionalidad> nacionalidades) {
        repository.saveAll(nacionalidades);
    }

    // Eliminar nacionalidad por ID (eliminación lógica)
    @Transactional
    public void deleteById(long id){
        Nacionalidad nacionalidad = repository.findById(id).orElse(null);
        if (nacionalidad != null && nacionalidad.getDeletedAt() == null) {
            nacionalidad.setDeletedAt(LocalDateTime.now());
            repository.save(nacionalidad);
        }
    }

    // Obtener nacionalidad por ID
    public Nacionalidad findById(long id){
        return repository.findById(id).filter(n -> n.getDeletedAt() == null).orElse(null);
    }
}
