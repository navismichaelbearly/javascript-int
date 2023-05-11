const customRange = {
    [Symbol.iterator]: function(start =1, end =50, interval=1) {
        let counter = start;
        const iterator = {
            next: function() {
                const result = { value: counter, done: false };
                if(counter <= end) {
                    counter+= interval;
                    return result
                }
                return { done: true}
            }
        }
        return iterator;
    }
}

console.log([...customRange])

for(const num of customRange) {
    console.log(num);
}

const iterator = customRange[Symbol.iterator](10,20,2);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());