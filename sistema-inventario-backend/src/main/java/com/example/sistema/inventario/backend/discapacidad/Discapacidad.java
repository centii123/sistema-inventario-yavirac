package com.example.sistema.inventario.backend.discapacidad;

import com.example.sistema.inventario.backend.Persona.Persona;

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

    @Column (length = 50)
    private Number porcentaje;

    @Column (length =  50)
    private String tipoDiscapacidad;
    
    @OneToOne(mappedBy = "discapacidad", cascade = CascadeType.ALL)
    private Persona payment;
}
