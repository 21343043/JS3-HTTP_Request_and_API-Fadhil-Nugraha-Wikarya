const request = require('postman-request')
const urlCuaca = 
'http://api.weatherstack.com/current?access_key=1327b26eda7b322ff43c6dd346a8a693&query=-0.8969474835433889,%20100.35073289537638&units=m'
request({ url: urlCuaca, json: true }, (error, response) => {
console.log('Saat ini suhu diluar mencapai ' + response.body.current.temperature + ' derajat celcius. Kemungkinan terjadinya hujan adalah ' + response.body.current.precip + '%')
})