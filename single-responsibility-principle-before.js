class CalorieTracker {
    constructor(maxCalories) {
        this.maxCalories = maxCalories
        this.currentCalories = 0
    }

    trackCalories(calorieCount) {
        this.currentCalories += calorieCount
        if(this.currentCalories > this.maxCalories) {
            this.logCalorieSurplus()
        }
    }

    logCalorieSurplus() {
        console.log(`Max calories exceeded`)
    }
}

const caloreTracker = new CalorieTracker(2000)

caloreTracker.trackCalories(500)
caloreTracker.trackCalories(1000)
caloreTracker.trackCalories(700)