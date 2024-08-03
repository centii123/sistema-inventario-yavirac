package com.example.sistema.inventario.backend.discapacidad;

import com.example.sistema.inventario.backend.GlobalEntity;
import com.example.sistema.inventario.backend.Persona.Persona;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class Discapacidad extends GlobalEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;

    @Column (length = 50)
    private String numeroCarnet;
    
    @Column (length =  3)
    private String porcentaje;

    @Column (length =  50)
    private String tipoDiscapacidad;
    
    @ManyToOne
    private Persona persona;
}
