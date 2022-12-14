const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fName : {
        type : String
    },
    lName : {
        type : String
    },
    email : {
        type:String,
        unique : true,
        required : true
    },
    password : {
        type:String,
        required:true,
        select : false
    },
    createDate : {
        type:Date,
        default : Date.now
    },
    isActive : {
        type : Boolean,
        default: true
    },
    flalistslist:[{
    flalistId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "flalist",
        required: true
    },
    }
    ]
})



const userData = mongoose.model('users', userSchema)





module.exports = userData