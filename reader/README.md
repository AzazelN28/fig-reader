# Figma .fig reader

## Instalación

Si lo instalas de forma global podrás descomprimir cualquier archivo de `.fig`
de Figma.

```sh
npm install -g .
```

## Cómo usarlo

Si lo has instalado globalmente, sólo tienes que indicar el archivo `.fig` y te
mostrará por consola la estructura JSON del archivo.

```sh
fig-reader <Archivo.fig>
``` 

También puedes concatenarlo con [jq](https://stedolan.github.io/jq/) para poder
realizar _queries_.

```sh
fig-reader <Archivo.fig> | jq
```

Made with :heart: by [AzazelN28](https://github.com/azazeln28)
