---
title: Reporte final
---

# Nombre del producto:
**TecniCORE**

## Introducción
Whirlpool es una empresa multinacional estadounidense dedicada a la elaboración y
mantenimiento de electrodomésticos, se nos dio la tarea de realizar una plataforma de
aprendizaje capaz de capacitar técnicos de manera eficaz, donde puedan interactuar con
elementos de aprendizaje, asegurando una mecánica  autodidacta donde tienen incentivos como
actividades, asesorías y manuales que están siempre a su disposición.

## Contexto del problema a resolver
La capacitación de técnicos ha sido un problema a lo largo de Whirlpool, el proceso de
capacitación a estos es muy ineﬁciente, otra problemática es el ﬂujo constante del personal,
donde técnicos experimentados cada vez escasean más, por ende la calidad de sus reparaciones
decrementa, con ayuda de un sistema de aprendizaje autodidacta podría incrementar tanto la
calidad de las reparaciones, como la eﬁciencia del personal.
## Requisitos del sistema

Req.
Descripción
Alcance
- **RF - 1**
Recopila el usuario, contraseña y el rol del empleado.
Medio
- **RF - 2**
Almacena el desempeño del empleado según su habilidad
para resolver los cursos.
De sección
- **RF - 3**
El programa deberá permitir ver los reportes del
desempeño de los empleados.
Medio
- **RF - 4**
El programa deberá permitir al empleado ver y elegir entre
los distintos cursos, tendra acceso a las funciones básicas
del programa, como acceder a los cursos, realizar cursos,
ver material de apoyo, etc.
De sección
- **RF - 5**
El programa dispondrá de 3 roles distintos, el empleado,
profesor y administrador.
De sección

- **RF - 6**
El profesor: Verificar los cursos creados y la habilidad de
revisar a los empleados y asignarles una calificación,
tendrá una forma de visualizar el progreso y el aprendizaje
de los empleados.
De sección
- **RF - 7**
Administrador: Encargado de administrar el material de
los cursos; el podrá crear, modificar y eliminar cursos.
De sección
- **RF - 8**
El programa tendrá un sistema de puntuación para los
empleados para evaluar su desempeño, el sistema de
puntuación será en porcentaje
Medio
- **RF - 9**
El programa incluye un apartado de repaso por videos.
De sección
- **RF - 10**
Dentro del modo de administrador de contenido, se
implementará un botón que solo ellos podrán utilizar para
modificar, borrar o añadir nuevos cursos.
Medio
- **RF- 11**
El programa muestra el progreso por curso, con una barra
dentro de la pantalla de inicio del curso.
De sección
- **RF - 12**
Al seleccionar el botón de un nuevo curso señalado por un
símbolo “+”, redirigirá al administrador a una pestaña
diferente para la creación y generación del curso.
Medio
- **RF - 13**
La página inicial con una descripción del programa web, y
esta tendrá un botón para enviar a la página de inicio
sesión.
pequeño
- **RF - 14**
La página de inicio de sesión permite al usuario/técnico,
profesor y administrador acceder utilizando un correo
registrado a la empresa.
De sección
- **RF - 15**
En el modo de profesor, podrá ver los progresos de los
distintos alumnos que pertenezcan a cada curso.
Medio
- **RF - 16**
En el modo de administrador, cerca de cada curso se
encontrará un botón con símbolo de pluma, que permitirá
al profesor modificar o ampliar el curso ya creado.
Medio
- **RF - 17**
El juego será de forma lineal, permitiendo al usuario
escoger
entre múltiples opciones, donde opciones
correctas le permitirán avanzar y les dará consejos, y
respuestas incorrectas que le servirán como obstáculo y les
dará ligeras pistas para progresar..
De sección

- **RF - 18**
Un contador dentro del juego, que cambiará según la
dificultad del juego
pequeño
- **RF - 19**
En la sección del juego/repaso habrá un contador de
preguntas restantes como barra de progreso de la lección y
un contador de errores.
pequeño
- **RF - 20**
Como sección separada de los cursos, habrá un apartado
que permita al administrador añadir videos de aprendizaje.
Medio
- **RF - 21**
El VideocJuego contendra distintos “mini juegos” o
metodos de aprendizaje para ofrecerle variedad a los
tecnicos/estudiantes
De Sección
- **RNF - 1**
El programa debe de estar optimizado para correr
eficientemente.
Global
- **RNF - 2**
Actualiza los datos de desempeño cada que un empleado
completa una lección.
De sección
- **RNF - 3**
El programa se adaptará para permitir la conexión desde
distintos sistemas operativos.
Global
- **RNF - 5**
Los módulos de aprendizaje deben contener texto,
imágenes o ambos.
Medio
- **RNF - 6**
El programa guarda el avance del curso cada 30 segundos.
pequeño
- **RNF - 7**
El juego pone en prueba los temas repasados por el
empleado.
De sección
- **RNF - 9**
La página inicial tendrá información básica de la empresa
y el propósito de la herramienta.
pequeño
- **RNF - 10**
La barra que muestra el progreso del curso se actualizará
al terminar una lección o completar un módulo.
Medio
- **RNF - 11**
El juego tomará el tiempo restante, errores y aciertos para
generar un puntaje de desempeño que guardará en la base
de datos.
Medio
- **RNF - 12**
El contador se verá afectado según las decisiones del
técnico, se le otorgará tiempo extra para completar la
lección aleatoriamente si responde correctamente, y se le
penalizará si responde de forma incorrecta.
pequeño
- **RNF - 13**
Se tomará el porcentaje de preguntas acertadas para el
cálculo de desempeño.
pequeño
- **RP - 1**
El proyecto será desarrollado utilizando la metodología
SCRUM.
Global

- **RP - 2**
La base de datos deberá ser relacional
Global
- **RP - 3**
El juego será desarrollado utilizando Unity.
De sección
- **RP - 4**
Basado en HTML5, CSS3 y JavaScript.
De sección
- **RP - 5**
Arquitectura del proyecto será distribuida.
Global
- **RP - 6**
Se creará una documentación del desarrollo del programa
y el videojuego.
Global

# Product Backlog
*Historias de usuario listadas y priorizadas (Escala: 1 - 5)*

1. RF 03 - Como empleado, quiero una página donde pueda acceder a los cursos asignados
y ver mi puntaje del curso para poder seguir mi progreso en el aprendizaje.

Prioridad: 3

2. RF 06 - Como profesor, quiero poder veriﬁcar los cursos creados, revisar el progreso de
los empleados y asignarles caliﬁcaciones para evaluar su aprendizaje y desempeño.

Prioridad: 5

3. RF 07 - Como administrador, quiero una función que me permite agregar, editar y
eliminar cursos para gestionar el contenido de aprendizaje de manera eﬁciente.

Prioridad: 5

4. RF 04 - Como aprendiz me gustaría poder ver el progreso en mi curso para saber qué tan
avanzado estoy, poder navegar en la plataforma, poder interactuar con todo, visualizar los
distintos cursos a los que estoy inscrito y poder acceder a nuevos, para así poder tener un
control de los distintos aprendizajes.

Prioridad: 5


5. RF 21 - Como aprendiz, me gustaria tener una manera entretenida y llamativa de poner
aprueba mis conocimientos desarrollados dentro de los cursos a los que pertenezco,
permitiendome generar una retroalimentación sobre mi desempeño en mi aprendizaje.

6. RF 09 - Como aprendiz quiero tener un apartado donde pueda ver repasos en video para
poder tener este material en caso de tener una duda.

Prioridad: 3

7. RF 11 - Como aprendiz me gustaría poder analizar mi puntaje para así ver como es mi
rendimiento y esforzarme más.
Prioridad: 2

8. RF 12 - Como administrador, me gustaría poder tener un botón asignado a la creación de
nuevos contenidos como módulos para crear  más elementos de aprendizaje para los
aprendices.

Prioridad: 3

9. RF 14 - Como usuario general, me gustaría poder utilizar mi correo designado para
acceder a la página, con el propósito de entrar según mi cargo dentro de la empresa.
Prioridad: 4

10. RF 13 - Como aprendiz me gustaría poder ver cada vez que entre a la herramienta una
página de inicio junto a una breve descripción del programa para poder iniciar sesión.

Prioridad: 3

11. RF 10 - Como administrador, me gustaría poder tener un botón visible para la
modiﬁcación de los cursos, con el objetivo de optimizar el aprendizaje.

Prioridad: 4


12. RF 15 - Como maestro, me gustaría poder ver el progreso de cada uno de mis alumnos
para así poder ver cómo es su desempeño y si requieren ayuda de algún tipo.

Prioridad: 4

13. RF 18 - Como maestro, me gustaría poder ver que decrece el tiempo en los ejercicios,
incrementando la diﬁcultad y poder apreciar qué tal fue su desempeño.

Prioridad: 1

14. RF 08 - Como maestro, me gustaría poder visualizar el desempeño y el progreso de mis
alumnos para poder generar un análisis del progreso del curso y recibir feedback del
provecho que se obtiene.

Prioridad: 4

15. RF 10 - Como administrador de la base de datos, se debe permitir almacenamiento de
puntajes y desempeño calculado individual de cada uno de los empleados, con el
propósito de poder analizar los resultados y que el profesor reciba feedback acerca del
curso.

Prioridad: 3

16. RF 19 - Como aprendiz, me gustaría contar con un contador que muestre el número de
preguntas que he respondido junto con el total de preguntas, para así poder visualizar mi
progreso.

Prioridad: 1

17. RF 17 - Como usuario, quiero poder elegir entre múltiples opciones en el juego, de modo
que las respuestas correctas me permitan avanzar y recibir consejos, y las respuestas
incorrectas me den pistas para superar los obstáculos y continuar progresando.

Prioridad: 2


18. RF 20 - Como administrador, me gustaría gestionar el contenido de los videos en las
lecciones para apoyar tanto a los maestros como a los alumnos, asegurando que la
información de apoyo esté siempre disponible.

Prioridad: 3

19. RF 02 - Como profesor, quiero ver el desempeño de mis estudiantes para ver cómo
pueden mejorar o en qué puntos están batallando.

Prioridad: 4

20. RF 01 - Como administrador, quiero dar de alta un nuevo estudiante en el sistema para
que ese estudiante pueda acceder a ella.

Prioridad: 4

21. RF 05 - Como empleado de la empresa me gustaría poder tener un rol en la plataforma y
de esta manera poder realizar mis actividades correspondientes.

Prioridad: 5

22. RF 16 - Como administrador, quiero editar el contenido de un curso para poner al día la
información que se encuentra en él.

Prioridad: 4


## Historias de Usuario priorizadas

---

### RF15 - Inicio de sesión
**HU01 - Como usuario general**  
*Prioridad: Media*  
**Deseo:** Poder utilizar mi correo designado para acceder a la página según mi cargo dentro de la empresa.

#### Criterios de aceptación:
- En la página hay dos espacios, uno para ingresar el correo y otro para la contraseña.
- Hay un botón para proceder a iniciar sesión.
- Si los datos son erróneos, se notifica con un mensaje de error.
- Si los datos son correctos, se redirige según su rol.
- Existe un botón para regresar a la página principal.

**Puntos de historia:** 4

---

### RF07 - Evaluación por parte del profesor
**HU02 - Como profesor**  
*Prioridad: Muy alta*  
**Deseo:** Revisar cursos creados, evaluar progreso y calificar desempeño de los empleados.

#### Criterios de aceptación:
- Ver lista de cursos creados con su información.
- Acceso al progreso individual por curso.
- Interfaz para asignar calificaciones.
- Resumen visual del progreso y calificaciones.
- Notificación si el curso no tiene empleados registrados.

**Puntos de historia:** 4

---

### RF08 - Gestión de cursos
**HU03 - Como administrador de la plataforma**  
*Prioridad: Alta*  
**Deseo:** Crear, modificar y eliminar cursos para gestionar el contenido de aprendizaje.

#### Criterios de aceptación:
- Interfaz para visualizar todos los cursos.
- Posibilidad de crear cursos con título, descripción y materiales adjuntos.
- Modificación de cursos sin afectar a empleados inscritos.
- Opción para eliminar cursos con confirmación.
- Notificación al eliminar un curso exitosamente.

**Puntos de historia:** 7

---

### RF06 - Acceso del empleado
**HU04 - Como usuario**  
*Prioridad: Alta*  
**Deseo:** Poder navegar en la página y elegir actividades para personalizar mi aprendizaje.

#### Criterios de aceptación:
- Capacidad de seleccionar la actividad.
- Acceso a elementos de aprendizaje en todo momento.
- Flexibilidad para iniciar lecciones.
- Posibilidad de repasar actividades pasadas.
- Lista de cursos inscritos con detalles.
- Opción para inscribirse a nuevos cursos.
- Confirmación tras inscripción exitosa.

**Puntos de historia:** 4

---

### RF21 - Videojuego con minijuegos
**HU05 - Como aprendiz**  
*Prioridad: Alta*  
**Deseo:** Evaluar mis conocimientos mediante minijuegos interactivos.

#### Criterios de aceptación:
- 3 minijuegos: resolución de problemas, patrones, y conocimientos de cursos.
- Juego de Verdadero/Falso con vidas y puntos.
- Termina al perder todas las vidas y muestra el puntaje.
- Juego de memoria con cartas que deben emparejarse.
- Juego termina cuando todas las cartas están emparejadas.
- Juego global con preguntas de opción múltiple.
- Termina al perder todas las vidas y muestra el total de puntos.

**Puntos de historia:** 5


## Modelo Relacional


