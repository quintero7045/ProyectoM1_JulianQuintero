# Proyecto Integrador 1 - Generador de Paletas Interactivo

## 1. Descripción

Colorfly Studio es una aplicación web estática e interactiva desarrollada como parte del Proyecto Integrador 1 del bootcamp de programación.

Su objetivo es generar paletas de colores aleatorias que puedan servir como referencia en procesos creativos de diseño y branding.

La aplicación permite seleccionar la cantidad de colores que se desean generar, visualizar sus códigos hexadecimales y copiar cada código al portapapeles.

## 2. Demo

Aplicación publicada en GitHub Pages:

[Ver Colorfly Studio](https://quintero7045.github.io/ProyectoM1_JulianQuintero/)

## 3. Funcionalidades

- Generación aleatoria de paletas de colores.
- Selección del tamaño de la paleta: 6, 8 o 9 colores.
- Actualización de la paleta al cambiar la opción seleccionada.
- Visualización del código HEX de cada color.
- Botón «Copiar HEX» en cada tarjeta.
- Mensajes visuales de confirmación.
- Diseño adaptable a diferentes tamaños de pantalla.
- Uso de etiquetas semánticas y atributos de accesibilidad.

## 4. Tecnologías utilizadas

- HTML5 para la estructura de la página.
- CSS3 para los estilos y el diseño responsive.
- JavaScript para generar los colores, manipular el DOM y gestionar los eventos.
- Git y GitHub para el control de versiones y el alojamiento del repositorio.
- GitHub Actions y GitHub Pages para automatizar la publicación.

## 5. Estructura del proyecto

```text
ProyectoM1_JulianQuintero/
├── .github/
│   └── workflows/
│       └── static.yml
├── Desarrollo/
│   ├── index.html
│   ├── script.js
│   └── styles.css
└── Documentacion/
    ├── README.md
    ├── uso-ia.md
    └── capturas/
```

## 6. Instalación y ejecución local

Para ejecutar el proyecto en un equipo local:

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/quintero7045/ProyectoM1_JulianQuintero.git
   ```

2. Entrar en la carpeta del proyecto:

   ```bash
   cd ProyectoM1_JulianQuintero
   ```

3. Abrir `Desarrollo/index.html` en un navegador web.

También se puede abrir la carpeta del proyecto con Visual Studio Code y utilizar Live Server para facilitar las pruebas durante el desarrollo.

## 7. Despliegue

El proyecto se publica mediante GitHub Pages. La configuración de GitHub Actions se encuentra en:

```text
.github/workflows/static.yml
```

El flujo de publicación utiliza la carpeta `Desarrollo/` como origen de los archivos de la aplicación.

## 8. Decisiones técnicas

- Se utiliza el formato HEX para representar los colores.
- La generación de las tarjetas se realiza dinámicamente con JavaScript.
- Se reutiliza la función `renderPalette()` para generar paletas de distintos tamaños.
- Los mensajes visuales permiten informar al usuario sobre determinadas acciones.
- Se incorporan etiquetas semánticas y atributos de accesibilidad.
- Git permite registrar los cambios mediante commits descriptivos.

## 9. Documentación adicional

En la carpeta `Documentacion/` se encuentra el archivo `uso-ia.md`, que describe el uso de inteligencia artificial como herramienta de apoyo durante el desarrollo.

La carpeta `capturas/` está destinada a organizar las evidencias correspondientes al proceso de trabajo.

## 10. Autor

**Julian Andres Quintero**

Proyecto Integrador 1 - Bootcamp de Programación