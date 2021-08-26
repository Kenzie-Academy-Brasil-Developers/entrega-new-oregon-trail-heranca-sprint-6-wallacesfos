const Doctor = require("./models/Doctor");
const Traveler = require("./models/Traveler")
const Wagon = require("./models/Wagon")
const Hunter = require("./models/Hunter");



let viajante = new Traveler();
let carroca = new Wagon();
let doctor = new Doctor();
let hunter = new Hunter();


module.exports = {
    viajante,
    carroca,
    doctor,
    hunter
}