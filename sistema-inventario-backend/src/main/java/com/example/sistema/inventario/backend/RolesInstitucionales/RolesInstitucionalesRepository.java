package com.example.sistema.inventario.backend.RolesInstitucionales;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RolesInstitucionalesRepository extends JpaRepository<RolesInstitucionales, Long> {

    @Query("SELECT r FROM RolesInstitucionales r WHERE r.deletedAt IS NULL")
    List<RolesInstitucionales> findAllActive();
}
