# Manual: Cómo Subir Nuevas Entradas al Blog de Ciberseguridad

## Índice
1. [Introducción](#introducción)
2. [Configuración Inicial de GitHub Pages](#configuración-inicial)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Cómo Agregar una Nueva Entrada](#agregar-nueva-entrada)
5. [Formato y Estilo de las Entradas](#formato-y-estilo)
6. [Publicación y Deploy](#publicación-y-deploy)
7. [Mantenimiento y Actualizaciones](#mantenimiento)
8. [Troubleshooting](#troubleshooting)

## Introducción

Este manual te guiará paso a paso para subir nuevas entradas a tu blog personal de ciberseguridad alojado en GitHub Pages. El blog está diseñado como una Single Page Application (SPA) que utiliza JavaScript para cargar contenido dinámicamente.

### Características del Blog
- **Diseño responsive**: Funciona en desktop y móvil
- **Categorización automática**: Las entradas se organizan por categorías
- **Búsqueda integrada**: Los usuarios pueden buscar por títulos
- **SEO optimizado**: Meta tags y estructura semántica
- **Carga rápida**: Contenido estático optimizado para GitHub Pages

## Configuración Inicial de GitHub Pages

### Paso 1: Crear el Repositorio
1. Ve a GitHub y crea un nuevo repositorio
2. Nómbralo como `[tu-usuario].github.io` o cualquier nombre para un project page
3. Asegúrate de que sea **público** (GitHub Pages gratuito solo funciona con repos públicos)
4. Inicializa con un README.md

### Paso 2: Habilitar GitHub Pages
1. Ve a la pestaña **Settings** de tu repositorio
2. Scroll down hasta la sección **Pages**
3. En **Source**, selecciona **Deploy from a branch**
4. Selecciona la branch **main** y folder **/ (root)**
5. Click **Save**

### Paso 3: Subir los Archivos Base
Sube los siguientes archivos a tu repositorio:
- `index.html` (página principal)
- `style.css` (estilos)
- `app.js` (funcionalidad JavaScript)

**URL de acceso**: Tu blog estará disponible en `https://[tu-usuario].github.io/[nombre-repo]`

## Estructura del Proyecto

```
tu-blog/
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── app.js             # JavaScript principal
├── README.md          # Documentación del proyecto
├── assets/            # Recursos estáticos (opcional)
│   ├── images/
│   └── icons/
└── posts/             # Archivos de entradas (opcional)
    ├── post-1.md
    └── post-2.md
```

## Agregar Nueva Entrada

### Método 1: Edición Directa en app.js (Recomendado)

1. **Abre el archivo `app.js`** en tu editor o directamente en GitHub
2. **Localiza el array `this.posts`** (línea aproximada 20-30)
3. **Agrega tu nueva entrada** al final del array siguiendo este formato:

```javascript
{
    id: "id-unico-de-la-entrada",
    title: "Título de Tu Entrada",
    date: "2024-MM-DD",
    category: "Categoría",
    tags: ["Tag1", "Tag2", "Tag3"],
    excerpt: "Breve descripción de la entrada que aparecerá en la lista.",
    content: `# Título de Tu Entrada

Tu contenido completo aquí usando Markdown.

## Sección 1
Contenido de la sección...

## Sección 2
Más contenido...

**Tags**: #Tag1 #Tag2 #Tag3`
}
```

### Paso a Paso Detallado:

#### 1. Crear el ID único
- Usa solo minúsculas y guiones
- Debe ser único y descriptivo
- Ejemplo: `"incident-response-playbook"`

#### 2. Configurar metadatos
```javascript
title: "Incident Response: Playbook para Equipos de Seguridad",
date: "2024-10-08", // Formato YYYY-MM-DD
category: "Incident Response", // Categorías sugeridas abajo
tags: ["Incident Response", "SOC", "Playbook", "Security Operations"]
```

#### 3. Escribir el excerpt
- Máximo 150-200 caracteres
- Resumen atractivo del contenido
- Sin saltos de línea

#### 4. Desarrollar el content
- Usa Markdown para formato
- Estructura clara con headers (##, ###)
- Incluye ejemplos de código cuando sea relevante

### Categorías Sugeridas
- `"Cloud Security"`
- `"Pentesting"`
- `"Management"`
- `"Tools"`
- `"Incident Response"`
- `"Compliance"`
- `"Red Team"`
- `"Blue Team"`
- `"OSINT"`
- `"Vulnerability Management"`

## Formato y Estilo de las Entradas

### Estructura Recomendada
```markdown
# Título Principal

Párrafo introductorio que enganche al lector.

## Introducción
Contexto y objetivos del artículo.

## Sección Principal 1
### Subsección
Contenido detallado...

## Sección Principal 2
### Ejemplo Práctico
```bash
# Código de ejemplo
comando --help
```

## Conclusión
Resumen y call to action.

**Tags**: #Tag1 #Tag2 #Tag3
```

### Guidelines de Estilo

#### Headers
- Usa `#` para el título principal (solo uno por entrada)
- `##` para secciones principales
- `###` para subsecciones
- No uses más de 4 niveles de headers

#### Código
```javascript
// Para JavaScript
function ejemplo() {
    return "código";
}
```

```bash
# Para comandos de terminal
nmap -sS target.com
```

```python
# Para Python
def security_scan():
    return results
```

#### Listas
- **No ordenadas**: Usa `-` para bullet points
- **Ordenadas**: Usa `1.` para listas numeradas
- **Definiciones**: Usa `**Término**: Descripción`

#### Énfasis
- **Negrita**: `**texto**` para términos importantes
- *Cursiva*: `*texto*` para énfasis suave
- `Código inline`: Usa backticks para comandos o términos técnicos

## Publicación y Deploy

### Método Directo (GitHub Web Interface)

1. **Ve a tu repositorio en GitHub**
2. **Click en `app.js`**
3. **Click el botón de editar (ícono de lápiz)**
4. **Agrega tu nueva entrada** al array `this.posts`
5. **Scroll down** y completa:
   - **Commit message**: `"Add new post: [título de la entrada]"`
   - **Description** (opcional): Breve descripción de los cambios
6. **Click "Commit changes"**

### Método Git (Línea de Comandos)

```bash
# Clonar el repositorio (primera vez)
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo

# Hacer cambios
# Edita app.js con tu editor favorito
nano app.js

# Agregar cambios
git add app.js
git commit -m "Add new post: Título de la entrada"
git push origin main
```

### Verificación del Deploy
1. **GitHub Actions**: Ve a la pestaña "Actions" para ver el estado del deploy
2. **Tiempo de propagación**: Puede tomar 1-10 minutos para que los cambios se reflejen
3. **Cache del navegador**: Usa Ctrl+F5 para refrescar y evitar cache

## Mantenimiento y Actualizaciones

### Actualizar Entradas Existentes
1. Localiza la entrada por su `id` en el array
2. Modifica el contenido necesario
3. Actualiza la fecha si es un cambio significativo
4. Commit los cambios

### Reorganizar Entradas
Las entradas se muestran en orden cronológico inverso (más reciente primero). Para cambiar el orden:
1. Modifica las fechas en formato `YYYY-MM-DD`
2. O reordena manualmente las entradas en el array

### Agregar Nuevas Categorías
1. Simplemente usa una nueva categoría en tu entrada
2. El sistema automáticamente la reconocerá para filtros

### Optimización de Performance
- **Imágenes**: Si usas imágenes, optimízalas (<500KB cada una)
- **Contenido**: Mantén las entradas entre 1000-3000 palabras
- **JavaScript**: No modifiques la lógica de la app sin testing

## Troubleshooting

### Problemas Comunes

#### 1. La entrada no aparece en el blog
**Causas posibles**:
- Error de sintaxis en JavaScript
- Coma faltante o extra en el array
- ID duplicado

**Solución**:
```javascript
// Verifica la sintaxis:
{
    id: "mi-entrada",
    title: "Mi Título",
    // ... resto de campos
}, // <- Coma importante aquí (excepto en la última entrada)
```

#### 2. Error 404 en GitHub Pages
**Causas**:
- Repositorio privado
- GitHub Pages no habilitado
- Archivos no en la rama correcta

**Solución**:
1. Ve a Settings > Pages
2. Verifica que esté habilitado
3. Selecciona la rama correcta

#### 3. Cambios no se reflejan
**Causas**:
- Cache del navegador
- Deploy en progreso
- Error en el commit

**Solución**:
1. Espera 5-10 minutos
2. Usa Ctrl+F5 para refresh
3. Verifica Actions tab para errores

#### 4. Formato roto en la entrada
**Causas**:
- Markdown mal formateado
- Caracteres especiales sin escapar
- Template strings mal cerrados

**Solución**:
```javascript
// Usa template literals correctamente:
content: `Tu contenido
con múltiples líneas
usando backticks`
```

### Validación de Sintaxis

#### Para JavaScript:
- Usa VS Code con extensión JavaScript
- Herramientas online: JSLint, JSHint
- Console del navegador para errores

#### Para Markdown:
- Herramientas online: StackEdit, Dillinger
- VS Code con extensión Markdown

## Tips Adicionales

### SEO Optimization
- **Títulos descriptivos**: Incluye keywords relevantes
- **Meta descriptions**: Usa excerpts descriptivos
- **URLs amigables**: IDs descriptivos se convierten en anchors
- **Headers jerárquicos**: Usa h1, h2, h3 correctamente

### Content Strategy
- **Consistencia**: Publica regularmente
- **Calidad**: Prioriza contenido útil y original
- **Engagement**: Incluye ejemplos prácticos
- **Updates**: Mantén contenido técnico actualizado

### Backup Strategy
- **Git history**: Usa commits descriptivos
- **Branches**: Considera usar feature branches para contenido experimental
- **Local copy**: Mantén una copia local del repositorio

### Analytics (Opcional)
Para agregar Google Analytics:
1. Crea una cuenta en Google Analytics
2. Agrega el tracking code antes del `</head>` en index.html
3. Commit los cambios

### Personalization
- **Colores**: Modifica variables CSS en `:root`
- **Fuentes**: Cambia font-family en CSS
- **Layout**: Ajusta grid y flexbox properties
- **Content**: Actualiza información personal en app.js

---

## Checklist para Nueva Entrada

Antes de publicar, verifica:

- [ ] ID único y descriptivo
- [ ] Fecha en formato correcto (YYYY-MM-DD)
- [ ] Categoría apropiada
- [ ] Tags relevantes (3-5 recomendado)
- [ ] Excerpt atractivo (<200 caracteres)
- [ ] Contenido bien estructurado con headers
- [ ] Código formateado correctamente
- [ ] Sin errores de sintaxis JavaScript
- [ ] Commit message descriptivo
- [ ] Deploy exitoso verificado

---

**Autor**: Felipe Tapia  
**Última actualización**: Octubre 2024  
**Versión**: 1.0

Para soporte adicional, revisa la documentación de GitHub Pages en: https://docs.github.com/es/pages