const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors') 
const app = express()
app.use(bodyParser.urlencoded({extended: false, limit: "50mb"}));
app.use(bodyParser.json({limit: "500mb"}))
app.use(cors())
app.options('*', cors())
var whitelist = ['http://localhost:4200/index']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.post('/login', (req, res) => {
  console.log(req)
  console.log(res)
	console.log(req.body)
	res.send(req.body)
})

const port = 3000

app.get('', (req, res) => res.send('Hello World!'))
// app.get('/', (req, res) => res.send('this is login'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
