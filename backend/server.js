import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { backendDir,frontendDir, publicDir, viewsDir } from './utils/path.js';
import land from './routes/landRoute.js';
import lake from './routes/locationRoute.js';
import {error} from './controllers/errorHandling.js';

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(publicDir));

app.use('/',land)
app.use('/',lake)
app.use(error)

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})
