package com.example.sistema.inventario.backend.Carreras;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarrerasRepository extends JpaRepository<Carreras, Long> {

    @Query("SELECT c FROM Carreras c WHERE c.deletedAt IS NULL")
    List<Carreras> findAllActive();
}
