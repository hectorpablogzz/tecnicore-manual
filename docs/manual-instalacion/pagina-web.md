---
sidebar_position: 1
---

# Página Web

En esta sección, aprenderás cómo montar el Frontend y Backend de **Whirlpool TecniCORE**.

---

## ✅ Qué vas a necesitar

- Un servidor preferiblemente con Ubuntu Server como sistema operativo
- Una conexión estable a internet

---

### 🛜 1. Instalar Coolify en el servidor

Necesitarás instalar Coolify en el servidor para poder desplegar la página web. Puedes acceder al manual de instalación de Coolify [en esta liga](https://coolify.io/docs/get-started/installation).

### ➕ 2. Crear el proyecto

Accede al Coolify y crea un nuevo proyecto. En el ambiente de producción, agrega como recurso el repositorio de Whirlpool TecniCORE. En **Build Pack**, selecciona **Docker Compose**. Deja al directorio base como la ruta.

### ⚒️ 3. Configurar y desplegar

En la página de configuración, asegúrate de que haya un dominio. En caso de que no, haz click en **Generate Domain**. En la sección de **Build**, cambia la ubicación del archivo de Docker a **/compose.yaml**. Asegúrate de que se muestre la vista previa del archivo de compose. Finalmente, haz click en **Deploy** y espera a que se realice el despliegue. Una vez terminado, podrás acceder a TecniCORE usando el puerto indicado en la vista previa del compose. Si el despliegue falla, asegúrate de que no haya otro recurso en el servidor utilizando ese mismo puerto.

---

Creado por Héctor Pablo González Espinosa A01722968@tec.mx