require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const songRoutes = require('./routes/songs')
const app = express();

//middleware
app.use(express.json())
app.use((req,res,next)=> {
    console.log(req.path, req.method)
    next()
})

app.use('/api/songs/', songRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => {
            console.log('Database connected and server running on port', process.env.PORT)
        }) 
    })
    .catch((err)=>{
        console.log(err)
    })

