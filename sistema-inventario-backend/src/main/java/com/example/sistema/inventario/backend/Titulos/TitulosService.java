package com.example.sistema.inventario.backend.Titulos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;

@Service
public class TitulosService {

    @Autowired
    private TitulosRepository repository;

    public ArrayList<Titulos> getAll() {
        return (ArrayList<Titulos>) repository.findAllActive();
    }

    public Titulos save(Titulos entity) {
        return repository.save(entity);
    }

    @Transactional
    public void deleteById(long id) {
        // Obtiene el título por ID y marca como eliminado lógicamente XD
        Titulos titulo = repository.findById(id).orElse(null);
        if (titulo != null) {
            titulo.setDeletedAt(LocalDateTime.now());
            repository.save(titulo);
        }
    }

    public Titulos findById(long id) {
        return repository.findById(id).filter(t -> t.getDeletedAt() == null).orElse(null);
    }
}
