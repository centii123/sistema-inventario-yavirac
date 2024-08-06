package com.example.sistema.inventario.backend.Infraestructura;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InfraestructuraRepository extends JpaRepository<Infraestructura, Long> {

    @Query("SELECT i FROM Infraestructura i WHERE i.deletedAt IS NULL")
    List<Infraestructura> findAllActive();
}
