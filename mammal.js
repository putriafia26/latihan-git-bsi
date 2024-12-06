import Animal from "./Animal.js"
class Mammal extends Animal {
    constructor(name, canReproduce, food,energy, age) {
        super(name, canReproduce, food,energy, age) // constructur dari parent
    }

    //polymorphism
    isAdult() {
        return this.getAge > 3
    }
}
export default Mammal