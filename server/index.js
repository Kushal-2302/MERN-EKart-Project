const express = require('express');
require('dotenv').config()

const {connectDatabase} = require('./database/mydb')
const ekartRouter = require('./routers/ekartRouters')

const myapp = express();
connectDatabase()

myapp.use(express.json())

myapp.use('/ekartApi', ekartRouter)

const PORT = process.env.PORT;
myapp.listen(PORT , err => {
    if(err) throw err;
    console.log(`Server is ready : http://localhost:${PORT}`)
})