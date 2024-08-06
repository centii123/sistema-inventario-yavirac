package com.example.sistema.inventario.backend.entidadPublica;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EntidadPublicaRepository extends JpaRepository<EntidadPublica, Long> {

    @Query("SELECT e FROM EntidadPublica e WHERE e.deletedAt IS NULL")
    List<EntidadPublica> findAllActive();
}
