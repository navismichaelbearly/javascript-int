import logger from "./singleton-fancy-logger.js";

export default function logSecondImplementation() {
    logger.printLogCount()
    logger.log('Second File')
    logger.printLogCount()
}