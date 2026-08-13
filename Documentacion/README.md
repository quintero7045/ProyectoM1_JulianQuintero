# 🎨 Proyecto Integrador 1 - Generador de Paletas Interactivo

## 📌 Descripción

Este proyecto consiste en una aplicación web estática e interactiva desarrollada para el Bootcamp de Programación.

La aplicación permite generar paletas de colores aleatorias para apoyar el proceso creativo de una agencia ficticia de branding llamada **Colorfly Studio**.

El usuario puede seleccionar el tamaño de la paleta y generar colores aleatorios en formato HEX, visualizando cada color junto con su respectivo código.

---

## 🚀 Demo

Aplicación desplegada en GitHub Pages:

https://quintero7045.github.io/ProyectoM1_JulianQuintero/

---

## ✨ Funcionalidades

- Generación de paletas aleatorias.
- Selección de tamaño:
  - 6 colores
  - 8 colores
  - 9 colores
- Generación de colores en formato HEX.
- Renderizado dinámico utilizando JavaScript.
- Visualización del código de cada color.
- Microfeedback mediante mensajes visuales.
- Diseño responsive para escritorio.
- Uso de HTML semántico.
- Accesibilidad básica:
  - Labels asociados.
  - Atributos ARIA.
  - Contraste adecuado.
  - Foco visible.

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (DOM y Eventos)
- Git
- GitHub
- GitHub Actions
- GitHub Pages

---

## 📂 Estructura del proyecto

```text
ProyectoM1_JulianQuintero/
│
├── Desarrollo/
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── Documentacion/
│
└── .github/
    └── workflows/
        └── static.yml
```

---

## ⚙️ Instalación y ejecución local

1. Clonar el repositorio:

```bash
git clone https://github.com/quintero7045/ProyectoM1_JulianQuintero.git
```

2. Entrar a la carpeta:

```bash
cd ProyectoM1_JulianQuintero
```

3. Abrir:

```text
Desarrollo/index.html
```

en el navegador.

---

## 🌐 Despliegue

La aplicación se publica utilizando:

- GitHub Pages
- GitHub Actions

El workflow automatiza el despliegue tomando como origen la carpeta:

```text
Desarrollo/
```

---

## 🧠 Decisiones técnicas

- Se eligió el formato HEX por ser ampliamente utilizado en diseño web.
- Se utilizó JavaScript para manipular dinámicamente el DOM.
- Se emplearon funciones reutilizables para mejorar la mantenibilidad del código.
- Se implementó accesibilidad básica utilizando atributos ARIA.
- Se utilizó Git para el control de versiones mediante commits pequeños y descriptivos.

---

## 📋 Historial de commits

Ejemplos de commits realizados:

```text
feat: add responsive palette styles
feat: generate and render random HEX colors
docs: add project documentation
a11y: improve generate button accessibility
ci: configure GitHub Pages deployment
```

---

Creado por:
Julian Andres Quintero
