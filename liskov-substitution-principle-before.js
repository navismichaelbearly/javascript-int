/*
The Liskov Substitution Principle (LSP) is a principle in object-oriented programming 
that states that objects of a superclass should be replaceable with objects of its 
subclasses without affecting the correctness of the program. In other words, 
a subclass should be able to be used wherever its superclass is expected.
*/

class Bird {
    fly() {
        console.log('I can fly')
    }
}

class Duck extends Bird {
    quack() {
        console.log(`I can quack`)
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error(`Cannot fly`)
    }

    swim() {
        console.log(`I can swim`)
    }
}

function makeBirdFly(bird) {
    bird.fly()
}

const duck = new Duck()
const penguin = new Penguin()

makeBirdFly(duck)
makeBirdFly(penguin)
