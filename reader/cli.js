#!/usr/bin/env node
import fs from 'fs'
import zlib from 'zlib'
// import path from 'path'
import kiwi from 'kiwi-schema'

if (process.argv.length <= 2) {
  console.log(`Usage: ${process.argv[1]} <fig file>`)
  process.exit(1)
}

const buffer = fs.readFileSync(process.argv[2])
if (buffer.slice(0, 8).toString('utf8') !== 'fig-kiwi') {
  console.log('Not a Figma file')
  process.exit(1)
}

const version = buffer.readUInt32LE(8)
console.log('Schema version: ', version)

const size = buffer.readUInt32LE(12)
console.log('Schema size: ', size)

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

// console.log(compiledSchema.decodeMessage(dataDecompressed))
console.log(JSON.stringify(compiledSchema.decodeMessage(dataDecompressed), null, 2))

// console.log(dataDecompressed.toString('utf8'))
// console.log(dataDecompressed.byteLength)

// fs.writeFileSync('document.figma', dataDecompressed)

// console.log(compiledSchema.decodeNodeFieldMap(dataDecompressed))

// console.log(16 + size, buffer.byteLength - (16 + size))

// console.log(schema)
// console.log(kiwi.prettyPrintSchema(schema))

// const kiwiPath = path.join(path.dirname(process.argv[2]), 'compressed-schema.kiwi')
// fs.writeFileSync(kiwiPath, kiwiCompressed)
