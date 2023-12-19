const request = require('postman-request')
const url = 'http://api.weatherstack.com/current?access_key=1327b26eda7b322ff43c6dd346a8a693&query=-0.8969474835433889,%20100.35073289537638'
request({ url: url }, (error, response) => {
// console.log(response)
const data = JSON.parse(response.body)
// console.log(data)
// console.log(data.current)
console.log(data.current.temperature)
})