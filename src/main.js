const http = require('http')
let HeaderContentType = {
  HTML: 'text/html',
  JSON: 'application/json; charset=utf-8'
}

const server = http.createServer((request, response) => {
  console.log(request.url)
  let data = {
    id: 1,
    title: '关山月',
    content: '明月出天山，苍茫云海间'
  }
  let resData = JSON.stringify(data)
  response.writeHead('200', {
    'Content-Type': HeaderContentType.JSON
  })
  response.write(resData)
  response.end()
})


server.listen('3000', () => {
  console.log('服务已经启动了...')
})