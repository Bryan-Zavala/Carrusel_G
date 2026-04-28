## CI/CD Pipeline (Integración y Despliegue Continuo)

Este proyecto utiliza **GitHub Actions** para garantizar la calidad del código antes de cada despliegue, y **Vercel** para el despliegue automático.

### Flujo de Integración Continua (CI)

El archivo de configuración automatiza los siguientes pasos de control de calidad:

1. **Instalación limpia de dependencias:** Se utiliza `npm ci` para garantizar una instalación estricta basada en el `package-lock.json`.
2. **Ejecución de Linter (ESLint):** Análisis estático del código fuente para detectar errores de sintaxis y mantener buenas prácticas.
3. **Prueba de Build:** Construcción del proyecto para producción, garantizando que el código compila sin errores críticos.

#### Estructura del Workflow (`ci.yml`)

- `on: push`: Dispara el workflow automáticamente cada vez que se detectan cambios en la rama `main`.
- `jobs`: Define el entorno de ejecución (Ubuntu).
- `steps`: Acciones secuenciales:
  - `actions/checkout@v4`: Clona el código fuente en el servidor virtual.
  - `actions/setup-node@v4`: Prepara el entorno instalando Node.js (v20).
