package com.example.sistema.inventario.backend.enfermedadCatastrofica;

import com.example.sistema.inventario.backend.GlobalEntity;
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

public class EnfermedadCatastrofica extends GlobalEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    
    @Column(length = 50)
    private String tipoEnfermedad;

    @Column(length = 50)
    private String certificadoEnfermedad;

    @Column(length = 50)
    private String cargoDiscapacidad;
    
    @JsonIgnoreProperties("enfermedadCatastrofica")
    @OneToOne(mappedBy = "enfermedadCatastrofica", cascade = CascadeType.ALL)
    private Persona persona;
}
