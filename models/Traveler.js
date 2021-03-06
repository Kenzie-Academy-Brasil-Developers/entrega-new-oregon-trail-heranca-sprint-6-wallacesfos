class Traveler{
    constructor(name, isHealthy = true, food = 1) {
        this.name = name;
        this.isHealthy = isHealthy;
        this.food = food;
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

module.exports = Traveler