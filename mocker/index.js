let systems = require('./module/system')
let frame = require('./module/frame')

let defaulturl = '/cmsApi'
function getBaseUrl (method, path) {
  return `${method} ${defaulturl}${path}`
}
function getMockerData () {
  let proxys = {}
  frame.forEach(item => {
    proxys[getBaseUrl(item.method, item.path)] = item.data
  })
  systems.forEach(item => {
    proxys[getBaseUrl(item.method, item.path)] = item.data
  })
  return proxys
}
module.exports = getMockerData()