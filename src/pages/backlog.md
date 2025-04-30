<table>
  <tr>
    <td valign="top" width="70%">

<h2 id="plan-de-pruebas">Plan de Pruebas </h2>

<h3 id="bitacora-de-cambios">1. Bitácora de cambios</h3>

| Fecha      | Modificado por              | Versión | Descripción                                                                 |
|-----------:|-----------------------------|--------:|------------------------------------------------------------------------------|
| 13/03/2025 | David Martínez Rascón       | 1.0     | Creación de la primera versión; se integraron los casos de prueba del equipo. |
| 07/04/2025 | David Martínez Rascón       | 2.0     | Nuevos casos de prueba y características para el siguiente sprint.           |
| 20/04/2025 | Daniel González Orta        | 1.0     | Integración de vistas para cada rol (Admin, Instructor y Alumno).            |

<hr />

<h3 id="tabla-de-contenido">2. Tabla de contenido</h3>

<ol>
  <li><a href="#introduccion">Introducción</a></li>
  <li><a href="#entregables">Entregables</a></li>
  <li><a href="#caracteristicas-a-ser-probadas">Características a ser probadas</a></li>
  <li><a href="#caracteristicas-a-no-ser-probadas">Características a no ser probadas</a></li>
  <li><a href="#necesidades-ambientales">Necesidades ambientales</a></li>
  <li><a href="#capacitaciones">Capacitaciones</a></li>
  <li><a href="#riesgos">Riesgos</a></li>
</ol>

<hr />

<h3 id="introduccion">3. Introducción</h3>

**3.1 Estrategia de pruebas**  
Se harán pruebas de caja blanca y manuales, con acceso al código y a la base de datos, para asegurar que TecniCORE funcione de manera estable y sin comportamientos inesperados.

**3.2 Alcance**  
Delimita todo lo necesario para dar por terminado el plan de pruebas. Se evaluarán los elementos esenciales de la versión inicial de TecniCORE; una vez validados, estará listo para distribución.

<hr />

<h3 id="entregables">4. Entregables</h3>

| Documento                | Entrega                        | Recibe                     |
|--------------------------|--------------------------------|----------------------------|
| Plan de Pruebas Inicial  | David Martínez Rascón          | Rolando Evelio Pérez       |
| Entregable_2             | David Martínez Rascón          | Rolando Evelio Pérez       |
| Reporte de errores       | Héctor P. González Espinosa    | David Martínez Rascón      |
| Base de datos            | Daniel González Orta           | Hector Pablo                          |

<hr />

<h3 id="caracteristicas-a-ser-probadas">5. Características a ser probadas</h3>

| Sprint | Característica                | Descripción                                                                         | Módulo   |
|-------:|-------------------------------|-------------------------------------------------------------------------------------|----------|
| 1      | Inicio de sesión              | Validar credenciales y redirigir al dashboard.                                       | FrontEnd |
| 1      | Navegación por cursos         | Ver lista de cursos y poder acceder a ellos.                                         | FrontEnd |

<hr />

<h3 id="caracteristicas-a-no-ser-probadas">6. Características a no ser probadas</h3>

| Sprint | Característica                | Descripción                                                  | Justificación                          |
|-------:|-------------------------------|--------------------------------------------------------------|----------------------------------------|
| 1      | Visualización de cursos (BE)  | Ver lista de cursos creados por el profesor.                 | No prioritario en este sprint.         |
| 1      | Minijuegos (Videojuegos)      | Lógica de memorama, V/F, opción múltiple y puntuación.      | Funcionalidad aplazada.                |
| 1      | Modificación de cursos        | Editar cursos y ver progreso de alumnos.                     | No crítico en la versión inicial.      |
| 1      | Regresar a página principal   | Botón de redirección a página general.                       | Página principal no definida aún.      |

<hr />

<h3 id="necesidades-ambientales">7. Necesidades ambientales</h3>

| Dispositivo                  | Modelo / Specs                                  | Disponible |
|------------------------------|-------------------------------------------------|:----------:|
| MacBook Air (13″, Intel i5)  | 8 GB RAM, macOS                                  | Sí         |
| MacBook Air 2020 (M1)        | 16 GB RAM, macOS 15.1.1                          | Sí         |
| Windows (Core™ Ultra 9)      | Intel® Arc™ Graphics                             | Sí         |
| Windows (i7-1185G7)          | 14″ FHD IPS, DDR4 RAM                            | Sí         |
| Windows (Ryzen 9)            | 1080p, Windows 11 Beta                           | Sí         |

<hr />

<h3 id="capacitaciones">8. Capacitaciones</h3>

| Instructor                   | Quién se capacita                     | Tema               | Inicio      | Fin         | Duración | Costo |
|------------------------------|---------------------------------------|--------------------|------------:|------------:|---------:|------:|
| Jesús C. Morón García        | Todo el equipo                        | HTML/CSS/JS        | 10/02/2025  | 06/03/2025  | 4 sem    | \$0    |
| —                            | Héctor P. González Espinosa           | APIs               | 07/03/2025  | 10/03/2025  | 4 hrs    | \$0    |
| Roberto Chem Escobar         | Kanaru Ito                            | Unity 2D           | 11/02/2025  | 11/03/2025  | 4 sem    | \$0    |
| —                            | David Martínez Rascón                 | Flask              | 17/03/2025  | 21/03/2025  | 2 hrs    | \$0    |
| —                            | Nicolás A. Alfaro Gzz                | C# (Internet)      | 10/03/2025  | 13/03/2025  | 4 hrs    | \$0    |

<hr />

<h3 id="riesgos">9. Riesgos</h3>

| ID  | Riesgo                                                 | Probabilidad | Impacto | Prevención / Corrección                                          |
|----:|--------------------------------------------------------|--------------|--------:|------------------------------------------------------------------|
| 01  | Conexión BD errónea o base vacía                       | Baja/Media   | Alto    | Prev: DB test; Corr: revisar y corregir API.                    |
| 02  | Fallo de software en presentación                      | Baja         | Alto    | Prev: respaldo en varias máquinas; Corr: usar versión de respaldo. |
| 03  | Errores en lógica de puntuación de minijuegos          | Media        | Alto    | Prev: pruebas unitarias; Corr: ajustar lógica de puntajes.      |
| 04  | Retrasos en el desarrollo                              | Alta         | Alto    | Prev: planificación detallada; Corr: reasignar recursos/plazos.  |

    </td>
    <td valign="top" width="30%">
      <strong>Navegación</strong>
      <ul>
        <li><a href="#plan-de-pruebas">Plan de Pruebas</a></li>
        <li><a href="#bitacora-de-cambios">1. Bitácora de cambios</a></li>
        <li><a href="#tabla-de-contenido">2. Tabla de contenido</a></li>
        <li><a href="#introduccion">3. Introducción</a></li>
        <li><a href="#entregables">4. Entregables</a></li>
        <li><a href="#caracteristicas-a-ser-probadas">5. Características a ser probadas</a></li>
        <li><a href="#caracteristicas-a-no-ser-probadas">6. Características a no ser probadas</a></li>
        <li><a href="#necesidades-ambientales">7. Necesidades ambientales</a></li>
        <li><a href="#capacitaciones">8. Capacitaciones</a></li>
        <li><a href="#riesgos">9. Riesgos</a></li>
      </ul>
    </td>
  </tr>
</table>
