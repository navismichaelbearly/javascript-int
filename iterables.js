const range = {
    [Symbol.iterator]: function() {
        let counter = 1;
        const iterator = {
            next: function() {
                const result = { value: counter, done: false }
                if( counter <= 50 ) {
                    counter ++
                    return result;
                }
                return { done: true}
            }
        }
        return iterator
    }
}

for(const num of range) {
    console.log(num);
}

console.log([...range])