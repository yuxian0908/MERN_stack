// import libraries
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserController = require('./controllers/UserController')


// initialize express
const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())


// connect to mongo
console.log(process.env)
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
	console.log(process.env)
}
console.log(process.env)

try {
	mongoose.connect(process.env.MONGO_DB_CONNECTION)
	console.log('MongoDb connected successfully!')
} catch (error) {
	console.log(error)
}


// routers
app.get('/', (req, res) => {
	res.send('Hello from Node.js test \n')
})

app.get('/register', (req, res) => {
	res.send('Welcome to Register \n')
})

app.post('/register', UserController.store)


app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`)
})