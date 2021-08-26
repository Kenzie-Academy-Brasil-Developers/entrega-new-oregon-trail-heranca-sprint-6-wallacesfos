const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { hunter } = require("./../../app");

Given('um Hunter de nome {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    hunter.name = string;
});


When('o Hunter sair para caçar {int} vezes', function (int) {
    // When('o Hunter sair para caçar {float} vezes', function (float) {
      // Write code here that turns the phrase above into concrete actions
    for(let i = 0; i < int; i++){
        hunter.hunt()
    }
    console.log(hunter)
});

When('o Hunter parar para comer {int} vezes', function (int) {
    // When('o Hunter parar para comer {float} vezes', function (float) {
      // Write code here that turns the phrase above into concrete actions
    for(let i = 0; i < int; i++){
        hunter.eat()
    }
});

Then('a quantidade de refeições do Hunter deve ser igual a {int}', function (int) {
    // Then('a quantidade de refeições do Hunter deve ser igual a {float}', function (float) {
      // Write code here that turns the phrase above into concrete actions
    assert.strictEqual(hunter.food, int);
});


Then('o Hunter não ficará doente', function () {
    // Write code here that turns the phrase above into concrete actions
    assert.strictEqual(hunter.isHealthy, true)
});

Then('o Hunter ficará doente', function () {
    // Write code here that turns the phrase above into concrete actions
    assert.strictEqual(hunter.isHealthy, false)
});
