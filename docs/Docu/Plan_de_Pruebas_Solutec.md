
# Plan de Pruebas 

**TecniCORE**

**Autores:**
- David Martínez Rascón | A00232453  
- Kanaru Ito | A01723367  
- Héctor Pablo González Espinosa | A01722968  
- Daniel González Orta | A01276941  
- Nicolás Andre Alfaro Gzz | A00840471

**Ubicación y fecha:** Monterrey, Nuevo León, Marzo 2025

---

## 1. Bitácora de Cambios

| Fecha       | Modificado por             | Versión | Descripción                                                             |
|-------------|----------------------------|---------|-------------------------------------------------------------------------|
| 13/03/2025  | David Martínez Rascón      | 1.0     | Creación de la primera versión, integración de casos de prueba.         |
| 07/04/2025  | David Martínez Rascón      | 2.0     | Nuevos casos de prueba y características a probar en el siguiente sprint.|

---

## 2. Tabla de Contenido

1. [Introducción](#3-introducción)  
2. [Entregables](#4-entregables)  
3. [Características a ser probadas](#5-características-a-ser-probadas)  
4. [Características a no ser probadas](#6-características-a-no-ser-probadas)  
5. [Necesidades ambientales](#7-necesidades-ambientales)  
6. [Capacitaciones](#8-capacitaciones)  
7. [Riesgos](#9-riesgos)  

---

## 3. Introducción

### 3.1 Estrategia de Pruebas

Se realizarán pruebas de caja blanca y pruebas manuales, con acceso a la base de datos y al código del front-end, para interactuar directamente con la herramienta TecniCORE. Las pruebas deben garantizar que el sistema se comporte de manera estable, coherente y sin errores, incluso en casos extremos.

### 3.2 Alcance

Se probarán los elementos esenciales de la versión inicial de TecniCORE. Si todos los aspectos funcionan correctamente y son validados, se considerará apto para su distribución.

---

## 4. Entregables

| Documento               | Persona que entrega             | Persona que recibe               |
|-------------------------|----------------------------------|----------------------------------|
| Plan de Pruebas Inicial | David Martínez Rascón           | Rolando Evelio Pérez             |
| Entregable_2            | David Martínez Rascón           | Rolando Evelio Pérez             |
| Reporte de errores      | Héctor Pablo González Espinosa  | David Martínez Rascón            |
| Base de datos           | Daniel González Orta            | —                                |

---

## 5. Características a Ser Probadas

| Sprint | Característica              | Descripción                                                                 | Módulo    |
|--------|-----------------------------|-----------------------------------------------------------------------------|-----------|
| 1      | Inicio de sesión            | Validación de credenciales y redirección correcta.                         | FrontEnd  |
| 1      | Navegación en cursos        | Visualización y navegación entre los cursos asignados.                     | FrontEnd  |

---

## 6. Características a No Ser Probadas

| Sprint | Característica              | Descripción                                                                 | Módulo      |
|--------|-----------------------------|-----------------------------------------------------------------------------|-------------|
| 1      | Visualización de cursos     | Visualización de cursos con nombre, descripción y empleados asignados.     | BackEnd     |
| 1      | Implementación de minijuegos| Verificación de mecánicas y lógica de puntuación.                          | Videojuegos |
| 1      | Modificación de cursos      | Edición y visualización de progreso.                                       | FrontEnd    |
| 1      | Página de inicio personalizada | Cada usuario tiene su vista personalizada.                             | FrontEnd    |

**Justificación:** Algunas funciones no están diseñadas completamente o no son prioridad.  
**Riesgo:** Fallas en autenticación o visualización de datos si se omite.

---

## 7. Necesidades Ambientales

| Dispositivo | Marca / Modelo                       | Características                                               | ¿Disponible? |
|-------------|--------------------------------------|---------------------------------------------------------------|--------------|
| Laptop      | Apple MacBook Air (Intel i5)         | 8 GB RAM, 2560x1600, macOS                                    | Sí           |
| Laptop      | MacBook Air 2020 (M1)                | 16 GB RAM, macOS 15.1.1                                       | Sí           |
| Laptop      | Windows (Intel Ultra 9)              | Gráficos Intel Arc                                            | Sí           |
| Laptop      | Windows (Intel i7-1185G7)            | 14" FHD, DDR4 RAM                                              | Sí           |
| Laptop      | Windows (AMD Ryzen 9)                | Resolución 1980x1080, Windows 11 (Beta)                        | Sí           |

---

## 8. Capacitaciones

| Instructor                   | Capacitado(s)                             | Tema                    | Inicio      | Fin         | Duración | Costo |
|------------------------------|-------------------------------------------|-------------------------|-------------|-------------|----------|-------|
| Jesús Carlos Morón García    | Equipo completo                           | HTML, CSS, JS           | 10/02/2025  | 06/03/2025  | 4/semana | \$0    |
| YouTube                      | Héctor P. González Espinosa               | APIs                    | 07/03/2025  | 10/03/2025  | 4        | \$0    |
| YouTube                      | Nicolás Alfaro                            | C#                      | 10/03/2025  | 13/03/2025  | 4        | \$0    |
| Roberto Chem Escobar         | Kanaru Ito                                | Unity 2D                | 11/02/2025  | 11/03/2025  | 4/semana | \$0    |
| YouTube / Internet           | David Martínez Rascón                     | Flask                   | 17/03/2025  | 21/03/2025  | 2        | \$0    |

---

## 9. Riesgos

| ID | Riesgo                                                  | Probabilidad | Impacto | Acciones Preventivas / Correctivas                                                  |
|----|----------------------------------------------------------|--------------|---------|--------------------------------------------------------------------------------------|
| 01 | BD mal conectada, vacía o defectuosa                    | Baja/Media   | Alto    | Verificar conexión y datos; corregir la API.                                         |
| 02 | Fallo del software en presentación                      | Baja         | Alto    | Respaldo en varios equipos; usar versión de respaldo en caso de error.              |
| 03 | Errores de lógica en puntuación de juegos               | Media        | Alto    | Pruebas unitarias; revisar y corregir lógicas de vida y puntaje.                    |
| 04 | Retrasos en el desarrollo                               | Alta         | Alto    | Replanificar tareas y recursos según el avance; utilizar herramientas de gestión.   |


## 10. Pruebas
| Num de la prueba | Tester       | Herramienta a probar                         | Historia de Usuario                                                                                                                                           | Comentarios                                                                                                         | Resultado   |
|------------------|--------------|----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|-------------|
| 01               | Hector Pablo | Previsualización de los cursos.              | Como usuario del sitio web me gustaría poder observar los cursos para realizar parte esencial de mi rol.                                                     | Funcionó todo correctamente, sin ningún problema en la realización de esta prueba.                                 | Correcto    |
| 02               | Daniel       | Envío de datos a la base.                    | Como técnico me gustaría poder generar cursos, añadir alumnos y poder verlos almacenados en la base de datos.                                                | La base de datos recibe la mayoría de los datos creados en la página, imágenes siguen siendo un problema.          | Incompleto  |
| 03               | Kanaru       | Conexión de base de datos con el juego.      | Como administrador me gustaría poder ver que las preguntas ingresadas a la base de datos puedan ser visualizadas en el juego.                                | El juego recibe las preguntas de la base de datos, aun hay problemas con las respuestas y sus ID's.                | Incompleto  |
| 04               | David        | Vistas separadas por rol.                    | Como usuario de la plataforma me gustaría poder ver mi rol, además de mis herramientas para poder realizar mis actividades correspondientes.                 | Las vistas de cada rol parecen estar en orden, completamente funcionales.                                          | Completo    |
| 05               | Hector Pablo | Implementación de la edición de módulos.     | Como administrador me gustaría poder editar los cursos para añadir, eliminar o modificar contenido individual del curso.                                     | La edición de módulos funciona correctamente, ningún error o inconsistencias detectados.                           | Completo    |
| 06               | Kanaru       | Deploy del videojuego en local y máquina virtual | Como desarrollador, me gustaría poder visualizar el videojuego de forma funcional tanto en local como en la máquina virtual para asegurar su correcto funcionamiento. | El videojuego fue desplegado correctamente en la máquina virtual. Se puede acceder desde la plataforma web.        | Completo    |
| 07                | Nicolás Alfaro    | Deploy de la página y del videojuego en la máquina virtual.       | Como desarrolladores, nos gustaría desplegar correctamente tanto la página web como el videojuego en una máquina virtual, para asegurar acceso desde cualquier dispositivo.       | El despliegue se realizó con éxito en la máquina virtual.           |  Completo |

