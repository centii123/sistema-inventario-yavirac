/*datos authorities*/
INSERT INTO authorities (name, endpoint) values ('User_Write', 'POST:/api/user/');
INSERT INTO authorities (name, endpoint) values ('User_Read', 'GET:/api/user/');
INSERT INTO authorities (name, endpoint) values ('UserById_Read', 'GET:/api/user/{id}/');
INSERT INTO authorities (name, endpoint) values ('User_Delete', 'DELETE:/api/user/{id}/');
INSERT INTO authorities (name, endpoint) values ('User_Update', 'PUT:/api/user/{id}/');
INSERT INTO authorities (name, endpoint) values ('User_PartialUpdate', 'PATCH:/api/user/{id}/');

INSERT INTO authorities (name, endpoint) values ('Role_Write', 'POST:/api/role/');
INSERT INTO authorities (name, endpoint) values ('Role_Read', 'GET:/api/role/');
INSERT INTO authorities (name, endpoint) values ('RoleById_Read', 'GET:/api/role/{id}/');
INSERT INTO authorities (name, endpoint) values ('Role_Delete', 'DELETE:/api/role/{id}/');
INSERT INTO authorities (name, endpoint) values ('Role_Update', 'PUT:/api/role/{id}/');
INSERT INTO authorities (name, endpoint) values ('Role_PartialUpdate', 'PATCH:/api/role/');

INSERT INTO authorities (name, endpoint) values ('Authority_Write', 'POST:/api/authority/');
INSERT INTO authorities (name, endpoint) values ('Authority_Read', 'GET:/api/authority/');
INSERT INTO authorities (name, endpoint) values ('AuthorityById_Read', 'GET:/api/authority/{id}/');
INSERT INTO authorities (name, endpoint) values ('Authority_Delete', 'DELETE:/api/authority/{id}/');
INSERT INTO authorities (name, endpoint) values ('Authority_Update', 'PUT:/api/authority/{id}/');
INSERT INTO authorities (name, endpoint) values ('Authority_PartialUpdate', 'PATCH:/api/authority/{id}/');
INSERT INTO authorities (name, endpoint) values ('AuthorityByUser_Read', 'GET:/api/authority/byuser/{id}/');

/*datos roles*/
INSERT INTO roles (name) values ('ROLE_ADMIN');

/*datos roles_authorities*/
INSERT INTO roles_authorities (role_id, authority_id) (select (SELECT id FROM roles where name = 'ROLE_ADMIN')  AS role_id, e.id from authorities e );

/*datos usuario*/
INSERT INTO users (name, username, password, looked, expired, enabled) VALUES ('Admin', 'admin', '$2a$10$TwROhi2MZsOTt8igkE7Yyec0WfjK7NlgdX9apOu0b6cY4SxzHLvCq', false, false, true);

/*datos usuario roles*/
INSERT INTO users_roles (user_id, role_id) VALUES ((SELECT id FROM users where username = 'admin'), (SELECT id FROM roles where name = 'ROLE_ADMIN'));




/**/
INSERT INTO roles_institucionales (descripcion)
VALUES
  ('kaka' ),
  ('sugyd'),
  ('dygsddd');

/**/
INSERT INTO estado_civil (nombre)
VALUES
  ('casado'),
  ('soltero'),
  ('divorciado');

/**/
INSERT INTO fecha_ingreso_instituto (cambio_grupo_ocupacional_modalidad, cambio_instituto_fusion, cambio_ocupacional_emergencia, primer_ingreso)
VALUES
  ('2023-06-01 08:00:00', '2024-01-15 09:30:00', '2022-11-20 14:45:00', '2021-03-05 07:15:00'),
  ('2022-05-10 10:20:00', '2023-07-25 11:45:00', '2023-03-15 12:30:00', '2020-02-10 08:50:00'),
  ('2021-04-22 15:00:00', '2022-12-30 16:30:00', '2021-09-05 17:45:00', '2019-01-20 09:15:00');

/**/
INSERT INTO carreras(descripcion)
VALUES ('desarrollo de software'),('marketing'),('diseño de modas');

/**/

INSERT INTO provincias(descripcion)
VALUES ('pichincha'),('Guayas'),('Azuay');
/**/
INSERT INTO institutos
(canton, coordinacion_zonal, direccion_instituto, nombre, regimen_laboral, provincias_id)
VALUES ('Quito', 'Zona Norte', 'Av. Amazonas y Naciones Unidas', 'Colegio Simón Bolívar', 'Contrato temporal', 1),
('Guayaquil', 'Zona Sur', 'Av. Kennedy y Benjamín Carrión', 'Colegio Juan Montalvo', 'Contrato indefinido', 2),
('Cuenca', 'Zona Centro', 'Av. de las Américas y Huayna Cápac', 'Escuela 9 de Octubre', 'Contrato a plazo fijo', 1);




/**/
INSERT INTO categorias_aulas(descripcion)
VALUES ('oficina'),('aula'),('laboratorio');

/**/
INSERT INTO enfermedad_catastrofica (cargo_discapacidad, certificado_enfermedad, tipo_enfermedad)
VALUES (2, 'ministerio_salud', 'insuficiencia renal'), (2, 'iess','cancer');

/**/
INSERT INTO aula (custodio, descripcion, instruccion_formal, nombre, obtencion_titulo, registro_senesyt)
VALUES ('johan', 'mesa', 'docente', 'johan', '2024-07-01',1425),
('maria', 'silla', 'administrativa', 'maria', '2023-05-15',9876);

/**/
INSERT INTO nacionalidad (nombre)
VALUES ('ecuatoriano');

/**/
INSERT INTO entidad_publica(codigo_instituto, entidad_publica, familiar_senecsyt, honorario_senecsyt, nombre_familiar, observaciones)
VALUES ('15',1,1, 1, 'Johan', 'nuevo empleado' ),
('20',2,1, 0, 'Maria', 'empleado transferido' );

/**/
INSERT INTO discapacidad (numero_carnet, porcentaje, tipo_discapacidad)
VALUES ('123456', 15, 'discapacidad física'),
('789012', 30, 'discapacidad sensorial');

/**/
INSERT INTO escala_ocupacionales (descripcion) VALUES
('rector'), ('docente');

/**/
INSERT INTO titulos (titulos_optenidos ,institucion, ano_del_titulo, intruccion_formal,numero_de_registro_senesyt) 
VALUES ('ing. mecánico', 'U. central', '2002-05-10', 'tercer nivel', '4646465144');

/**/
INSERT INTO generos ( nombre ) VALUES ('masculino');

/**/
INSERT INTO estudiosen_cursos ( nombre, tipo_de_titulo, fecha_de_inicio, fecha_de_fin, numero_de_horas) VALUES
('masterado en mecanica', 'phd', '2024-06-05', '2025-09-07', 523);

/**/
INSERT INTO categorias_bienes ( nombre ) VALUES ('CPU');

/**/
INSERT INTO bienes (codigo_del_bien, custodio, descripcion, estado, marca, modelo, nombre, observaciones, serie, valor, valor_iva, categoria_bien_id)
VALUES
  ('wwwputow7w7gf', 1, 'nueva', true, 'hp', 'm7x', 'laptop', 'sin observaciones', '12345abc', 15.1, 11, 1),
  ('abcde12345', 2, 'antiguo', false, 'dell', 'xps13', 'ordenador', 'requiere mantenimiento', '67890def', 20.5, 16, 1),
  ('fghij67890', 3, 'nuevo', true, 'acer', 'swift3', 'laptop', 'sin detalles', '54321ghi', 25.0, 21, 1);


/**/
INSERT INTO persona
(apellidos, correo_personal, direccion_domiciliaria, dni, etnia, 
fecha_de_nacimiento, horario_trabajo, materias_imparte, modalidad_jornada, 
modalidad_laboral, nombres, rmu, telefono, telefono_domicilio, tipo_de_sangre, 
aula_id, discapacidad_id, enfermedad_catastrofica_id, entidad_publica_id, 
escala_ocupacionales_id, estado_civil_id, estudiosen_cursos_id, 
fecha_ingreso_instituto_id, genero_id, institutos_id, nacionalidad_id, 
provincia_id, roles_institucionales_id)
VALUES 
('Gómez', 'gomez@example.com', 'Av. Principal 123', '1234567890', 'Mestizo', 
'1990-05-15', '08:00-17:00', 'Matemáticas, Física', 1, 
'Tiempo completo', 'Juan', 1500.50, '0987654321', '022345678', 'O+', 
1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('Pérez', 'perez@example.com', 'Calle Secundaria 456', '0987654321', 'Indígena', 
'1985-10-20', '07:00-16:00', 'Historia, Literatura', 1, 
'Medio tiempo', 'María', 1200.75, '0998765432', '033456789', 'A-', 
2, 2, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1);

INSERT INTO aula_bienes(
	aula_id, bienes_id)
	VALUES (1, 1), (1, 2), (1, 3);
