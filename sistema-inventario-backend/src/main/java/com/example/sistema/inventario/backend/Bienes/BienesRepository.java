package com.example.sistema.inventario.backend.Bienes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BienesRepository extends JpaRepository<Bienes, Long> {
    List<Bienes> findByNombre(String nombre);
}
