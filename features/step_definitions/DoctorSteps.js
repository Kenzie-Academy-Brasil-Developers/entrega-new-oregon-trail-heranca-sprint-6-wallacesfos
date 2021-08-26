const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { doctor, viajante} = require("./../../app");


Given('um doutor de nome {string}', function (string) {
    doctor.name = string;
});

When('o doutor sair para caçar {int} vezes', function (int) {
    // When('o doutor sair para caçar {float} vezes', function (float) {
      // Write code here that turns the phrase above into concrete actions
    for(let i = 0; i < int; i++){
        viajante.hunt()
    }
});

When('o Traveler ficar doente', function () {
    // Write code here that turns the phrase above into concrete actions
    if (viajante.isHealthy == false){
        doctor.heal(true)
    }
});


Then('a quantidade de refeições deve ser maior que {int}', function (int) {
    // Then('a quantidade de refeições deve ser maior que {float}', function (float) {
      // Write code here that turns the phrase above into concrete actions
      assert.strictEqual(doctor.food, int);
});
