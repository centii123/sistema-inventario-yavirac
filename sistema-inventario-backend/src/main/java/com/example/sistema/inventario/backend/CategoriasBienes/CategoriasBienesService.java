package com.example.sistema.inventario.backend.CategoriasBienes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;

@Service
public class CategoriasBienesService {

    @Autowired
    private CategoriasBienesRepository repository;

    // Obtener todas las categorías de bienes activas
    public ArrayList<CategoriasBienes> getAll() {
        return (ArrayList<CategoriasBienes>) repository.findAllActive();
    }

    // Obtener categoría de bienes por ID
    public CategoriasBienes findById(long id) {
        return repository.findById(id).filter(c -> c.getDeletedAt() == null).orElse(null);
    }

    // Guardar una nueva categoría de bienes
    public CategoriasBienes save(CategoriasBienes entity) {
        return repository.save(entity);
    }

    // Eliminar categoría de bienes por ID (eliminación lógica)
    @Transactional
    public void deleteById(long id) {
        CategoriasBienes categoriasBienes = repository.findById(id).orElse(null);
        if (categoriasBienes != null && categoriasBienes.getDeletedAt() == null) {
            categoriasBienes.setDeletedAt(LocalDateTime.now());
            repository.save(categoriasBienes);
        }
    }
}
