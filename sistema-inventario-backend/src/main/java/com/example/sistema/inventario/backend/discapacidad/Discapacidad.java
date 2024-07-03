package com.example.sistema.inventario.backend.discapacidad;

import com.example.sistema.inventario.backend.Persona.Persona;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity

public class Discapacidad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;

    @Column (length = 50)
    private String numeroCarnet;

    private Integer porcentaje;

    @Column (length =  50)
    private String tipoDiscapacidad;
    
    @JsonIgnoreProperties("discapacidad")
    @OneToOne(mappedBy = "discapacidad", cascade = CascadeType.ALL)
    private Persona persona;
}
