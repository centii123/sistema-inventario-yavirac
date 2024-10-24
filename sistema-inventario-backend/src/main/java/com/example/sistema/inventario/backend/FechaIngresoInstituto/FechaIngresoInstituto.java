package com.example.sistema.inventario.backend.FechaIngresoInstituto;
import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.example.sistema.inventario.backend.GlobalEntity;
import com.example.sistema.inventario.backend.Persona.Persona;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class FechaIngresoInstituto extends GlobalEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(iso = ISO.DATE_TIME)
    private Date cambioOcupacionalEmergencia;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(iso = ISO.DATE_TIME)
    private Date primerIngreso;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(iso = ISO.DATE_TIME)
    private Date cambioGrupoOcupacionalModalidad;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(iso = ISO.DATE_TIME)
    private Date cambioInstitutoFusion;

    @JsonIgnoreProperties("fechaIngresoInstituto")
    @OneToOne(mappedBy = "fechaIngresoInstituto", cascade = CascadeType.ALL)
    private Persona persona;
}
