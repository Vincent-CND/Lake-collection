import express from 'express';
import {views} from '../controllers/landHandling.js'
const router = express.Router()

router.get('/',views)

export default router