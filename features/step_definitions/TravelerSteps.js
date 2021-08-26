const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { viajante } = require("./../../app");

Given('um Traveler de nome {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    viajante.name = string;
});

Given('ele sempre começa a viagem com {int} refeição', function (int) {
    // Given('ele sempre começa a viagem com {float} refeição', function (float) {
      // Write code here that turns the phrase above into concrete actions
      viajante.food = int;
});


Given('ele sempre começa a viagem saudável.', function () {
    // Write code here that turns the phrase above into concrete actions
    viajante.isHealthy = true
});



When('o Traveler sair para caçar {int} vezes', function (int) {
    // When('o Traveler sair para caçar {float} vezes', function (float) {
      // Write code here that turns the phrase above into concrete actions
    for(let i = 0; i < int; i++){
        viajante.hunt()
    }
});


When('o Traveler parar para comer {int} vezes', function (int) {
    for(let i = 0; i < int; i++){
        viajante.eat()
    }
});




Then('a quantidade de refeições deve ser igual a {int}', function (int) {
    assert.strictEqual(viajante.food, int);
});

Then('o Traveler não ficará doente', function () {
    assert.strictEqual(viajante.isHealthy, true)
});

Then('o Traveler ficará doente', function () {
    assert.strictEqual(viajante.isHealthy, false)
});