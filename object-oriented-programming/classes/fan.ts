// Clases a crear: Ventilador {velocidad, tamaño, potencia, medidda en vatios, tipo y color} añadir setts y getts

class Ventilador {
    private tipo: string
    private color: string
    private velocidad: number
    private tamaño: number
    private potencia: number

    constructor(tipo: string, color: string, velocidad: number, tamaño: number, potencia: number) {
        this.tipo = tipo
        this.color = color
        this.velocidad = velocidad
        this.tamaño = tamaño
        this.potencia = potencia
    }
    // ALL GETTERS
    public getTipo() {
        return this.tipo
    }
    public getColor() {
        return this.color
    }
    public getVelocidad() {
        return this.velocidad
    }
    public getTamaño() {
        return this.tamaño
    }
    public getPotencia() {
        return this.potencia
    }

    // ALL SETTERS
    public setTipo(tipo: string) {
        this.tipo = tipo
    }
    public setColor(color: string) {
        this.color = color
    }
    public setVelocidad(velocidad: number) {
        this.velocidad = velocidad
    }
    public setTamaño(tamaño: number) {
        this.tamaño = tamaño
    }
    public setPotencia(potencia: number) {
        this.potencia = potencia
    }
}

const fan1 = new Ventilador("De pared", "Blanco", 3, 5, 3)

console.log(fan1.getColor())