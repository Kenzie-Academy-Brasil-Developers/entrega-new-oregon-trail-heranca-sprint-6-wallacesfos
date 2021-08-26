const Traveler = require("./Traveler");

class Doctor extends Traveler {
    constructor(name, isHealthy, food) {
        super(name, isHealthy, food)
    }

    heal(traveler) {
        if (traveler.isHealthy == false) {
            traveler.isHealthy = true
        }
    }

    hunt() {
        this.food += 2
    }

    eat() {
        if (this.food > 0) {
            this.food -= 1
            this.isHealthy = true
        } else {
            this.isHealthy = false
        }
    }

    get comer() {
        return this.comer
    }

    set comer(comidinha) {
        this.comer = comidinha
    }
}

module.exports = Doctor