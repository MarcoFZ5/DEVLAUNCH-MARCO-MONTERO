
class Vehicle {
    private emoji: string
    private marca: string
    private modelo: string
    private year: number

    constructor(emoji: string, marca: string, modelo: string, year: number) {
        this.emoji = emoji
        this.marca = marca
        this.modelo = modelo
        this.year = year
    }

    startVehicle(): string {
        return `BRRRRRRRMM`
    }

    displayVehicleInfo(): string {
        return ` 
        --- ${this.emoji} ---
        BRAND: ${this.marca}
        MODEL: ${this.modelo}
        YEAR: ${this.year}`
    }
}

class Car extends Vehicle {
    constructor(emoji: string, marca: string, modelo: string, year: number, private doors: number) {
        super(emoji, marca, modelo, year)
    }

    startVehicle(): string {
        return `METE LLAVE Y BRMMMM`
    }

    displayCarInfo(): string {
        const carInfo = this.displayVehicleInfo()
        return `${carInfo} \n DOORS: ${this.doors}`
    }

    startAirConditioner(): string {
        return `Brisa fria del aire`
    }
}

class Bike extends Vehicle {
    constructor(emoji: string, marca: string, modelo: string, year: number, private sideCar: boolean) {
        super(emoji, marca, modelo, year)
    }

    startVehicle(): string {
        return `MOTO ENCIENDE`
    }

    displayBikeInfo(): string {
        const bikeInfo = this.displayVehicleInfo()
        return `${bikeInfo} SIDECAR: ${this.sideCar}`
    }

    doWheelie(): string {
        return `WHEEEEEELIEEEEEE`
    }
}

const moto1 = new Bike('🏍️', 'Yamaha', 'YZ', 2020, false)
const carro1 = new Car('🚗', 'Toyota', 'Rav4', 2024, 4)

console.log(moto1.startVehicle())
console.log(moto1.displayBikeInfo())
console.log(moto1.doWheelie())

console.log(carro1.startVehicle())
console.log(carro1.displayCarInfo())
console.log(carro1.startAirConditioner())