# Figma .fig File Format

## Archivo `.fig` raíz

Los archivos `.fig` son zips comprimidos que poseen la siguiente estructura:

- `canvas.fig`: Documento Figma.
- `meta.json`: JSON con los metadatos.
- `thumbnail.png`: Thumbnail del documento.
- `images/`: Directorio con las imágenes del documento.

Puedes descomprimir cualquier archivo `.fig` con:

```sh
unzip -d <Directorio> <Figma.fig>
```

Y una vez descomprimido, si tienes `fig-reader` instalado puedes usar:

```sh
fig-reader <Directorio>/canvas.fig
```

O bien desde el directorio `reader`:

```sh
node cli.js <Directorio>/canvas.fig
```

## Archivo `canvas.fig`

Los archivos `canvas.fig` de Figma están basados en
[Kiwi](https://github.com/evanw/kiwi) y ahora mismo poseen una estructura
similar a esta:

| Campo         | Tipo     | Descripción                             |
| ------------- | -------- | --------------------------------------- |
| signature     | string   | fig-kiwi                                |
| schemaVersion | uint32le | Versión del esquema (actualmente la 20) |
| schemaSize    | uint32le | Tamaño del esquema                      |
| schema        | ...      | Esquema comprimido usando inflate (raw) |
| payloadSize   | uint32le | Tamaño de los datos                     |
| payload       | ...      | Datos comprimidos usando inflate (raw)  |

## Directorios

- complex: Archivos complejos de Figma
- simple: Archivos simples de Figma (formas simples + marco)
- reader: CLI .fig reader

## Esquema

En el archivo `schema.kiwi` se encuentra el esquema de [Kiwi](https://github.com/evanw/kiwi) de la versión 20 (0x14), que es la actual en el momento de subir este repositorio.

Made with :heart: by [AzazelN28](https://github.com/azazeln28)
