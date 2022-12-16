///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1
console.log(`---------------`)
/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

//Creating totalAcres variable
let totalAcres = 0

//Making sure the loop runs until every value is added
for(let i = 0; i < fujiAcres.length; i++){
    //Adding how many acres were picked that day from each type of apple to whatever is in totalAcres
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i]
    
}
console.log(totalAcres)




// PROBLEM 2
console.log(`---------------`)
/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

//Creating averageDailyAcres variable
let averageDailyAcres;

//Dividing the total number of acres picked by how many days they spent picking
averageDailyAcres = totalAcres/7

console.log(averageDailyAcres)


// PROBLEM 3
console.log(`---------------`)
/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

//Setting the while to run until acresLeft is 0
while(acresLeft > 0){
    //Subtracting acresLeft by the averageDailyAcres
    acresLeft -= averageDailyAcres
    //Adding 1 day for each completed loop
    days++
}

console.log(days)



// PROBLEM 4
console.log(`---------------`)
/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

//First setting the Ton arrays to a copy of the acres array
let fujiTons = fujiAcres.slice()
let galaTons = galaAcres.slice()
let pinkTons = pinkAcres.slice()

for(let i = 0; i < galaAcres.length; i++){
    //Looping through each value in the Ton arrays and multiplying each one by 6.5
    fujiTons[i] = fujiTons[i] * 6.5
    galaTons[i] = galaTons[i] * 6.5
    pinkTons[i] = pinkTons[i] * 6.5
}
console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)




// PROBLEM 5
console.log(`---------------`)
/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0


for(let i = 0; i < galaTons.length; i++){
    //Looping through each index of the Tons array and multiplying by 2000 to convert the tons into pounds
    //Then adding each index multiplied by 2000 to their pound variables
    fujiPounds += (fujiTons[i] * 2000)
    galaPounds += (galaTons[i] * 2000)
    pinkPounds += (pinkTons[i] * 2000)
}
console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)


// PROBLEM 6
console.log(`---------------`)
/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/



let fujiProfit = 0
let galaProfit = 0
let pinkProfit = 0

//Multiplying the pounds by the price to get the profit and then storing it in the profit variables
fujiProfit = fujiPounds * fujiPrice
galaProfit = galaPounds * galaPrice
pinkProfit = pinkPounds * pinkPrice

console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)







// PROBLEM 7
console.log(`---------------`)
/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

let totalProfit = 0

//Setting the total profit equal to each variety of apples profits all added together
totalProfit = fujiProfit + galaProfit + pinkProfit

console.log(totalProfit)


