let {Schema , model} = require('mongoose')
const categorySchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    image : {
        type : String,
        required : true,
        trim : true,
        default : ""
    }
})

module.exports = model('ekart' , categorySchema)
