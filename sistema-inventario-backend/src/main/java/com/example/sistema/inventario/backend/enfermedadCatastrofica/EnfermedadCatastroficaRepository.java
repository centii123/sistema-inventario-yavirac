package com.example.sistema.inventario.backend.enfermedadCatastrofica;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EnfermedadCatastroficaRepository extends JpaRepository<EnfermedadCatastrofica, Long> {

    @Query("SELECT e FROM EnfermedadCatastrofica e WHERE e.deletedAt IS NULL")
    List<EnfermedadCatastrofica> findAllActive();
}
