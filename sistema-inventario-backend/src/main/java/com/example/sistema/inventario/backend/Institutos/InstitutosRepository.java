package com.example.sistema.inventario.backend.Institutos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InstitutosRepository extends JpaRepository<Institutos, Long> {

    @Query("SELECT i FROM Institutos i WHERE i.deletedAt IS NULL")
    List<Institutos> findAllActive();
}
