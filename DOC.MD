<div align="center">

# FACULTAD DE CIENCIAS DE LA COMPUTACIÓN
### Área de Programación
### Materia: DESARROLLO DE APLICACIONES WEB
### 1ER Examen Departamental
### Primavera 2026

</div>

---

**Alumno:** Enrique Hernández Luna | **Matrícula:** 202123754 | **Docente:** Meliza Contreras González

---

# Documentación - Aplicación de Horóscopo 2026

> **Fecha de documentación:** 17 de febrero de 2026  
> **Archivos documentados:** `horoscopo.html`, `css/styles.css`, `js/horoscope.js`

---

## Tabla de Contenidos

1. [Descripción General](#descripción-general)
2. [1.- Utilizar las etiquetas de HTML para generar la página solicitada (2.5 pts.)](#1--utilizar-las-etiquetas-de-html-para-generar-la-página-solicitada-25-pts)
3. [2.- Utilizar las hojas de estilo y los comandos de JavaScript para la estructura y eventos de la página solicitada (2.5 pts.)](#2--utilizar-las-hojas-de-estilo-y-los-comandos-de-javascript-para-la-estructura-y-eventos-de-la-página-solicitada-25-pts)
4. [Análisis UX/UI](#análisis-uxui)
5. [Mejoras Propuestas](#mejoras-propuestas)

---

## Descripción General

Esta aplicación web presenta un **horóscopo interactivo para el año 2026**. Permite a los usuarios visualizar las predicciones astrológicas de los 12 signos zodiacales mediante tarjetas visuales creadas dinámicamente con el elemento `<canvas>` de HTML5.

La arquitectura sigue un patrón de separación de responsabilidades:
- **HTML:** Estructura semántica y contenedor principal
- **CSS:** Estilos visuales y sistema de diseño
- **JavaScript:** Lógica de generación dinámica de contenido

---

## 1.- Utilizar las etiquetas de HTML para generar la página solicitada (2.5 pts.)

### horoscopo.html

### Propósito
Archivo HTML principal que estructura la página del horóscopo. Actúa como el punto de entrada de la aplicación.

### Estructura del Documento

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Horoscopo</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <section class="hero hero--secondary">
    <div class="container">
      <main class="hero__content">
        <h1 class="title-primary">Horóscopo 2026</h1>
        <p class="hero__lead">...</p>
        <a href="index.html" class="btn mt-1">Volver a la página principal</a>
      </main>
    </div>
  </section>

  <section class="container container-el mt-1">
  </section>
  <script src="js/horoscope.js"></script>
</body>
</html>
```

### Componentes Principales

| Componente | Clase CSS | Función |
|------------|-----------|---------|
| Hero Section | `.hero.hero--secondary` | Encabezado principal con imagen de fondo |
| Contenedor Principal | `.container` | Centra el contenido con ancho máximo |
| Título | `.title-primary` | Encabezado H1 principal |
| Descripción | `.hero__lead` | Texto introductorio |
| Botón | `.btn.mt-1` | Navegación de regreso |
| Contenedor de Cards | `.container-el` | Contenedor vacío donde JS inyecta las tarjetas |

### Flujo de Carga
1. Se carga el documento HTML
2. Se aplican los estilos de `styles.css`
3. El script `horoscope.js` se ejecuta al final del body
4. El contenedor `.container-el` se llena dinámicamente con canvas

---

## 2.- Utilizar las hojas de estilo y los comandos de JavaScript para la estructura y eventos de la página solicitada (2.5 pts.)

### css/styles.css

### Propósito
Hoja de estilos global que define el sistema de diseño, componentes reutilizables y utilidades CSS para toda la aplicación.

### Reset CSS

El archivo comienza con un reset moderno utilizando el selector universal:

```css
*,*::before,*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

> **Nota:** Este enfoque garantiza consistencia entre navegadores eliminando márgenes y paddings predeterminados, y estableciendo `border-box` como modelo de caja.

### Sistema de Colores

| Variable/Clase | Color | Uso |
|----------------|-------|-----|
| `.title-primary-color` | `#fdfffd` | Títulos principales (blanco) |
| `.title-secondary-color` | `#00ccff` | Títulos secundarios (cyan) |
| `.title-tertiary-color` | `#15ff08` | Títulos terciarios (verde) |
| `.text-primary-color` | `#9a9a9a` | Texto de párrafos (gris) |
| Fondo body | `#181818` | Fondo oscuro general |

### Componente Hero

```css
.hero{
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.hero--primary{
  background-image: url('../img/hero.jpg');
  background-size: cover;
  background-position: center;
}

.hero--secondary{
  background-image: url('../img/hero-2.jpg');
  background-size: cover;
  background-position: center;
}
```

El componente Hero utiliza el patrón **modificador BEM** (`hero--primary`, `hero--secondary`) para variantes de fondo.

### Sistema de Layout

```css
.container{
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

.box-100{ width: 100%; }
.box-50{ display: inline-block; width: 48%; }
.box-25{ display: inline-block; width: 23%; }
```

### Componente Botón

```css
.btn{
  display: inline-block;
  padding: .75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  background-color: #fff;
  color: #000;
  font-size: .880rem !important;
  border: 2px solid #000;
  transition: background-color .3s ease-in-out, color .3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0,0,0,.1);
  cursor: pointer;
}

.btn:hover{
  background-color: #000;
  color: #fff;
}
```

> El botón implementa una transición suave de inversión de colores al pasar el cursor.

### Utilidades CSS

| Clase | Propiedad | Valor |
|-------|-----------|-------|
| `.mt-1` | margin-top | 1rem |
| `.mt-4` | margin-top | 4rem |
| `.pd-1` | padding | 1rem |
| `.rad-1` | border-radius | 1rem |
| `.oh` | overflow | hidden |
| `.h-100` | height | 100% |

### Efectos de Interacción

```css
.rotate-and-scale-on-hover{
  transition: transform .3s ease-in-out;
}

.rotate-and-scale-on-hover:hover{
  transform: rotate(10deg) scale(1.2);
}

.link-inline-hover--shodow::after{
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #e0e1e2;
  box-shadow: 0 0 10px #e0e1e2;
  transition: transform .3s ease-in-out;
  transform: scaleX(0);
  transform-origin: right;
}

.link-inline-hover--shodow:hover::after{
  transform: scaleX(1);
  transform-origin: left;
}
```

---

### js/horoscope.js

### Propósito
Script que genera dinámicamente las tarjetas de horóscopo utilizando el API Canvas de HTML5.

### Estructura de Datos

El script define un array de objetos con la información de cada signo zodiacal:

```javascript
const horoscopes = [
  { 
    name: "Aries", 
    dates: "21 Mar - 19 Abr", 
    color: "#E63946", 
    prediction: "Probablemente, se sentirá presionado...", 
    image: 'img/aries.png'
  },
  // ... 11 signos más
];
```

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `name` | String | Nombre del signo zodiacal |
| `dates` | String | Rango de fechas del signo |
| `color` | String (HEX) | Color identificativo del signo |
| `prediction` | String | Predicción astrológica |
| `image` | String | Ruta a la imagen del signo |

### Evento de Inicialización

```javascript
window.addEventListener("DOMContentLoaded", () => {
  // Código de inicialización
});
```

> Se utiliza el evento `DOMContentLoaded` para asegurar que el DOM esté completamente cargado antes de manipularlo.

### Creación Dinámica de Elementos

```javascript
horoscopes.forEach(horoscope => {
  const canvasWrapper = document.createElement("div");
  canvasWrapper.style.display = "inline-block";
  canvasWrapper.style.width = "33.33%";
  canvasWrapper.style.padding = "10px";
  canvasWrapper.style.boxSizing = "border-box";
  
  const canvas = document.createElement("canvas");
  canvas.className = "horoscope-canvas";
  canvas.width = 200;
  canvas.height = 220;
  canvas.style.borderRadius = "15px";
  canvas.style.transition = "transform 0.3s ease";
  canvas.style.cursor = "pointer";
  // ...
});
```

Cada tarjeta consta de:
- **Wrapper div:** Contenedor con ancho del 33.33% (3 columnas)
- **Canvas:** Elemento de dibujo de 200x220 píxeles

### Efectos de Hover

```javascript
canvas.addEventListener("mouseenter", () => {
  canvas.style.transform = "scale(1.1)";
});

canvas.addEventListener("mouseleave", () => {
  canvas.style.transform = "scale(1)";
});
```

### Renderizado en Canvas

```javascript
img.onload = () => {
  // 1. Fondo con color del signo
  ctx.fillStyle = horoscope.color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // 2. Imagen del signo
  ctx.drawImage(img, 145, 12, 50, 50);
  
  // 3. Nombre del signo
  ctx.fillStyle = "#000000";
  ctx.font = "bold 24px serif";
  ctx.fillText(horoscope.name, 20, 40);
  
  // 4. Fechas
  ctx.font = "14px serif";
  ctx.fillText(horoscope.dates, 20, 65);
  
  // 5. Predicción con word wrap
  ctx.font = "12px serif";
  // Algoritmo de ajuste de texto...
};
```

### Algoritmo de Word Wrap

```javascript
const maxWidth = 160;
const lineHeight = 15;
const words = horoscope.prediction.split(" ");
let line = "";
let y = 90;

words.forEach(word => {
  const testLine = line + word + " ";
  const metrics = ctx.measureText(testLine);
  if (metrics.width > maxWidth && line) {
    ctx.fillText(line, 20, y);
    line = word + " ";
    y += lineHeight;
  } else {
    line = testLine;
  }
});
ctx.fillText(line, 20, y);
```

> Este algoritmo mide el ancho de cada línea y realiza saltos de línea cuando excede `maxWidth` (160px).

---

## Análisis UX/UI

### Aspectos Positivos

1. **Esquema de colores oscuro:** El fondo `#181818` reduce la fatiga visual y crea un ambiente apropiado para una aplicación de horóscopo.

2. **Feedback visual:** Los efectos hover en las tarjetas (`scale(1.1)`) proporcionan retroalimentación inmediata al usuario.

3. **Colores distintivos por signo:** Cada signo tiene un color único que facilita su identificación visual.

4. **Jerarquía visual clara:** Títulos, fechas y predicciones tienen tamaños de fuente diferenciados.

5. **Navegación simple:** Botón claro para regresar a la página principal.

### Áreas de Oportunidad

1. **Accesibilidad limitada:** 
   - El contenido en Canvas no es accesible para lectores de pantalla
   - Falta de atributos ARIA
   - Contraste de texto negro sobre algunos colores de fondo puede ser insuficiente

2. **Responsive parcial:** 
   - El ancho fijo del 33.33% no se adapta bien a móviles
   - El Canvas tiene dimensiones fijas (200x220)

3. **Idioma inconsistente:** 
   - `<html lang="en">` pero el contenido está en español

4. **Ausencia de estados de carga:**
   - No hay indicador mientras se cargan las imágenes

---

## Mejoras Propuestas

### 1. Accesibilidad (A11y)

**Problema:** El contenido renderizado en Canvas es invisible para tecnologías asistivas.

**Solución:** Agregar contenido alternativo y atributos ARIA.

```html
<!-- horoscopo.html -->
<section class="container container-el mt-1" role="list" aria-label="Signos del zodiaco">
</section>
```

```javascript
// horoscope.js - Agregar fallback content
canvas.setAttribute("role", "img");
canvas.setAttribute("aria-label", `${horoscope.name}: ${horoscope.prediction}`);
```

### 2. Diseño Responsivo

**Problema:** Las tarjetas no se adaptan a pantallas pequeñas.

**Solución:** Implementar CSS Grid o media queries.

```css
/* styles.css - Agregar */
.container-el {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

@media (max-width: 768px) {
  .title-primary {
    font-size: 1.8rem;
  }
}
```

### 3. Corrección del Atributo Lang

**Problema:** El atributo `lang="en"` no coincide con el contenido en español.

**Solución:**

```html
<html lang="es">
```

### 4. Optimización de Rendimiento

**Problema:** Estilos inline en JavaScript dificultan el mantenimiento.

**Solución:** Mover estilos a CSS.

```css
/* styles.css - Agregar */
.horoscope-wrapper {
  display: inline-block;
  width: 33.33%;
  padding: 10px;
  box-sizing: border-box;
}

.horoscope-canvas {
  border-radius: 15px;
  transition: transform 0.3s ease;
  cursor: pointer;
  display: block;
}

.horoscope-canvas:hover {
  transform: scale(1.1);
}

@media (max-width: 900px) {
  .horoscope-wrapper {
    width: 50%;
  }
}

@media (max-width: 600px) {
  .horoscope-wrapper {
    width: 100%;
  }
}
```

### 5. Estado de Carga

**Problema:** No hay feedback mientras cargan las imágenes.

**Solución:** Agregar un loader o placeholder.

```javascript
// horoscope.js
const img = new Image();
img.src = horoscope.image;

// Placeholder mientras carga
ctx.fillStyle = horoscope.color;
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#ffffff";
ctx.font = "14px serif";
ctx.fillText("Cargando...", 60, 110);

img.onload = () => {
  // Redibujar con contenido real
};

img.onerror = () => {
  // Manejar error de carga de imagen
  ctx.fillText("Imagen no disponible", 40, 110);
};
```

### 6. Separación de Datos

**Problema:** Los datos de horóscopos están hardcodeados en el JavaScript.

**Solución:** Externalizar a un archivo JSON para facilitar actualizaciones.

```javascript
// horoscope.js
fetch('data/horoscopes.json')
  .then(response => response.json())
  .then(horoscopes => {
    renderHoroscopes(horoscopes);
  })
  .catch(error => {
    console.error('Error cargando horóscopos:', error);
  });
```

### 7. Contraste de Colores

**Problema:** El texto negro sobre colores oscuros como `#263238` (Capricornio) o `#02630f` (Escorpio) tiene bajo contraste.

**Solución:** Implementar lógica para texto adaptativo.

```javascript
// horoscope.js - Función para determinar color de texto
function getContrastColor(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

// Uso
ctx.fillStyle = getContrastColor(horoscope.color);
```

### 8. Tipografía Inconsistente

**Problema:** Se usa `serif` en Canvas pero `system-ui` en el resto del sitio.

**Solución:** Unificar tipografía.

```javascript
ctx.font = "bold 24px system-ui, sans-serif";
```

---

## Resumen de Prioridades

| Prioridad | Mejora | Impacto |
|-----------|--------|---------|
| 🔴 Alta | Corrección `lang="es"` | SEO/Accesibilidad |
| 🔴 Alta | Accesibilidad Canvas | Inclusión |
| 🟡 Media | Diseño Responsivo | UX móvil |
| 🟡 Media | Contraste de colores | Legibilidad |
| 🟢 Baja | Estilos en CSS | Mantenibilidad |
| 🟢 Baja | Datos externos | Escalabilidad |

---

> **Autor de la documentación:** Enrique Hernández Luna  
> **Versión:** 1.0
