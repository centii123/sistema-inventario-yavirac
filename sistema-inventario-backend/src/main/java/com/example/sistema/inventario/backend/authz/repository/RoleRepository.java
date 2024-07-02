package com.example.sistema.inventario.backend.authz.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.sistema.inventario.backend.authz.entity.Role;





public interface RoleRepository extends CrudRepository <Role, Long> {

    List<Role> findAll();

    /*@Query(value = "SELECT rol.id, rol.name, rol.enabled FROM roles rol INNER JOIN users_roles userol ON rol.id=userol.role_id INNER JOIN users use ON use.id=userol.user_id INNER JOIN compania com  ON use.compania_id = com.id WHERE com.id = :compania ORDER BY rol.id LIMIT 5 OFFSET ((:pagina * 5) - 5)", nativeQuery = true)
    List rolePorCompania(@Param("compania") Long compania, @Param("pagina") Long pagina);*/

    @Query(value = "SELECT rol.id, rol.name, rol.enabled FROM roles rol ORDER BY rol.id LIMIT 5 OFFSET ((:pagina * 5) - 5)", nativeQuery = true)
    List rolePorCompania(@Param("pagina") Long pagina);
    
}
