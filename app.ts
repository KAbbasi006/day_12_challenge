
//Q34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let pizzas: string[] = ["BBQ chicken pizza", "Mexican pizza", "Pepperoni"];
pizzas.forEach(pizzas => {
    console.log(`${pizzas}`)
})

pizzas.forEach(pizzas => {
    console.log(`I like ${pizzas}`)
})

console.log("I have tried different flavours of pizza like BBQ chicken pizza, Mexican Pizza, Pepperoni, Pizza Margherita, California-Style pizza, Vegan pizza etc and I must say that all of them are appetizing")



//Q35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals: string[] = ["Cat", "Dog", "Goat"];
animals.forEach(animals => {
    console.log(`${animals}`)
})
animals.forEach(animals => {
    console.log(`A ${animals} would make a great pet.`)
})
console.log("All of the above mentioned animals have four legs and they are pet animals.")




//Q36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function

function make_shirt(size: string, message: string) {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`)
}
make_shirt("medium", "Code is life");
