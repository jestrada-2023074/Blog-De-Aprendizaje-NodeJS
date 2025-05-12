'use strict'

import express from "express"
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import postRoutes from '../src/Post/post.routes.js'
const configs = (app) => {
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use(cors())
    app.use(helmet())
    app.use(morgan("dev"))
}

export const initServer = () => {
    const app = express()
    try{
        configs(app)
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Servidor ejecutándose en el puerto ${process.env.PORT}`)
    }catch(err){
        console.error("Error en el Servidor:", err)
    }
}
 const routes = (app) => {
    /*Se agrega Rutas de los Modelos */
    app.use('/v1/post', postRoutes)
}  