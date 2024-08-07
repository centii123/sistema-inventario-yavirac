package com.example.sistema.inventario.backend.enfermedadCatastrofica;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;

@Service
public class EnfermedadCatastroficaService {

    @Autowired
    private EnfermedadCatastroficaRepository repository;

    // Obtener todas las enfermedades catastróficas activas
    public ArrayList<EnfermedadCatastrofica> getAll() {
        return (ArrayList<EnfermedadCatastrofica>) repository.findAllActive();
    }

    // Guardar una nueva enfermedad catastrófica
    public EnfermedadCatastrofica save(EnfermedadCatastrofica entity) {
        return repository.save(entity);
    }

    // Eliminar enfermedad catastrófica por ID (eliminación lógica)
    @Transactional
    public void deleteById(long id) {
        EnfermedadCatastrofica enfermedad = repository.findById(id).orElse(null);
        if (enfermedad != null && enfermedad.getDeletedAt() == null) {
            enfermedad.setDeletedAt(LocalDateTime.now());
            repository.save(enfermedad);
        }
    }

    public void deleteByIdFisical(long id){
        repository.deleteById(id);
    }

    // Obtener enfermedad catastrófica por ID
    public EnfermedadCatastrofica findById(long id) {
        return repository.findById(id).filter(e -> e.getDeletedAt() == null).orElse(null);
    }
}
