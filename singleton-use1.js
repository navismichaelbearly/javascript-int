import logger from "./singleton-fancy-logger.js";

export default function logFirstImplementation() {
    logger.printLogCount()
    logger.log('First file')
    logger.printLogCount()
}