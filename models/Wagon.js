class Wagon{
    constructor(capacity) {
        this.capacity = capacity
        this.passageiros = []
    }

    getAvailableSeatCount() {
        if (this.capacity > 0) {
            return this.capacity - this.passageiros.length
        }
    }

    join(name) {
        if (this.getAvailableSeatCount() > 0) {
            this.passageiros.push(name)
        }
    }

    shouldQuarantine() {
        let a;
        let x = this.passageiros.map((item) => {
            if((item.isHealthy == false) != 0){
                a = true
            }else if((item.isHealthy == false) == 0){
                a = false
            }
        })

        return a
    }

    totalFood() {
        let comida = 0
        for (let i = 0; i < this.passageiros.length; i++) {
            let comidinha = this.passageiros[i].comidinha
            comida += comidinha
        }
        return comida
    }
}


module.exports = Wagon