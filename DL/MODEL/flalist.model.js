const mongoose = require('mongoose')

const flalistSchema = new mongoose.Schema({
    title : {
        type : String
    },
    songList: [{
        songId: {
            type: String,
            required: true
        },
        title:{
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        }
    }],
    isActive: {
        type: Boolean,
        default: true
    }

})




const flalistData = mongoose.model('flalist', userSchema)
module.exports = flalistData