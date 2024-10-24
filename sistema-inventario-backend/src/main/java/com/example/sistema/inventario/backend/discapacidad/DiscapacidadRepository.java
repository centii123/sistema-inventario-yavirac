package com.example.sistema.inventario.backend.discapacidad;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DiscapacidadRepository extends JpaRepository<Discapacidad, Long> {

    @Query("SELECT d FROM Discapacidad d WHERE d.deletedAt IS NULL")
    List<Discapacidad> findAllActive();
}
