# Avanzado de Astro

## Estructura del Md para los blogs
Al principio debe tener este formato:
--- // los 3 guiones son los de Astro
// Aquí colocar las especificaciones del blog
propiedad: "valor" // no es necesario colocar " , " al final puesto que no es un objeto

title: "my first post"
pubDate: "Jul 08 2022"
heroImage: "https://generated.vusercontent.net/placeholder.svg"
tags: ["AI", "Dev"]
--- //
Después de los 3 guiones se coloca el contenido del blog en markdown.


## Configurar el Ts para cargar los blogs
Crear un archivo llamado config.ts dentro de la carpeta content y agregar el siguiente código.
Dentro del esquema de z.object se deben colocar las propiedades que se definieron en el archivo .md con su respectivo tipo de dato.

```ts
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    type: "content",
    schema: z.object({
        heroImage: z.string(),
        title: z.string(),
        pubDate: z.string(),
        tags: z.array(z.string()),
    })
});

export const collections = { blog };
```

## Generar los tipos
```sh
npx astro sync
```
esto generará los tipos del archivo config.ts, no tengo idea de donde los guarda o coloca