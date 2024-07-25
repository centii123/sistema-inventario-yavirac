package com.example.sistema.inventario.backend.aula;
 // Importación correcta
import java.util.List;

import com.example.sistema.inventario.backend.GlobalEntity;
import com.example.sistema.inventario.backend.Bienes.Bienes;
import com.example.sistema.inventario.backend.CategoriasAulas.CategoriasAulas;
import com.example.sistema.inventario.backend.Persona.Persona;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class Aula extends GlobalEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;  // Usar 'id' en lugar de 'Id' por convención

    @Column(length = 50)
    private String nombre;

    @Column(length = 100)
    private String descripcion;

    @ManyToOne
    private CategoriasAulas categoriaAula;

    @JsonIgnoreProperties("aula")
    @OneToOne
    @JoinColumn( updatable = false, nullable = true)
    private Persona persona;

    @JsonIgnoreProperties("aula")
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "aula")
    private List<Bienes> bienes;
}
