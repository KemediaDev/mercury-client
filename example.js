const MercuryClient = require('./index.js')

if (process.argv.length < 3) {
  console.log(`Usage: node example.js API_KEY URL`)
  process.exit(1)
}

const url = process.argv[3] || 'https://trackchanges.postlight.com/building-awesome-cms-f034344d8ed'
const mc = new MercuryClient(process.argv[2])

;(async () => {
  const mercuryData = await mc.parse(url)
  console.log(mercuryData)
})()
