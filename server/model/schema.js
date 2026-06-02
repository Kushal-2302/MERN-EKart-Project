let {Schema , model} = require('mongoose')

const ekartSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    desc : {
        type : String,
        required : true,
        trim : true
    },
    quantity : {
        type : Number,
        required : true,
        min : 0
    },
    price : {
        type : Number,
        required : true,
        min : 0,
        default : 0
    },
    category : {
        type : [String],
        required : true,
        default : []
    },
    image : {
        type : String,
        required : true,
        trim : true,
        default : ""
    }
},
{
    timestamps : true
}
)

module.exports = model('ekart' , ekartSchema)