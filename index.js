const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/user.router')
const middleware = require('./middleware')
const bcrypt = require('bcrypt');


app.use(cors());
app.use(express.json());

app.post('/sign-up',(req, res)=>{
    const {username, password} = req.body
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    let user = {
        username,
        salt,
        hash,
    };

    console.log(user);

    res.sendStatus(201)
});

app.post('/login',(req, res)=>{
    const {username, password} = req.body
    const valid = bcrypt.compareSync(password, user.hash)
})



app.use('/user', middleware,userRouter)



app.listen(4000, ()=> {
    console.log('Server listening on port 4000');
})
