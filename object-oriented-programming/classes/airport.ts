// Clases a crear: Airport {nombre, ubicacion, runway, traffic} methods: {changeTrafficLevel, energencyLanding, displayInfo}

type TrafficLevel = 'low' | 'mid' | 'high'
class Airport {
    private name: string
    private location: string
    private runway: boolean
    private traffic: TrafficLevel

    constructor(name: string, location: string) {
        this.name = name
        this.location = location
        this.runway = true
        this.traffic = 'low'
    }

    changeTrafficLevel(newTrafficLevel: TrafficLevel): void {
        this.traffic = newTrafficLevel
    }

    emergencyLanding() {
        this.runway = false
        this.traffic = 'high'
    }

    displayInfo() {
        console.log(`
            WELCOME ABOARD TO ${this.name}
            ----------------------------->
            WE ARE HAPPY TO HAVE YOU HERE
            ----------------------------->
            CURRENT LOCATION ${this.location}
            ----------------------------->
            RUNWAY STATE ${this.runway}
            ----------------------------->
            CURRENT TRAFFIC LEVEL ${this.traffic}
            `)
    }

}

const AeropuertoCostarica = new Airport('JUAN SANTAMARIA', 'COSTA RICA')

console.log(AeropuertoCostarica.displayInfo())

AeropuertoCostarica.emergencyLanding()