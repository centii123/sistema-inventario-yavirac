package com.example.sistema.inventario.backend.EstudiosenCurso;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EstudiosenCursoRepository extends CrudRepository<EstudiosenCursos, Long> {

    @Query("SELECT e FROM EstudiosenCursos e WHERE e.deletedAt IS NULL")
    List<EstudiosenCursos> findAllActive();
}
