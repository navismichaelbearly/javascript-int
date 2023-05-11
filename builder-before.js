class Address {
    constructor(pincode, street) {
        this.pincode = pincode
        this.street = street
    }
}

class User {
    constructor(user, age, phone, address) {
        this.user = user
        this.age = age
        this.phone = phone
        this.address = address
    }
}

let user = new User('bearly', undefined, undefined, new Address('600017', 'Bhagavandan Street'))

console.log(user);