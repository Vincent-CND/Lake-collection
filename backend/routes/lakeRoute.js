import express from 'express'
import {form} from '../controllers/lakeHandling.js'

const router = express.Router();

router.get('/lakeForm',form)

export default router