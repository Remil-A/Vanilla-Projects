
const todos = [
    {morning: "Buy food"},
    {afternoon: "Cook food"},
    {evening: "Eat food"},
]

let lengthOfArr = todos.length
// console.log(lengthOfArr)

let valueOfArr = todos[1]
// console.log(valueOfArr);

// ADD
todos.push({night: "Sleep"})
todos.unshift({noon: "code"})

// REMOVE
todos.pop()
todos.shift()

// console.log(todos);


let items = [
    {name: "Laptop", price: 90},
    {name: "Remote", price: 60},
    {name: "Television", price: 10},
    {name: "Chair", price: 190},
]

// MAP 

let priceOnly = items.map(item => {
   return  item.price
})
// console.log(priceOnly);

let nameOnly = items.map(function(item) {
    return item.name
})
// console.log(nameOnly)

// FILTER
let filteredItems = items.filter((item) => item.price < 100)
// console.log(filteredItems);

// find
let findItem = items.find(item => item.price === 90)
console.log(findItem);


// STARTSWITH
let myName = "Rino"
if(myName.startsWith("Rin")) {
    return console.log("The name is Rino");
}else {
    console.log("It's someone else");
}