package com.example.sistema.inventario.backend.RolesInstitucionales;

import com.example.sistema.inventario.backend.GlobalEntity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
public class RolesInstitucionales extends GlobalEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 50)
    private String descripcion;
}
