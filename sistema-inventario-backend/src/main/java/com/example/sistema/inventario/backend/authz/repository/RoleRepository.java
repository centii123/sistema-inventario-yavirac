package com.example.sistema.inventario.backend.authz.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;


import com.example.sistema.inventario.backend.authz.entity.Role;





public interface RoleRepository extends CrudRepository <Role, Long> {

    List<Role> findAll();
}
