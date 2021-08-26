const Traveler = require("./Traveler");

class Hunter extends Traveler {
    constructor(nome, isHealthy,food){
        super(nome, isHealthy, food =2)
    }

    hunt() {
        this.food += 5
    }

    eat() {
        if (this.food > 0) {
            if(this.food >= 2){
                this.food -= 2
                this.isHealthy = true
            }else if(this.food == 1){
                this.food -= 1
                this.isHealthy = false
            }
        } else {
            this.isHealthy = false
        }
    }

    giveFood(traveler, numOfFoodUnits){
        if (numOfFoodUnits > 0) {
            traveler.food += this.food
        }
    }

    
}


module.exports = Hunter;