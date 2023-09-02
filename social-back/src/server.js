import express from 'express'
import path from 'path';
import 'dotenv/config'

import {dbClient} from './config/db.js'

import tweetRoutes from './routes/tweets.js'

const app = express()
const PORT = process.env.PORT

app.use(express.json());

// STATIC FILES
// app.use(express.static(path.join(__dirname, '/public')));

app.use('/', (req, res, next) => {

    // const whitelist = ['', '', ''];
    // const origin: string = req.headers.origin!; // Non-null assertion operator
    // if (whitelist.indexOf(origin) > -1) {
    //     res.setHeader('Access-Control-Allow-Origin', origin);
    // }

    res.setHeader('Access-Control-Allow-origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Reguested-With, Content-Type, Accept')
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTION, PATCH, HEAD')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    next()
})

app.use("/tweet", tweetRoutes)

app.use("*", (req, res) => {
    // Request
    res.status(404)
    res.send("<h1>no existe<h1>")
    res.end()
})

app.listen(PORT, async()=>{
    await dbClient.connect()
    console.log(`server running on port: ${PORT}`)
})