const MercuryClient = require('./index.js')

const mc = new MercuryClient('hDF1W4mrQRMP0CT7p6G2ZoWDWZFVhrGtYwdt4nxl')

mc.parse('https://trackchanges.postlight.com/building-awesome-cms-f034344d8ed')
.then((a) => {
  console.log('data', a)
})
.catch((e) => {
  console.log('error', e)
})
