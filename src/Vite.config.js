// vite.config.js
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  // Rutas relativas: así funciona en GitHub Pages (https://usuario.github.io/repositorio/)
  base: "./",

  build: {
    // Carpeta de salida "docs" para GitHub Pages
    outDir: "docs",

    // Varias páginas HTML (ANEXO IV)
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        formulario: fileURLToPath(
          new URL("./formulario.html", import.meta.url),
        ),
      },
    },
  },
});
