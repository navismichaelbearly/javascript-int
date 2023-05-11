class Address {
    constructor(pincode, street) {
        this.pincode = pincode
        this.street = street
    }
}

class User {
    constructor(user) {
        this.user = user
    }
}

class UserBuilder {
    constructor(user) {
        this.user = new User(user);
    }

    setAge(age) {
        this.user.age = age
        return this
    }

    setPhone(phone) {
        this.user.phone = phone
        return this
    }

    setAddress(address) {
        this.user.address = address
        return this
    }

    build() {
        return this.user;
    }
}

const user = new UserBuilder('bob').setAge(43).setPhone('9840855590').setAddress(new Address('600017', 'Bhagavandhan Street')).build();


console.log(user);