import express from 'express'
import {form, formUp} from '../controllers/locationHandling.js'

const router = express.Router();

router.get('/lakeForm',form)
router.post('/lakeFormUp',formUp)
export default router
