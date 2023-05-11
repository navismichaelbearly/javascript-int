const array = [1,2,3,4,5];
const [first, second, ...third] = array;

console.log(third)


//for objects

const object = {
    name: "Javascript",
    channel: "deecode",
    age: 40,
    type: "language"
}

const {name, channel, ...remainingProperties } = object;

console.log(remainingProperties)

