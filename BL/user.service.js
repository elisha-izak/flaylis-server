const userDL = require('../DL/CONTROLLER/user.controller')
const flalistDl = require('../DL/CONTROLLER/flalist.controller');
const bcrypt = require('bcrypt');
const auth = require('../auth');


async function createNewUser(data) {
    console.log(data);
    if(!data.email || !data.password) throw "missing data"

    let user = await userDL.readOne({email : data.email});
    if(user) throw "user is exist"

    let passhash = await bcrypt.hash(data.password, 10)
    console.log(passhash);
    
    data.password = passhash;

    let res = await userDL.create(data);
    console.log(res)
    return res;
}



async function getAllUsers(){
    let users = await userDL.read({})
    console.log(users);
    return users
}


async function loginUser(data) {

    let user = await userDL.readOne({email: data.email}, '+password');
    if(!user) throw "user is NOT exist"
    console.log(user);

    let passValid = await bcrypt.compare(data.password, user.password)
    
    console.log('passValid '+ passValid);
    
    if(passValid) {
     let token = auth.createToken(user._id)
    return token;
}
throw 'not valid'
}


async function addFlalistUse(data){
    await userDL.updateFlalist(data.userId, data.flalistId)
    let user = await userDL.read({_id:data.userId})
    return user
}








// let user = {
//     fName: "yosi",
//     lName: "klear",
//     email: "yokl20@gmail.com",
//     password: "dfs09896mkm",
//     dob: new Date(1995,23, 2),
//     gender: "male",
//     permission: "viewer"
// }

// createNewUser(user);


module.exports = {createNewUser, getAllUsers, loginUser, addFlalistUse}