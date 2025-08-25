import express from "express"
import {postservices,getservices,getservice} from "../Controller/services.js"

const router = express.Router()

router.post('/',postservices)
router.get('/',getservices)
router.get('/:id',getservice)

export default router