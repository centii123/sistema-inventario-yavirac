package com.example.sistema.inventario.backend.Infraestructura;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;

@Service
public class InfraestructuraService {

    @Autowired
    private InfraestructuraRepository repository;

    // Obtener todas las infraestructuras
    public ArrayList<Infraestructura> getAll() {
        return (ArrayList<Infraestructura>) repository.findAllActive();
    }

    // Guardar una nueva infraestructura
    public Infraestructura save(Infraestructura entity) {
        return repository.save(entity);
    }

    // Eliminar infraestructura por ID (eliminación lógica)
    @Transactional
    public void deleteById(long id) {
        Infraestructura infraestructura = repository.findById(id).orElse(null);
        if (infraestructura != null && infraestructura.getDeletedAt() == null) {
            infraestructura.setDeletedAt(LocalDateTime.now());
            repository.save(infraestructura);
        }
    }

    // Obtener infraestructura por ID
    public Infraestructura findById(long id) {
        return repository.findById(id).filter(i -> i.getDeletedAt() == null).orElse(null);
    }

    // Método asincrónico para eliminar infraestructuras
    @Async
    public void delete(long id) {
        Infraestructura aula = this.findById(id);
        if (aula != null) {
            aula.setPersona(null);
            aula.setBienes(null);
            this.save(aula);
            this.deleteById(id);
        }
    }
}
