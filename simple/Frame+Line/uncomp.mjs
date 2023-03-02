import zlib from 'zlib'

try {
  const output = zlib.inflateSync(fs.readFileSync('comp.dat'))
} catch (error) {
  console.error('Not inflate')
}

try {
  const output = zlib.brotliDecompressSync(fs.readFileSync('comp.dat'))
} catch (error) {
  console.error('Not brotli')
}

