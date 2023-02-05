const express = require('express');
const auth = require('../auth');
const router = express.Router();
const useService = require('../BL/user.service')





router.get('/',auth.validToken , async (req, res) => {
     console.log(req.token.iat);
    let result = await useService.getAllUsers()
    res.send(result);
})

router.get('/:id', (req, res) => {
    res.send(req.params.id);
})

router.post('/register', async (req, res) => {
    try{
    let user = await useService.createNewUser(req.body);
    res.send(user);
    }
    catch(err){
        res.status(401).send(err);
    }
})

router.post('/login', async (req, res) => {
    try{
    let result =  await useService.loginUser(req.body);
    res.send(result);
    }
    catch(err){
        res.status(401).send(err);
    }
})
 

router.post('/addFlalist', async (req, res) => {
    try{
    let result =  await useService.addFlalistUse(req.body);
    res.send(result);
    }
    catch(err){
        res.status(401).send(err);
    }
})



// router.post('/valid', async (req, res) => {
//     try{
//     let result = auth.validToken(req.headers.authorization);
//     res.send(result);
//     }
//     catch(err){
//         res.status(401).send(err);
//     }
// })


module.exports = router;