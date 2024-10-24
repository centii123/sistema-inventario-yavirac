package com.example.sistema.inventario.backend.Persona;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonaRepository extends JpaRepository<Persona, Long> {
    
    Persona findByDni(String dni);

    @Query("SELECT p FROM Persona p WHERE p.deletedAt IS NULL")
    List<Persona> findAllActive();
}
