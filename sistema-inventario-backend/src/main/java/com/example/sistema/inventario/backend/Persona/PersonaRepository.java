package com.example.sistema.inventario.backend.Persona;

import org.springframework.data.repository.CrudRepository;

public interface PersonaRepository extends CrudRepository<Persona, Long> {
    Persona findByDni(String dni);
}
