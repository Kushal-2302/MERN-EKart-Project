const mongoose = require('mongoose');
require('dotenv').config()

const URL = process.env.URL

exports.connectDatabase = async () => {
    await mongoose.connect(URL)
    console.log("Database is connected")
}