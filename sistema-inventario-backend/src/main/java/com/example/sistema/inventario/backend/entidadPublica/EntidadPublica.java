package com.example.sistema.inventario.backend.entidadPublica;


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
import lombok.EqualsAndHashCode;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class EntidadPublica extends GlobalEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(columnDefinition = "smallint")
    private Integer laboraOtraEntidadPublica;

    @Column(columnDefinition = "smallint")
    private Integer RecibeOtroHonorarioSenecsyt;

    @Column(columnDefinition = "smallint")
    private Integer TienefamiliaresLaboraSenecsyt;
    
    private String observaciones;

    @Column(length = 50)
    private String codigoInstitutoLabore;

    @JsonIgnoreProperties("entidadPublica")
    @OneToOne(mappedBy = "entidadPublica", cascade = CascadeType.ALL)
    private Persona persona;

}
