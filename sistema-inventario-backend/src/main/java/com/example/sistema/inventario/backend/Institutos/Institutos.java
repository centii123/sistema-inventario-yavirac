package com.example.sistema.inventario.backend.Institutos;

import com.example.sistema.inventario.backend.GlobalEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class Institutos extends GlobalEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String nombre;

    @Column(length = 30)
    private String coordinacionZonal;

    @Column(length = 50)
    private String canton;

    @Column(length = 50)
    private String direccionInstituto;
    
    @Column(length = 50)
    private String regimenLaboral;

    @Column(columnDefinition = "smallint")
    private Integer provincias;
}
