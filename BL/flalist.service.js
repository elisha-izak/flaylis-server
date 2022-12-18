const flalistDl = require('../DL/CONTROLLER/flalist.controller');
const userDL = require('../DL/CONTROLLER/user.controller');



async function getAllFlalist() {
    try {
        const flalists = await flalistDl.read({});
       
        console.log(flalists);
        return flalists;
    }
    catch (e) {
        console.log(e.message);
    }
}

async function getFlaUser(userId) {
    try {
        const flalists = await userDL.readAllFlalist({_Id: userId});
        console.log(flalists);
        return flalists;
        
    }
    catch (e) {
        console.log(e.message);
    }
}



async function createFlalist(flalist) {
    try {
        const res = await flalistDl.create(flalist);
        console.log(res);
        return res;
    }
    catch (e) {
        console.log(e.message);
    }
}
// const getNewflalistId = () => 3982498



// let flalist = {
    // id: getNewflalistId(),
    // userId: '63907461f33b55d076e41fcf',
    // products: [
    //     {
    //         product: '63906cb12b04e51d98e7a022',
    //         quantity: 5,
    //         finalPrice: 1500
    //     }, {
    //         product: '63906d9fbd4d7db50d1c7f5a',
    //         quantity: 1,
    //         finalPrice: 3
    //     }],
    // totalPrice: 1513,
// }
// getAllflalistPop()
// getAllflalist()


// init(flalist)
module.exports = {createFlalist, getAllFlalist, getFlaUser}