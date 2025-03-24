abstract class Pokemon {
    public name: string
    public health: number

    constructor(name: string, health: number = 100) {
        this.name = name
        this.health = this.health
    }

    public isAlive(): boolean {
        return this.health > 0
    }

    receiveDamage(damage: number) {
        if (this.health < damage) {
            this.health = 0
        } else {
            this.health -= damage
        }
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu')
    }

    thunderShock(opponent: Pokemon): void {
        const damage: number = 20
        opponent.health -= damage
    }

    quickAtack(opponent: Pokemon): void {
        const damage: number = 10
        opponent.health -= damage
    }

    healSpark(): void {
        const heal: number = 20
        this.health += heal
    }
}

class Charizard extends Pokemon {
    constructor() {
        super('Charizard')
    }

    flameThrower(opponent: Pokemon): void {
        const damage: number = 30
        opponent.receiveDamage(damage)
    }

    scratch(opponent: Pokemon): void {
        const damage: number = 15
        opponent.receiveDamage(damage)
    }

    fireBreath(opponent: Pokemon): void {
        const heal: number = 10
        const damage: number = 10
        this.health += heal
        opponent.receiveDamage(damage)
    }
}