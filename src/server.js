import { config } from "dotenv"
config()

import express from "express"
import UsersController from "./app/controller/UsersController"
const app = express()

app.use(express.json())
app.post('/users', UsersController.store)
app.listen(3333, function () {
    console.log('Server running on localhost:3333')
})