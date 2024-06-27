package com.example.sistema.inventario.backend.Bienes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BienesRepository extends JpaRepository<Bienes, Long> {
    
}
