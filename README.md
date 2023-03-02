# Figma .fig File Format

Los archivos `.fig` de Figma están basados en
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

## Folders

- complex: Complex Figma files
- simple: Simple Figma files with descriptions
- reader: CLI .fig reader
