class Address {
    constructor(pincode, street) {
        this.pincode = pincode
        this.street = street
    }
}

class User {
    constructor(user, {age, phone = '9840855590', address } = {} ) {
        this.user = user 
        this.age = age
        this.phone = phone
        this.address = address
    }
}

let user = new User('Navis', {age: 43, address: new Address('600017', 'Bhagavandan Street')}) ;

console.log(user);