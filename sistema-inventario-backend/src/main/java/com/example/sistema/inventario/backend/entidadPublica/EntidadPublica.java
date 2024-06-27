package com.example.sistema.inventario.backend.entidadPublica;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class EntidadPublica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 50)
    private String entidadPublica;

    @Column(length = 50)
    private String honorarioSenecsyt;

    @Column(length = 50)
    private String familiarSenecsyt;

    @Column(length = 50)
    private String nombreFamiliar;

    @Column(length = 50)
    private String observaciones;

    @Column(length = 50)
    private String codigoInstituto;

    

}
