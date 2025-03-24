// Clases a crear: Animales {nombre, especie, edad} Metodos {emitir un sonido, mostrar info} 
// Clases hijas de Animales {Leon, Elefante} Leon {Super, melena} Metodos {rugir} // Elefantes {Super, tamaño} Metodos {Sonar su torompa}

class Animal {
    protected name: string
    protected specie: string
    protected age: number

    constructor(name: string, specie: string, age: number) {
        this.name = name
        this.specie = specie
        this.age = age
    }

    public displayInfo(): string {
        return `
            Name: ${this.name}
            Specie: ${this.specie}
            Age: ${this.age}
            `
    }

    public doSound(): string {
        return 'Animal Sound'
    }
}

class Leon extends Animal {

    constructor(name: string, specie: string, age: number) {
        super(name, specie, age)
    }

    public doSound(): string {
        return 'ROAAR'
    }

    public leonInfo(): string {
        const info = this.displayInfo()
        return `${info}`
    }
}

type Size = 'BIG' | 'MEDIUM' | 'SMALL'

class Elephant extends Animal {
    constructor(name: string, specie: string, age: number, private size: Size) {
        super(name, specie, age)
    }

    public doSound(): string {
        return 'ELEFANTE TROMPA'
    }

    public elephantInfo(): string {
        const info = this.displayInfo()
        return `${info}
        Size: ${this.size}`
    }
}


const leon = new Leon('Rey', 'Africa', 3)
console.log(leon.displayInfo())
console.log(leon.doSound())

const elephant = new Elephant('Trompitas', 'Africa', 5, 'BIG')
console.log(elephant.elephantInfo())
console.log(elephant.doSound())
