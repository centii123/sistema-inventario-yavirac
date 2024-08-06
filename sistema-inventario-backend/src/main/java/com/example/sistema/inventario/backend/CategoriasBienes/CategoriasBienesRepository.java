package com.example.sistema.inventario.backend.CategoriasBienes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoriasBienesRepository extends JpaRepository<CategoriasBienes, Long> {

    @Query("SELECT c FROM CategoriasBienes c WHERE c.deletedAt IS NULL")
    List<CategoriasBienes> findAllActive();
}
