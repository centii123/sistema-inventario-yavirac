package com.example.sistema.inventario.backend.FechaIngresoInstituto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FechaIngresoInstitutoRepository extends JpaRepository<FechaIngresoInstituto, Long> {
}
