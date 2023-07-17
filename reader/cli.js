#!/usr/bin/env node
import fs from 'fs'
import zlib from 'zlib'
import path from 'path'
import kiwi from 'kiwi-schema'
import AdmZip from 'adm-zip'

if (process.argv.length <= 2) {
  console.log(`Usage: ${path.basename(process.argv[1])} <fig file>`)
  return process.exit(1)
}

// Chequeamos si el archivo es de tipo .zip, si lo es
// descomprimimos el `canvas.fig`.
const pkZipSignature = Buffer.from([0x50, 0x4b, 0x03, 0x04])

let buffer = fs.readFileSync(process.argv[2])
if (buffer.slice(0, 4).equals(pkZipSignature)) {
  const zip = new AdmZip(process.argv[2])
  const entries = zip.getEntries()
  for (const entry of entries) {
    if (entry.name === 'canvas.fig') {
      buffer = entry.getData()
      break
    }
  }
}

// Comprobamos si el archivo es `fig-kiwi`
if (buffer.slice(0, 8).toString('utf8') !== 'fig-kiwi') {
  console.log('Not a Figma file')
  process.exit(1)
}

// Versión del schema y tamaño.
const version = buffer.readUInt32LE(8)
const size = buffer.readUInt32LE(12)
const kiwiCompressed = buffer.slice(16, 16 + size)

let kiwiDecompressed
try {
  kiwiDecompressed = zlib.inflateRawSync(kiwiCompressed)
} catch (error) {
  console.error('Not inflated (raw)')
}

const schema = kiwi.decodeBinarySchema(kiwiDecompressed)

// Con esto podemos guardar el esquema.
// fs.writeFileSync('schema.kiwi', kiwi.prettyPrintSchema(schema))

const compiledSchema = kiwi.compileSchema(schema)

const dataSize = buffer.readUInt32LE(16 + size)
const dataCompressed = buffer.slice(20 + size)

let dataDecompressed
try {
  dataDecompressed = zlib.inflateRawSync(dataCompressed)
} catch (error) {
  console.error('Not inflated (raw)')
}

console.log(JSON.stringify(compiledSchema.decodeMessage(dataDecompressed)))

