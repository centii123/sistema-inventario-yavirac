package com.example.sistema.inventario.backend.nacionalidad;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NacionalidadRepository extends JpaRepository<Nacionalidad, Long> {

    @Query("SELECT n FROM Nacionalidad n WHERE n.deletedAt IS NULL")
    List<Nacionalidad> findAllActive();
}
