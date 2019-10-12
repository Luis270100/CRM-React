const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')

const Schema = mongoose.Schema

const app = express()


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/React_MRC', { useNewUrlParser: true })
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})


const CustomerSchema = new Schema ({
    name: String,
    email: String,
    firstContact: Date,
    emailType: String,
    sold: Boolean,
    owner: String,
    country: String
})

const Customer = mongoose.model('Customer', CustomerSchema)


module.exports = Customer


const Port = 3333
app.listen(process.env.Port || Port, () => console.log("You are running in port http://localhost:3333/"))