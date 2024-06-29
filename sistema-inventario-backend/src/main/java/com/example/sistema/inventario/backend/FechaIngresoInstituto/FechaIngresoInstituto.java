package com.example.sistema.inventario.backend.FechaIngresoInstituto;
import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.example.sistema.inventario.backend.Persona.Persona;

import lombok.Data;
import java.util.Date;

@Data
@Entity
public class FechaIngresoInstituto {

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

    @OneToOne(mappedBy = "fechaIngresoInstituto", cascade = CascadeType.ALL)
    private Persona persona;
}
