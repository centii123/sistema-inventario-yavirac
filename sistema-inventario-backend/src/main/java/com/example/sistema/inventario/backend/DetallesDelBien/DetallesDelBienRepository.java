package com.example.sistema.inventario.backend.DetallesDelBien;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetallesDelBienRepository extends JpaRepository<DetallesDelBien, Long> {

}
