package com.example.sistema.inventario.backend.RolesInstitucionales;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RolesInstitucionalesRepository extends JpaRepository<RolesInstitucionales, Long> {
}
