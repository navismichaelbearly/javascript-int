class SingletonFancyLogger {
    constructor() {
        if(SingletonFancyLogger.instance == null ) {
            this.logs = []
            SingletonFancyLogger.instance = this
        }
        return SingletonFancyLogger.instance
    }

    log(message) {
        this.logs.push(message)
        console.log(`Fancy: ${message}`)
    }

    printLogCount() {
        console.log(`${this.logs.length} Logs`)
    }
}

const logger = new SingletonFancyLogger()
Object.freeze(logger)
export default logger
