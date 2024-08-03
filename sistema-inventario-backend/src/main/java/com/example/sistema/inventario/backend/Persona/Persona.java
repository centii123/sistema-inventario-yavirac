package com.example.sistema.inventario.backend.Persona;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import com.example.sistema.inventario.backend.GlobalEntity;
import com.example.sistema.inventario.backend.Carreras.Carreras;
import com.example.sistema.inventario.backend.EscalaOcupacional.EscalaOcupacionales;
import com.example.sistema.inventario.backend.FechaIngresoInstituto.FechaIngresoInstituto;
import com.example.sistema.inventario.backend.Infraestructura.Infraestructura;
import com.example.sistema.inventario.backend.Institutos.Institutos;
import com.example.sistema.inventario.backend.RolesInstitucionales.RolesInstitucionales;
import com.example.sistema.inventario.backend.authz.entity.User;
import com.example.sistema.inventario.backend.entidadPublica.EntidadPublica;
import com.example.sistema.inventario.backend.nacionalidad.Nacionalidad;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class Persona extends GlobalEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 50)
    private String nombres;

    @Column(length = 50)
    private String apellidos;

    @Column(length = 50)
    private String etnia;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(iso = ISO.DATE_TIME)
    private Date fechaDeNacimiento;

    @Column(length = 10)
    private String dni;

    @Column(length = 12)
    private String telefono;

    @Column(length = 12)
    private String telefonoDomicilio;

    @Column(length = 50)
    private String correoPersonal;

    @Column(columnDefinition = "smallint")
    private Integer tipoDeSangre;

    @Column(length = 100)
    private String direccionDomiciliaria;

    @Column(length = 50)
    private String modalidadLaboral;

    @Column(columnDefinition = "smallint")
    private Integer modalidadJornada;

    @Column(length = 25)
    private String horarioTrabajo;

    private String materiasImparte;

    @Column(columnDefinition = "smallint")
    private Integer provincia;

    @Column(columnDefinition = "smallint")
    private Integer genero;

    @Column(columnDefinition = "smallint")
    private Integer estadoCivil;


    @JsonIgnoreProperties(value="persona", allowSetters = true)
    @OneToOne
    @JoinColumn(nullable = true)
    private EntidadPublica entidadPublica;

    @JsonIgnoreProperties(value="persona", allowSetters = true)
    @OneToOne
    @JoinColumn( nullable = true)
    private FechaIngresoInstituto fechaIngresoInstituto;

    @ManyToOne
    private EscalaOcupacionales escalaOcupacionales;

    @ManyToOne
    private Institutos institutos;

    @ManyToOne
    private Nacionalidad nacionalidad;

    @ManyToOne
    private Carreras carreras;

    @ManyToOne
    private RolesInstitucionales rolesInstitucionales;

    @JsonIgnoreProperties("persona")
    @OneToOne(mappedBy = "persona")
    private Infraestructura infraestructura;

    @JsonIgnoreProperties(value="persona", allowSetters = true)
    @OneToOne
    @JoinColumn( nullable = true)
    private User user;
}
