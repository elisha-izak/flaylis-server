const express = require('express');
const router = express.Router();

const userRouter = require('./user.router')
const flalistRouter = require('./flalist.router')



router.use('/user',userRouter)
router.use('/flalist',flalistRouter)





module.exports = router;