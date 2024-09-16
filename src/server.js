import { config } from "dotenv"
config()
import express from "express"
import UsersController from "./app/controller/UsersController"
import Queue from "./app/lib/Queue"
import { ExpressAdapter } from "@bull-board/express"
const { createBullBoard } = require('@bull-board/api');
const { BullMQAdapter } = require('@bull-board/api/bullMQAdapter');


const app = express()

const serverAdapter = new ExpressAdapter()
serverAdapter.setBasePath("/admin/queues")

const queues = Queue.queues.map(queue => queue.bull).map(q => new BullMQAdapter(q))

createBullBoard({ queues, serverAdapter })

app.use(express.json())
app.use('/admin/queues', serverAdapter.getRouter())
app.post('/users', UsersController.store)


app.listen(3333, function () {
    console.log('Server running on localhost:3333')
})