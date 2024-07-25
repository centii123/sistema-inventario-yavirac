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


INSERT INTO authorities (name, endpoint) values ('aula-obtener', 'GET:/aula/');
INSERT INTO authorities (name, endpoint) values ('aula-obtener-id', 'GET:/aula/{id}/');
INSERT INTO authorities (name, endpoint) values ('aula-agregar', 'POST:/aula/');
INSERT INTO authorities (name, endpoint) values ('aula-editar', 'PUT:/aula/{id}/');
INSERT INTO authorities (name, endpoint) values ('aula-eliminar', 'DELETE:/aula/{id}/');

/*permiso para bienes*/
INSERT INTO authorities (name, endpoint) values ('bienes-obtener', 'GET:/bienes/');
INSERT INTO authorities (name, endpoint) values ('bienes-obtener-id', 'GET:/bienes/{id}/');
INSERT INTO authorities (name, endpoint) values ('bienes-obtener-nombre', 'GET:/bienes/{nombre}/');
INSERT INTO authorities (name, endpoint) values ('bienes-agregar', 'POST:/bienes/');
INSERT INTO authorities (name, endpoint) values ('bienes-editar', 'PUT:/bienes/{id}/');
INSERT INTO authorities (name, endpoint) values ('bienes-eliminar', 'DELETE:/bienes/{id}/');

/*permiso para carreras*/
INSERT INTO authorities (name, endpoint) values ('carreras-obtener', 'GET:/carreras/');
INSERT INTO authorities (name, endpoint) values ('carreras-obtener-id', 'GET:/carreras/{id}/');
INSERT INTO authorities (name, endpoint) values ('carreras-agregar', 'POST:/carreras/');
INSERT INTO authorities (name, endpoint) values ('carreras-editar', 'PUT:/carreras/{id}/');
INSERT INTO authorities (name, endpoint) values ('carreras-eliminar', 'DELETE:/carreras/{id}/');

/*permiso para categorias aulas*/
INSERT INTO authorities (name, endpoint) values ('categorias-aulas-obtener', 'GET:/categorias-aulas/');
INSERT INTO authorities (name, endpoint) values ('categorias-aulas-obtener-id', 'GET:/categorias-aulas/{id}/');
INSERT INTO authorities (name, endpoint) values ('categorias-aulas-agregar', 'POST:/categorias-aulas/');
INSERT INTO authorities (name, endpoint) values ('categorias-aulas-editar', 'PUT:/categorias-aulas/{id}/');
INSERT INTO authorities (name, endpoint) values ('categorias-aulas-eliminar', 'DELETE:/categorias-aulas/{id}/');

/*permiso para categorias bienes*/
INSERT INTO authorities (name, endpoint) values ('categorias-bienes-obtener', 'GET:/categorias-bienes/');
INSERT INTO authorities (name, endpoint) values ('categorias-bienes-obtener-id', 'GET:/categorias-bienes/{id}/');
INSERT INTO authorities (name, endpoint) values ('categorias-bienes-agregar', 'POST:/categorias-bienes/');
INSERT INTO authorities (name, endpoint) values ('categorias-bienes-editar', 'PUT:/categorias-bienes/{id}/');
INSERT INTO authorities (name, endpoint) values ('categorias-bienes-eliminar', 'DELETE:/categorias-bienes/{id}/');

/*permiso para discapacidad*/
INSERT INTO authorities (name, endpoint) values ('discapacidad-obtener', 'GET:/discapacidad/');
INSERT INTO authorities (name, endpoint) values ('discapacidad-obtener-id', 'GET:/discapacidad/{id}/');
INSERT INTO authorities (name, endpoint) values ('discapacidad-agregar', 'POST:/discapacidad/');
INSERT INTO authorities (name, endpoint) values ('discapacidad-editar', 'PUT:/discapacidad/{id}/');
INSERT INTO authorities (name, endpoint) values ('discapacidad-eliminar', 'DELETE:/discapacidad/{id}/');

/*permiso para enfermedad-catastrofica*/
INSERT INTO authorities (name, endpoint) values ('enfermedad-catastrofica-obtener', 'GET:/enfermedadCatastrofica/');
INSERT INTO authorities (name, endpoint) values ('enfermedad-catastrofica-obtener-id', 'GET:/enfermedadCatastrofica/{id}/');
INSERT INTO authorities (name, endpoint) values ('enfermedad-catastrofica-agregar', 'POST:/enfermedadCatastrofica/');
INSERT INTO authorities (name, endpoint) values ('enfermedad-catastrofica-editar', 'PUT:/enfermedadCatastrofica/{id}/');
INSERT INTO authorities (name, endpoint) values ('enfermedad-catastrofica-eliminar', 'DELETE:/enfermedadCatastrofica/{id}/');

/*permiso para entidad publica*/
INSERT INTO authorities (name, endpoint) values ('entidad-publica-obtener', 'GET:/entidadPublica/');
INSERT INTO authorities (name, endpoint) values ('entidad-publica-obtener-id', 'GET:/entidadPublica/{id}/');
INSERT INTO authorities (name, endpoint) values ('entidad-publica-agregar', 'POST:/entidadPublica/');
INSERT INTO authorities (name, endpoint) values ('entidad-publica-editar', 'PUT:/entidadPublica/{id}/');
INSERT INTO authorities (name, endpoint) values ('entidad-publica-eliminar', 'DELETE:/entidadPublica/{id}/');

/*permiso para escala ocupacional*/
INSERT INTO authorities (name, endpoint) values ('escala-ocupacional-obtener', 'GET:/escala-ocupacional/');
INSERT INTO authorities (name, endpoint) values ('escala-ocupacional-obtener-id', 'GET:/escala-ocupacional/{id}/');
INSERT INTO authorities (name, endpoint) values ('escala-ocupacional-agregar', 'POST:/escala-ocupacional/');
INSERT INTO authorities (name, endpoint) values ('escala-ocupacional-editar', 'PUT:/escala-ocupacional/{id}/');
INSERT INTO authorities (name, endpoint) values ('escala-ocupacional-eliminar', 'DELETE:/escala-ocupacional/{id}/');

/*permiso para estado civil*/
INSERT INTO authorities (name, endpoint) values ('estado-civil-obtener', 'GET:/estado-civil/');
INSERT INTO authorities (name, endpoint) values ('estado-civil-obtener-id', 'GET:/estado-civil/{id}/');
INSERT INTO authorities (name, endpoint) values ('estado-civil-agregar', 'POST:/estado-civil/');
INSERT INTO authorities (name, endpoint) values ('estado-civil-editar', 'PUT:/estado-civil/{id}/');
INSERT INTO authorities (name, endpoint) values ('estado-civil-eliminar', 'DELETE:/estado-civil/{id}/');

/*permiso para estudios en curso*/
INSERT INTO authorities (name, endpoint) values ('estudios-curso-obtener', 'GET:/estudios-curso/');
INSERT INTO authorities (name, endpoint) values ('estudios-curso-obtener-id', 'GET:/estudios-curso/{id}/');
INSERT INTO authorities (name, endpoint) values ('estudios-curso-agregar', 'POST:/estudios-curso/');
INSERT INTO authorities (name, endpoint) values ('estudios-curso-editar', 'PUT:/estudios-curso/{id}/');
INSERT INTO authorities (name, endpoint) values ('estudios-curso-eliminar', 'DELETE:/estudios-curso/{id}/');

/*permiso para fecha ingreso instituto*/
INSERT INTO authorities (name, endpoint) values ('fecha-ingreso-instituto-obtener', 'GET:/fecha-ingreso-instituto/');
INSERT INTO authorities (name, endpoint) values ('fecha-ingreso-instituto-obtener-id', 'GET:/fecha-ingreso-instituto/{id}/');
INSERT INTO authorities (name, endpoint) values ('fecha-ingreso-instituto-agregar', 'POST:/fecha-ingreso-instituto/');
INSERT INTO authorities (name, endpoint) values ('fecha-ingreso-instituto-editar', 'PUT:/fecha-ingreso-instituto/{id}/');
INSERT INTO authorities (name, endpoint) values ('fecha-ingreso-instituto-eliminar', 'DELETE:/fecha-ingreso-instituto/{id}/');

/*permiso para genero*/
INSERT INTO authorities (name, endpoint) values ('generos-obtener', 'GET:/generos/');
INSERT INTO authorities (name, endpoint) values ('generos-obtener-id', 'GET:/generos/{id}/');
INSERT INTO authorities (name, endpoint) values ('generos-agregar', 'POST:/generos/');
INSERT INTO authorities (name, endpoint) values ('generos-editar', 'PUT:/generos/{id}/');
INSERT INTO authorities (name, endpoint) values ('generos-eliminar', 'DELETE:/generos/{id}/');

/*permiso para institutos*/
INSERT INTO authorities (name, endpoint) values ('institutos-obtener', 'GET:/institutos/');
INSERT INTO authorities (name, endpoint) values ('institutos-obtener-id', 'GET:/institutos/{id}/');
INSERT INTO authorities (name, endpoint) values ('institutos-agregar', 'POST:/institutos/');
INSERT INTO authorities (name, endpoint) values ('institutos-editar', 'PUT:/institutos/{id}/');
INSERT INTO authorities (name, endpoint) values ('institutos-eliminar', 'DELETE:/institutos/{id}/');

/*permiso para nacionalidad*/
INSERT INTO authorities (name, endpoint) values ('nacionalidad-obtener', 'GET:/nacionalidad/');
INSERT INTO authorities (name, endpoint) values ('nacionalidad-obtener-id', 'GET:/nacionalidad/{id}/');
INSERT INTO authorities (name, endpoint) values ('nacionalidad-agregar', 'POST:/nacionalidad/');
INSERT INTO authorities (name, endpoint) values ('nacionalidad-editar', 'PUT:/nacionalidad/{id}/');
INSERT INTO authorities (name, endpoint) values ('nacionalidad-eliminar', 'DELETE:/nacionalidad/{id}/');

/*permiso para persona*/
INSERT INTO authorities (name, endpoint) values ('persona-obtener', 'GET:/persona/');
INSERT INTO authorities (name, endpoint) values ('persona-obtener-id', 'GET:/persona/{id}/');
INSERT INTO authorities (name, endpoint) values ('persona-obtener-dni', 'GET:/persona/{dni}/');
INSERT INTO authorities (name, endpoint) values ('persona-agregar', 'POST:/persona/');
INSERT INTO authorities (name, endpoint) values ('persona-editar', 'PUT:/persona/{id}/');
INSERT INTO authorities (name, endpoint) values ('persona-eliminar', 'DELETE:/persona/{id}/');

/*permiso para provincias*/
INSERT INTO authorities (name, endpoint) values ('provincias-obtener', 'GET:/provincias/');
INSERT INTO authorities (name, endpoint) values ('provincias-obtener-id', 'GET:/provincias/{id}/');
INSERT INTO authorities (name, endpoint) values ('provincias-agregar', 'POST:/provincias/');
INSERT INTO authorities (name, endpoint) values ('provincias-editar', 'PUT:/provincias/{id}/');
INSERT INTO authorities (name, endpoint) values ('provincias-eliminar', 'DELETE:/provincias/{id}/');

/*permiso para roles institucionales*/
INSERT INTO authorities (name, endpoint) values ('roles-institucionales-obtener', 'GET:/roles-institucionales/');
INSERT INTO authorities (name, endpoint) values ('roles-institucionales-obtener-id', 'GET:/roles-institucionales/{id}/');
INSERT INTO authorities (name, endpoint) values ('roles-institucionales-agregar', 'POST:/roles-institucionales/');
INSERT INTO authorities (name, endpoint) values ('roles-institucionales-editar', 'PUT:/roles-institucionales/{id}/');
INSERT INTO authorities (name, endpoint) values ('roles-institucionales-eliminar', 'DELETE:/roles-institucionales/{id}/');

/*permiso para titulos*/
INSERT INTO authorities (name, endpoint) values ('titulos-obtener', 'GET:/titulos/');
INSERT INTO authorities (name, endpoint) values ('titulos-obtener-id', 'GET:/titulos/{id}/');
INSERT INTO authorities (name, endpoint) values ('titulos-agregar', 'POST:/titulos/');
INSERT INTO authorities (name, endpoint) values ('titulos-editar', 'PUT:/titulos/{id}/');
INSERT INTO authorities (name, endpoint) values ('titulos-eliminar', 'DELETE:/titulos/{id}/');

/*datos roles*/
INSERT INTO roles (name) values ('ROLE_USUARIO_DE_APOYO');
INSERT INTO roles (name) values ('ROLE_ADMIN');

/*datos roles_authorities*/
INSERT INTO roles_authorities (role_id, authority_id) (select (SELECT id FROM roles where name = 'ROLE_ADMIN')  AS role_id, e.id from authorities e );

/*datos roles_authorities*/
INSERT INTO roles_authorities (role_id, authority_id) (select (SELECT id FROM roles where name = 'ROLE_USUARIO_DE_APOYO')  AS role_id, e.id from authorities e );


/*datos roles*/


/*datos usuario*/
INSERT INTO users ( username, password, looked, expired, enabled) VALUES ( 'amparito', '$2a$10$TwROhi2MZsOTt8igkE7Yyec0WfjK7NlgdX9apOu0b6cY4SxzHLvCq', false, false, true);
INSERT INTO users ( username, password, looked, expired, enabled) VALUES ( 'user_apoyo', '$2a$10$TwROhi2MZsOTt8igkE7Yyec0WfjK7NlgdX9apOu0b6cY4SxzHLvCq', false, false, true);

/*datos usuario roles*/
INSERT INTO users_roles (user_id, role_id) VALUES ((SELECT id FROM users where username = 'amparito'), (SELECT id FROM roles where name = 'ROLE_ADMIN'));
INSERT INTO users_roles (user_id, role_id) VALUES ((SELECT id FROM users where username = 'user_apoyo'), (SELECT id FROM roles where name = 'ROLE_USUARIO_DE_APOYO'));

/**/
INSERT INTO roles_institucionales (descripcion,created_at, updated_at)
VALUES
  ('kaka','2023-07-20 10:00:00', '2023-07-20 10:00:00' ),
  ('sugyd','2023-07-20 10:00:00', '2023-07-20 10:00:00'),
  ('dygsddd','2023-07-20 10:00:00', '2023-07-20 10:00:00');

/**/
INSERT INTO estado_civil (nombre,created_at, updated_at)
VALUES
  ('casado','2023-07-20 10:00:00', '2023-07-20 10:00:00'),
  ('soltero','2023-07-20 10:00:00', '2023-07-20 10:00:00'),
  ('divorciado','2023-07-20 10:00:00', '2023-07-20 10:00:00');

/**/
INSERT INTO fecha_ingreso_instituto (cambio_grupo_ocupacional_modalidad,created_at, updated_at, cambio_instituto_fusion, cambio_ocupacional_emergencia, primer_ingreso)
VALUES
  ('2023-06-01 08:00:00','2023-07-20 10:00:00', '2023-07-20 10:00:00', '2024-01-15 09:30:00', '2022-11-20 14:45:00', '2021-03-05 07:15:00'),
  ('2022-05-10 10:20:00','2023-07-20 10:00:00', '2023-07-20 10:00:00', '2023-07-25 11:45:00', '2023-03-15 12:30:00', '2020-02-10 08:50:00'),
  ('2021-04-22 15:00:00','2023-07-20 10:00:00', '2023-07-20 10:00:00', '2022-12-30 16:30:00', '2021-09-05 17:45:00', '2019-01-20 09:15:00');

/**/
INSERT INTO carreras(descripcion,created_at, updated_at)
VALUES ('desarrollo de software','2023-07-20 10:00:00', '2023-07-20 10:00:00'),('marketing','2023-07-20 10:00:00', '2023-07-20 10:00:00'),('diseño de modas','2023-07-20 10:00:00', '2023-07-20 10:00:00');

/**/

INSERT INTO provincias(descripcion,created_at, updated_at)
VALUES ('pichincha','2023-07-20 10:00:00', '2023-07-20 10:00:00'),('Guayas','2023-07-20 10:00:00', '2023-07-20 10:00:00'),('Azuay','2023-07-20 10:00:00', '2023-07-20 10:00:00');
/**/
INSERT INTO institutos
(canton,created_at, updated_at, coordinacion_zonal, direccion_instituto, nombre, regimen_laboral, provincias_id)
VALUES ('Quito','2023-07-20 10:00:00', '2023-07-20 10:00:00', 'Zona Norte', 'Av. Amazonas y Naciones Unidas', 'Colegio Simón Bolívar', 'Contrato temporal', 1),
('Guayaquil','2023-07-20 10:00:00', '2023-07-20 10:00:00', 'Zona Sur', 'Av. Kennedy y Benjamín Carrión', 'Colegio Juan Montalvo', 'Contrato indefinido', 2),
('Cuenca','2023-07-20 10:00:00', '2023-07-20 10:00:00', 'Zona Centro', 'Av. de las Américas y Huayna Cápac', 'Escuela 9 de Octubre', 'Contrato a plazo fijo', 1);




/**/
INSERT INTO categorias_aulas(descripcion,created_at, updated_at)
VALUES ('oficina','2023-07-20 10:00:00', '2023-07-20 10:00:00'),('aula','2023-07-20 10:00:00', '2023-07-20 10:00:00'),('laboratorio','2023-07-20 10:00:00', '2023-07-20 10:00:00');

/**/
INSERT INTO enfermedad_catastrofica (cargo_discapacidad,created_at, updated_at, certificado_enfermedad, tipo_enfermedad)
VALUES (2,'2023-07-20 10:00:00', '2023-07-20 10:00:00', 'ministerio_salud', 'insuficiencia renal'), (2,'2023-07-20 10:00:00', '2023-07-20 10:00:00', 'iess','cancer');



/**/
INSERT INTO nacionalidad (nombre,created_at, updated_at)
VALUES ('ecuatoriano','2023-07-20 10:00:00', '2023-07-20 10:00:00');

/**/
INSERT INTO entidad_publica(codigo_instituto,created_at, updated_at, entidad_publica, familiar_senecsyt, honorario_senecsyt, nombre_familiar, observaciones)
VALUES ('15','2023-07-20 10:00:00', '2023-07-20 10:00:00',1,1, 1, 'Johan', 'nuevo empleado' ),
('20','2023-07-20 10:00:00', '2023-07-20 10:00:00',2,1, 0, 'Maria', 'empleado transferido' );

/**/
INSERT INTO discapacidad (numero_carnet,created_at, updated_at, porcentaje, tipo_discapacidad)
VALUES ('123456','2023-07-20 10:00:00', '2023-07-20 10:00:00', 15, 'discapacidad física'),
('789012','2023-07-20 10:00:00', '2023-07-20 10:00:00', 30, 'discapacidad sensorial');

/**/
INSERT INTO escala_ocupacionales (descripcion,created_at, updated_at) VALUES
('rector','2023-07-20 10:00:00', '2023-07-20 10:00:00'), ('docente','2023-07-20 10:00:00', '2023-07-20 10:00:00');

/**/
INSERT INTO titulos (titulos_optenidos,created_at, updated_at ,institucion, ano_del_titulo, intruccion_formal,numero_de_registro_senesyt) 
VALUES ('ing. mecánico','2023-07-20 10:00:00', '2023-07-20 10:00:00', 'U. central', '2002-05-10', 'tercer nivel', '4646465144');

/**/
INSERT INTO generos ( nombre,created_at, updated_at ) VALUES ('masculino','2023-07-20 10:00:00', '2023-07-20 10:00:00');

/**/
INSERT INTO estudiosen_cursos ( nombre,created_at, updated_at, tipo_de_titulo, fecha_de_inicio, fecha_de_fin, numero_de_horas) VALUES
('masterado en mecanica','2023-07-20 10:00:00', '2023-07-20 10:00:00', 'phd', '2024-06-05', '2025-09-07', 523);

/**/
INSERT INTO categorias_bienes ( nombre,created_at, updated_at ) VALUES ('CPU','2023-07-20 10:00:00', '2023-07-20 10:00:00');




/**/
INSERT INTO persona
(apellidos,created_at, updated_at, correo_personal, direccion_domiciliaria, dni, etnia, 
fecha_de_nacimiento, horario_trabajo, materias_imparte, modalidad_jornada, 
modalidad_laboral, nombres, rmu, telefono, telefono_domicilio, tipo_de_sangre, carreras_id, discapacidad_id, enfermedad_catastrofica_id, entidad_publica_id, 
escala_ocupacionales_id, estado_civil_id, estudiosen_cursos_id, 
fecha_ingreso_instituto_id, genero_id, institutos_id, nacionalidad_id, 
provincia_id, roles_institucionales_id, user_id)
VALUES 
('Gómez','2023-07-20 10:00:00', '2023-07-20 10:00:00', 'gomez@example.com', 'Av. Principal 123', '1234567890', 'Mestizo', 
'1990-05-15', '08:00-17:00', 'Matemáticas, Física', 1, 
'Tiempo completo', 'Juan', 1500.50, '0987654321', '022345678', 'O+', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1),
('Pérez','2023-07-20 10:00:00', '2023-07-20 10:00:00', 'perez@example.com', 'Calle Secundaria 456', '0987654321', 'Indígena', 
'1985-10-20', '07:00-16:00', 'Historia, Literatura', 1, 
'Medio tiempo', 'María', 1200.75, '0998765432', '033456789', 'A-', 2, 2, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1,2);


/**/
INSERT INTO aula (created_at, updated_at, descripcion, nombre, categoria_aula_id, persona_id)
VALUES ('2023-07-20 10:00:00', '2023-07-20 10:00:00', 'cyan', 'piso 2',1,1),
('2023-07-20 10:00:00', '2023-07-20 10:00:00', 'pachica', 'piso 1',2,2);

/**/
INSERT INTO bienes (codigo_del_bien,created_at, updated_at, custodio, descripcion, estado, marca, modelo, nombre, observaciones, serie, valor, valor_iva, categoria_bien_id,aula_id)
VALUES
  ('wwwputow7w7gf','2023-07-20 10:00:00', '2023-07-20 10:00:00', 1, 'nueva', true, 'hp', 'm7x', 'laptop', 'sin observaciones', '12345abc', 15.1, 11, 1,1),
  ('abcde12345','2023-07-20 10:00:00', '2023-07-20 10:00:00', 2, 'antiguo', false, 'dell', 'xps13', 'ordenador', 'requiere mantenimiento', '67890def', 20.5, 16, 1,2),
  ('fghij67890','2023-07-20 10:00:00', '2023-07-20 10:00:00', 3, 'nuevo', true, 'acer', 'swift3', 'laptop', 'sin detalles', '54321ghi', 25.0, 21, 1,2);

/*INSERT INTO aula_bienes(
	aula_id, bienes_id)
	VALUES (1, 1), (1, 2), (1, 3);*/


/*permiso para aulas*/

/*borrar los datos de roles_authorities para poder volver a cargar los datos con los nuevos permisos sin que se repitan.
DELETE FROM roles_authorities;*/