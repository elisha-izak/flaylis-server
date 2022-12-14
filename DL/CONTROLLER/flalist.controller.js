const flalistData = require('../MODEL/flalist.model') 





async function create(data) {
    return await orderData.create(data);
}

async function read(filter, proj) {
    return await flalistData
        .find(filter, proj)
        .populate('userId', 'email permission')
        .populate('products.product');
}

async function updateOne(orderId, newData) {
    return await flalistData.findOneAndUpdate(orderId, newData, { new: true });
}

async function updateMany(orderId, newData) {
    return await flalistData.updateMany(orderId, newData);
}

async function del(orderId) {
    return updateMany(orderId, { isActive: false });
}

module.exports = { del, updateOne, updateMany, read, create }
