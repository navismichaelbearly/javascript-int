class Store {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor
    }

    purchaseBike(quantity) {
        this.paymentProcessor.pay(200 * quantity)
    }

    purchaseHelmet(quantity) {
        this.paymentProcessor.pay(15 * quantity)
    }
}

class StripePaymentProcessor {
    constructor(user) {
        this.user = user
        this.stripe = new Stripe(user)
    }

    pay(amountInCents) {
        this.stripe.makePayment(amountInCents * 100)
    }
}

class PaypalPaymentProcessor {
    constructor(user) {
        this.user = user
        this.paypal = new Paypal()
    }

    pay(amountInDollars) {
        this.paypal.makePayment(this.user, amountInDollars)
    }
}

class Stripe {
    constructor(user) {
        this.user = user
    }

    makePayment(amountInCents) {
        console.log(`${this.user} made payment of $${amountInCents / 100} with Stripe`)
    }
}

class Paypal {
    makePayment(user, amountInDollars) {
        console.log(`${user} made payment of $${amountInDollars} with Paypal`)
    }
}

const store = new Store(new StripePaymentProcessor('John'))
store.purchaseBike(2)
store.purchaseHelmet(2)

const pstore = new Store(new PaypalPaymentProcessor('John'))
pstore.purchaseBike(2)
pstore.purchaseHelmet(2)