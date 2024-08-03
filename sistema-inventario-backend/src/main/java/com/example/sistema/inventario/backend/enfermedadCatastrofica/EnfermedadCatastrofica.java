package com.example.sistema.inventario.backend.enfermedadCatastrofica;

import com.example.sistema.inventario.backend.GlobalEntity;
import com.example.sistema.inventario.backend.Persona.Persona;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
public class EnfermedadCatastrofica extends GlobalEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    
    @Column(length = 50)
    private String tipoEnfermedad;

    @Column(length = 50)
    private String institucionCertificaEnfermedad;

    @Column(columnDefinition = "smallint")
    private Integer cargoPersonaDiscapacidad;
    
    @ManyToOne
    @JsonIgnoreProperties("enfermedadCatastrofica")
    private Persona persona;
}
