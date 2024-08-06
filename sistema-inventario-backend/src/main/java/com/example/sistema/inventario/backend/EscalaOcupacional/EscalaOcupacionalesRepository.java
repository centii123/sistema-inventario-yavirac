package com.example.sistema.inventario.backend.EscalaOcupacional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EscalaOcupacionalesRepository extends CrudRepository<EscalaOcupacionales, Long> {

    @Query("SELECT e FROM EscalaOcupacionales e WHERE e.deletedAt IS NULL")
    List<EscalaOcupacionales> findAllActive();
}
