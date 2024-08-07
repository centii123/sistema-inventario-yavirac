package com.example.sistema.inventario.backend.authz.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sistema.inventario.backend.authz.entity.Authority;
import com.example.sistema.inventario.backend.authz.entity.Role;
import com.example.sistema.inventario.backend.authz.repository.RoleRepository;


@Service
public class RoleService {
    
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    AuthorityService authorityService;

    //Create and Update
    public Role save(Role role){
        return roleRepository.save(role);
    }
    //Read
    public Role findById(long id){
        return roleRepository.findById(id).orElseThrow();
    }
    //Delete
    public void deleteById(long id){
        roleRepository.deleteById(id);
    }

    public List<Role> findAll(){
        return roleRepository.findAll();
    }

    public List<String> getAuthoritiesByRolid(long rolId)
    {
        List<String> authorityNames = new ArrayList<>();
        Role role = roleRepository.findById(rolId).orElse(new Role());
        List<Authority> autorities = role.getAuthorities();
        for (Authority authority : autorities)
        {
            authorityNames.add(authority.getName());
        }
        return authorityNames;
    }

}
