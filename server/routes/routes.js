const express = require('express')
const router = express.Router()

const controllers=require('../Controller/appcontroller')


router.get('/',controllers.getHomePage)

module.exports=router