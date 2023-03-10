import express from 'express';
import config from 'config'
import connect from './utils/connect';
import logger from './utils/logger' 
import routes from './routes'

const port = config.get<number>('port')

const app = express()

app.listen(port,()=>{
    logger.info(`running at http://localhost:${port}`)
    connect();

    routes(app)
})