package com.example.sistema.inventario.backend.Bienes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BienesRepository extends JpaRepository<Bienes, Long> {

    @Query("SELECT b FROM Bienes b WHERE b.deletedAt IS NULL")
    List<Bienes> findAllActive();

    @Query("SELECT b FROM Bienes b WHERE b.nombre = ?1 AND b.deletedAt IS NULL")
    List<Bienes> findByNombre(String nombre);

    // Método para encontrar bienes por ID de infraestructura XD
    // List<Bienes> findByInfraestructuraId(Long infraestructuraId);

    @Query("SELECT b FROM Bienes b WHERE b.infraestructura.id = :infraestructuraId AND b.deletedAt IS NULL")
    List<Bienes> findByInfraestructuraId(@Param("infraestructuraId") Long infraestructuraId);
}
