package com.example.sistema.inventario.backend.enfermedadCatastrofica;

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

public class EnfermedadCatastrofica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    
    @Column(length = 50)
    private String tipoEnfermedad;

    @Column(length = 50)
    private String certificadoEnfermedad;

    @Column(length = 50)
    private String cargoDiscapacidad;
    
    @OneToOne(mappedBy = "enfermedadCatastrofica", cascade = CascadeType.ALL)
    private Persona persona;
}
