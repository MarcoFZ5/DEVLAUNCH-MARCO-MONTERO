// Clases a crear: Employee {_salary} con getter y setter, ademas de un metodo giveRaise para aumentar el salario


class Employee {
    private name: string
    private age: number
    private job: string
    private salary: number

    constructor(name: string, age: number, job: string, salary: number) {
        this.name = name
        this.age = age
        this.job = job
        this.salary = salary
    }

    public getSalary() {
        return this.salary
    }

    public setSalary(salary: number) {
        if (salary >= 0) {
            this.salary = salary
        } else {
            console.log("No se permiten numeros negativos")
        }
    }

    public giveRaise(incrementOfSalary: number): number {
        if (incrementOfSalary >= 0) {
            this.salary += incrementOfSalary
        } else {
            console.log("Eso NO es un aumento")
        }
        return this.salary
    }
}

const employee1 = new Employee('Marco', 19, 'Desarrollador', 1000)

console.log(employee1)

employee1.setSalary(10)

console.log(employee1.getSalary())

employee1.giveRaise(5)

console.log(employee1.getSalary())
