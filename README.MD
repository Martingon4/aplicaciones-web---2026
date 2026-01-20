# 🌐 Desarrollo de Aplicaciones Web - Primavera 2026

Documentación completa y detallada del proyecto web interactivo que incluye una página de bienvenida y un generador dinámico de horóscopo con canvas.

---

## 📋 Índice
1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Componentes HTML](#componentes-html)
3. [Sistema de Estilos CSS](#sistema-de-estilos-css)
4. [Funcionalidades JavaScript](#funcionalidades-javascript)
5. [Guía de Uso](#guía-de-uso)

---

## 🏗️ Estructura del Proyecto

```
aplicaciones-web---2026/
├── index.html              # Página principal de bienvenida
├── horoscopo.html          # Página del horóscopo interactivo
├── css/
│   ├── styles.css          # Estilos principales del proyecto
│   └── canvas.css          # Estilos específicos para canvas
├── js/
│   ├── horoscope.js        # Lógica para generar horóscopo
│   └── main.js             # Script principal
├── img/                    # Imágenes del proyecto
└── README.MD               # Este archivo
```

---

## 📄 Componentes HTML

### `index.html` - Página Principal

La página principal está compuesta por varias secciones:

#### **1. Sección Hero (Portada)**

```html
<section class="hero hero--primary">
  <div class="container">
    <main class="hero__content">
      <h1 class="title-primary">
        Desarrollo de Aplicaciones <strong class="bd-b">
          Web <span class="line line--primary"></span>
        </strong> 
        Primavera 2026
      </h1>
      <p class="hero__lead">
        ¡Bienvenidos al curso de Desarrollo de Aplicaciones Web! 
        En este curso, exploraremos las tecnologías y herramientas 
        esenciales para crear aplicaciones web modernas y funcionales.
      </p>
      <button class="btn mt-1">Bienvenidos</button>
      <a href="horoscopo.html" class="btn btn--secondary mt-1">
        Ir al Horóscopo
      </a>
    </main>
  </div>
</section>
```

**Elementos clave:**
- `class="hero hero--primary"`: Aplica un fondo de imagen de héroe
- `class="bd-b"`: Elemento contenedor para el subrayado decorativo
- `class="line line--primary"`: Línea verde decorativa bajo "Web"
- Dos botones: uno blanco y otro azul (secundario)

#### **2. Sección de Miembros**

```html
<section class="members">
  <article class="members__item">
    <h2 class="title-secondary title-primary-color">
      Enrique Hernández Luna
    </h2>
    <p class="text-primary-color">
      Estudiante de Desarrollo de Aplicaciones Web...
    </p>
  </article>
  <!-- Más miembros -->
</section>
```

**Características:**
- 3 artículos distribuidos en línea (33% cada uno)
- El segundo elemento se centra automáticamente con márgenes auto
- Colores específicos para títulos y texto

#### **3. Sección de Objetivos e Imagen**

```html
<section class="box-100 mt-4">
  <article class="box-50">
    <h2 class="title-secondary title-primary-color">
      Objetivos del Curso
    </h2>
    <ul class="text-primary-color">
      <li>Comprender los fundamentos del desarrollo web.</li>
      <li>Aprender a utilizar HTML, CSS y JavaScript...</li>
      <!-- Más items -->
    </ul>
  </article>
  <picture class="box-50 h-v3-plus oh">
    <img src="img/ic-1.jpg" alt="Imagen de desarrollo web" 
         class="image-square h-100 rounded--v2 rotate-and-scale-on-hover">
  </picture>
</section>
```

**Características:**
- Layout de dos columnas (50% cada una)
- Imagen con efecto de rotación y escala al pasar el ratón
- Overflow hidden para que la imagen se ajuste al borde redondeado

---

### `horoscopo.html` - Página del Horóscopo

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Horoscopo</title>
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" href="css/canvas.css">
</head>
<body>
  <section class="hero hero--secondary">
    <div class="container">
      <main class="hero__content">
        <h1 class="title-primary">Horóscopo 2026</h1>
        <p class="hero__lead">
          Descubre tu horóscopo para el año 2026...
        </p>
        <a href="index.html" class="btn mt-1">
          Volver a la página principal
        </a>
      </main>
    </div>
  </section>

  <!-- Contenedor donde se insertan los horóscopo dinámicamente -->
  <section class="container container-el mt-1">
  </section>
  
  <script src="js/horoscope.js"></script>
</body>
</html>
```

**Elementos importantes:**
- `class="hero hero--secondary"`: Usa una imagen de fondo diferente
- `class="container-el"`: Contenedor vacío donde JavaScript insertar los horóscopo
- Importa `horoscope.js` para generar el contenido dinámicamente

---

## 🎨 Sistema de Estilos CSS

### Reset y Configuración Base

```css
*,*::before,*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 
               'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
               'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #181818;
}
```

**Propósito:**
- Reset de márgenes y paddings
- Box model consistente
- Fuente del sistema para mejor compatibilidad
- Fondo oscuro (#181818) para todo el sitio

### Paleta de Colores

```css
/* Colores para títulos */
.title-primary-color { color: #fdfffd; }      /* Blanco casi puro */
.title-secondary-color { color: #00ccff; }    /* Cyan */
.title-tertiary-color { color: #15ff08; }     /* Verde neón */

/* Colores para texto */
.text-primary-color { color: #9a9a9a; }       /* Gris */

/* Líneas decorativas */
.line--primary { background-color: #15ff08; }     /* Verde */
.line--secondary { background-color: #00ccff; }   /* Cyan */
```

**Esquema de colores:**
- 🟢 Verde neón (#15ff08): Acentos principales
- 🔵 Cyan (#00ccff): Acentos secundarios
- ⚪ Blanco (#fdfffd): Títulos principales
- ⚫ Gris (#9a9a9a): Texto de cuerpo

### Sección Hero

```css
.hero {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.hero--primary {
  background-image: url('../img/hero.jpg');
  background-size: cover;
  background-position: center;
}

.hero--secondary {
  background-image: url('../img/hero-2.jpg');
  background-size: cover;
  background-position: center;
}
```

**Características:**
- Padding vertical de 4rem (64px)
- Imágenes de fondo responsivas
- Dos variantes: primary (página principal) y secondary (horóscopo)

### Línea Decorativa Subrayada

```css
.bd-b {
  position: relative;
}

.bd-b .line {
  content: '';
  position: absolute;
  bottom: .5rem;
  left: 0;
  width: 100%;
  height: 4px;
}

.line--primary {
  background-color: #15ff08;
}
```

**Efecto:**
- Crea una línea decorativa bajo elementos específicos
- Posicionamiento absoluto respecto al contenedor relativo
- Altura de 4px con colores vibrantes

### Tipografía

```css
.title-primary {
  font-size: 2.5rem;
  line-height: 1.2;
}

.title-secondary {
  font-size: 2rem;
  line-height: 1.3;
}

.title-tertiary {
  font-size: 1.5rem;
  line-height: 1.4;
}
```

**Jerarquía:**
- Títulos primarios: 2.5rem (40px)
- Títulos secundarios: 2rem (32px)
- Títulos terciarios: 1.5rem (24px)

### Layout de Miembros

```css
.members {
  width: 100%;
  margin-top: 2rem;
}

.members__item {
  display: inline-block;
  width: 32%;
}

.members__item:nth-child(2) {
  margin-left: auto;
  margin-right: auto;
}
```

**Estructura:**
- 3 columnas del 32% cada una
- El segundo elemento se centra con márgenes auto
- Margen superior de 2rem

### Efectos Interactivos

#### Efecto de Rotación y Escala

```css
.rotate-and-scale-on-hover {
  transition: transform .3s ease-in-out;
}

.rotate-and-scale-on-hover:hover {
  transform: rotate(10deg) scale(1.2);
}
```

**Comportamiento:**
- Rotación de 10 grados
- Escala del 120%
- Transición suave de 0.3 segundos

#### Efecto de Subrayado con Sombra

```css
.link-inline-hover--shodow::after {
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

.link-inline-hover--shodow:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
```

**Efecto:**
- Línea invisible bajo el enlace
- Al pasar el ratón, se expande de derecha a izquierda
- Incluye brillo con box-shadow

### Botones

```css
.btn {
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

.btn:hover {
  background-color: #000;
  color: #fff;
}

.btn--secondary {
  background-color: #2994eb;
}

.btn--secondary:hover {
  background-color: #43a2ef;
  color: #fff;
}
```

**Variantes:**
- **Primario**: Blanco con borde negro, invierte al hover
- **Secundario**: Azul (#2994eb), más claro al hover (#43a2ef)

---

## ⚙️ Funcionalidades JavaScript

### `horoscope.js` - Generador Dinámico de Horóscopo

#### **1. Espera del Cargue de DOM**

```javascript
window.addEventListener("DOMContentLoaded", () => {
  // Código aquí se ejecuta cuando el DOM está completamente cargado
});
```

**Propósito:** Asegurar que el DOM esté completamente cargado antes de manipularlo.

#### **2. Array de Datos del Horóscopo**

```javascript
const horoscopes = [
  { 
    name: "Aries", 
    dates: "21 Mar - 19 Abr", 
    prediction: "Probablemente, se sentirá presionado entre la diversión..." 
  },
  { 
    name: "Tauro", 
    dates: "20 Abr - 20 May", 
    prediction: "Comprenda que no se puede resolver todo en un solo día..." 
  },
  // ... 10 signos más
];
```

**Contenido:**
- 12 objetos, uno por cada signo zodiacal
- Cada objeto tiene: `name` (nombre), `dates` (fechas), `prediction` (predicción)

#### **3. Selección del Contenedor**

```javascript
const container = document.querySelector(".container-el");
```

Obtiene el elemento con clase `container-el` de `horoscopo.html`.

#### **4. Iteración y Creación de Elementos**

```javascript
horoscopes.forEach(horoscope => {
  // Crear wrapper
  const canvasWrapper = document.createElement("div");
  canvasWrapper.style.display = "inline-block";
  canvasWrapper.style.width = "33.33%";
  canvasWrapper.style.padding = "10px";
  canvasWrapper.style.boxSizing = "border-box";
  
  // Crear canvas
  const canvas = document.createElement("canvas");
  canvas.className = "horoscope-canvas";
  canvas.width = 200;
  canvas.height = 220;
  canvas.style.borderRadius = "15px";
  canvas.style.transition = "transform 0.3s ease";
  canvas.style.cursor = "pointer";
  
  // Agregar wrapper y canvas al contenedor
  canvasWrapper.appendChild(canvas);
  container.appendChild(canvasWrapper);
});
```

**Estructura:**
- Para cada horóscopo, crea un wrapper div
- Dentro, crea un canvas de 200x220 píxeles
- El wrapper ocupa 33.33% del ancho (3 columnas)

#### **5. Efectos de Hover**

```javascript
canvas.addEventListener("mouseenter", () => {
  canvas.style.transform = "scale(1.1)";
});

canvas.addEventListener("mouseleave", () => {
  canvas.style.transform = "scale(1)";
});
```

**Efectos:**
- Al pasar el ratón: Escala del 110%
- Al salir el ratón: Vuelve al 100%

#### **6. Dibujo en Canvas**

```javascript
const ctx = canvas.getContext("2d");

// Fondo azul
ctx.fillStyle = "#00bfff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Nombre del signo (24px, negrita)
ctx.fillStyle = "#000000";
ctx.font = "bold 24px serif";
ctx.fillText(horoscope.name, 20, 40);

// Fechas (14px)
ctx.font = "14px serif";
ctx.fillText(horoscope.dates, 20, 65);

// Predicción con ajuste de texto
ctx.font = "12px serif";
```

**Proceso de dibujo:**
1. Obtiene el contexto 2D del canvas
2. Dibuja fondo azul (#00bfff)
3. Dibuja nombre en fuente grande (24px, negrita)
4. Dibuja fechas en fuente mediana (14px)
5. Dibuja predicción con ajuste de línea

#### **7. Envolvimiento de Texto (Text Wrapping)**

```javascript
const maxWidth = 160;          // Ancho máximo de línea
const lineHeight = 15;         // Altura entre líneas
const words = horoscope.prediction.split(" ");
let line = "";
let y = 90;                    // Posición inicial en Y

words.forEach(word => {
  const testLine = line + word + " ";
  const metrics = ctx.measureText(testLine);
  
  if (metrics.width > maxWidth && line) {
    // Si la línea es muy larga, dibuja la anterior
    ctx.fillText(line, 20, y);
    line = word + " ";
    y += lineHeight;
  } else {
    // Agrega la palabra a la línea actual
    line = testLine;
  }
});
// Dibuja la última línea
ctx.fillText(line, 20, y);
```

**Lógica:**
- Divide el texto en palabras
- Prueba agregar cada palabra a la línea actual
- Si la línea excede 160px, la dibuja y comienza una nueva
- Continúa hasta dibujar todas las palabras

---

## 🚀 Guía de Uso

### Abrir el Proyecto

1. **Abrir `index.html`** en el navegador
   - Muestra la página de bienvenida
   - Botón "Ir al Horóscopo" navega a `horoscopo.html`

2. **Interacciones disponibles:**
   - Pasar ratón sobre la imagen: Rota y escala
   - Pasar ratón sobre horóscopo: Aumenta de tamaño
   - Pasar ratón sobre enlaces: Aparece subrayado con brillo
   - Pasar ratón sobre botones: Invierte colores

### Modificar Contenido

#### Agregar un nuevo signo zodiacal:

```javascript
// En horoscope.js, agregar al array horoscopes:
{ 
  name: "Mi Signo", 
  dates: "XX Mes - XX Mes", 
  prediction: "Mi predicción aquí..."
}
```

#### Cambiar colores:

```css
/* En styles.css, modificar valores hex */
.title-primary-color { color: #NUEVOR; }
.line--primary { background-color: #NUEVOCOLOR; }
```

### Responsive Design

El diseño usa:
- Contenedor máximo de 1024px
- Padding responsivo (1rem en los lados)
- Layout flexible con porcentajes
- Media queries implícitas en los elementos

---

## 📚 Resumen de Características

| Característica | Descripción | Ubicación |
|---|---|---|
| **Hero Section** | Sección grande con imagen de fondo | index.html, horoscopo.html |
| **Canvas Dinámico** | Dibuja horóscopo con canvas 2D | horoscope.js |
| **Efectos Hover** | Transformaciones CSS al pasar ratón | styles.css |
| **Paleta Neón** | Verde y cyan vibrantes | styles.css |
| **Layout Flexible** | 3 columnas para horóscopo | horoscope.js |
| **Text Wrapping** | Ajuste automático de texto en canvas | horoscope.js |

---

**Última actualización:** 20 de enero de 2026 