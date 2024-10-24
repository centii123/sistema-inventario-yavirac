package com.example.sistema.inventario.backend.FamiliarLaboraotraEntidadPublica;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FamiliarLaboraotraEntidadPublicaRepository extends CrudRepository<FamiliarLaboraotraEntidadPublica, Long> {

    @Query("SELECT f FROM FamiliarLaboraotraEntidadPublica f WHERE f.deletedAt IS NULL")
    List<FamiliarLaboraotraEntidadPublica> findAllActive();
}
