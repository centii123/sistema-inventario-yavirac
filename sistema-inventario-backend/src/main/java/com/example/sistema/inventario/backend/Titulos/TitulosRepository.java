
package com.example.sistema.inventario.backend.Titulos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TitulosRepository extends JpaRepository<Titulos, Long> {

    //query que personalize pa que valga el eliminado logico xD
    @Query("SELECT t FROM Titulos t WHERE t.deletedAt IS NULL")
    List<Titulos> findAllActive();

}
