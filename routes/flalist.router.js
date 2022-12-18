const express = require('express');
const router = express.Router();
const flaService = require('../BL/flalist.service')

router.get('/', async (req, res) => {
    const flalists =  await flaService.getAllFlalist()
    res.send(flaService);
})

router.get('/use/:id', async (req, res) => {
    const flaUser =  await flaService.getFlaUser(req.params.id)
    res.send(flaUser);
})

router.post('/', async (req, res) => {
    await flaService.createFlalist(req.body)
    res.send('ok');
})




module.exports = router;