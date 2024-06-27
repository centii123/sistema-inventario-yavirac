package com.example.sistema.inventario.backend.EscalaOcupacional;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("escala-ocupacional")
@CrossOrigin({ "*" })
public class EscalaOcupacionalesController {

    @Autowired
    EscalaOcupacionalesService service;

    @GetMapping("/")
    public List<EscalaOcupacionales> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}/")
    public EscalaOcupacionales findById(@PathVariable long id) {
        return service.findById(id);
    }

    @PostMapping("/")
    public EscalaOcupacionales save(@RequestBody EscalaOcupacionales enntity) {
        return service.save(enntity);
    }

    @PutMapping("/")
    public EscalaOcupacionales update(@RequestBody EscalaOcupacionales entity) {
        return service.save(entity);
    }

    @DeleteMapping("/{id}/")
    public void deeteById(@PathVariable long id) {
        service.deeteById(id);
    }

}