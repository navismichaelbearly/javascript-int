function throttle(fn, time) {
    let throttled;
    return function() {
        if(!throttled) {
            fn.apply(this, arguments);
            throttled = true;
            setTimeout(()=> {
                throttled = false;
            }, time)
        }
    }
}

const logger = args => {
    console.log('Log data', args);
}

const throttledLogger = throttle(logger, 2000);

throttledLogger(1);
throttledLogger(2);
throttledLogger(3);
throttledLogger(4);
throttledLogger(5);
throttledLogger(6);