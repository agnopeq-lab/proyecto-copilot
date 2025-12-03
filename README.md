# Blog Técnico: Grafos

Este repositorio contiene un blog estático (HTML/CSS) con tres artículos sobre Grafos: introducción, representaciones y algoritmos (BFS/DFS). Está diseñado para publicarse en GitHub Pages.

Archivos creados:
- `index.html` — Página principal con enlaces a los posts.
- `css/style.css` — Estilos (tema morado y blanco).
- `posts/post1.html` — Introducción a los grafos (diagrama SVG).
- `posts/post2.html` — Representaciones: lista y matriz de adyacencia.
- `posts/post3.html` — BFS y DFS con pseudocódigo.

Cómo publicar en GitHub Pages (resumen)

1. Crea un nuevo repositorio en GitHub (por ejemplo `grafo-blog`).
2. En tu máquina, desde la carpeta del proyecto, realiza los comandos git (reemplaza `<tu-usuario>` y `<tu-repo>`):

```powershell
git init ;
git add . ;
git commit -m "Initial commit: Blog Grafos" ;
git branch -M main ;
git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git ;
git push -u origin main
```

3. En GitHub, entra a Settings → Pages (Páginas) y configura la fuente en `main` branch y carpeta `/ (root)`; guarda. GitHub generará un link tipo `https://<tu-usuario>.github.io/<tu-repo>/` que es el que debes entregar para esta actividad.

Alternativa (usando GitHub CLI `gh`)

```powershell
gh repo create <tu-usuario>/<tu-repo> --public --source=. --remote=origin ;
git push -u origin main
gh pages create --source main --path /
```

Notas y verificación local

- Para revisar localmente, abre `index.html` en tu navegador (doble clic o arrastrar al navegador).
- Si quieres servir localmente con Python HTTP server (rápido):

```powershell
python -m http.server 8000
# luego abrir http://localhost:8000
```

Si necesitas que yo cree el repositorio en GitHub (con tu permiso) o que te guíe paso a paso para publicar, dímelo y te doy los pasos exactos o los ejecuto si me das la información necesaria.

Soporte de impresión

- Cada post tiene un botón "Imprimir" en la página que abre el diálogo de impresión del navegador.
- También se agregaron estilos `@media print` para ocultar la cabecera y navegación y presentar sólo el contenido del artículo.
