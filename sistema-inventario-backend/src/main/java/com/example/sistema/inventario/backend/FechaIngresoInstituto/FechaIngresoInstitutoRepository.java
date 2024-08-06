package com.example.sistema.inventario.backend.FechaIngresoInstituto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FechaIngresoInstitutoRepository extends JpaRepository<FechaIngresoInstituto, Long> {

    @Query("SELECT f FROM FechaIngresoInstituto f WHERE f.deletedAt IS NULL")
    List<FechaIngresoInstituto> findAllActive();
}
