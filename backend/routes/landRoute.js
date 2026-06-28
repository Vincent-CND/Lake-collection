import express from 'express';
import {views} from '../controllers/landHandling.js'
const router = express.Router()

router.get('/',views)
// router.get('/test/:id',(req,res) => {
//     console.log(`the params is ${req.params.id}`)
// })

export default router
