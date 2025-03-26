
//Exercise //
//EXERCISE 1: Guess the random number 
/*
Create a function guessNumberGame that generates a random number between 1 and 10. 

The function should repeatedly prompt the user to guess the number until the correct number is guessed. 

Use a while loop to keep asking the user for input until they guess correctly.  

Provide feedback if the guess is too high or too low. 

 */

const prompt = require("prompt-sync")();


function guessNumber(){
    
    let randomNumber = Math.floor(Math.random()*10) +1;
    let guess = 0;    
    console.log(randomNumber);
    while(guess != randomNumber)
    {
        guess = parseInt(prompt("Enter your guess: "));
        if(guess > randomNumber)
        {
            
            console.log("lower");
            
        }
        else if(guess < randomNumber)
            {
                
                console.log("higher");
            }
    }
    if(guess == randomNumber)
        {
            
            console.log("you won!!!!");
        }

}




/*
// EXERCISE 2: Create an array of random numbers 

Create a function generateRandomArray that accepts one argument: length (the length of the array). 

Inside the function, use a for loop to generate an array of random numbers between 1 and 100. 

Return the array from the function. 
*/

function generateRandomArray (length)
{
    let array = [];

    for(let i=0; i < length; i++)
    {
        let randomNumber = Math.floor(Math.random()*100) +1;
        array.push(randomNumber)

    }
    return array;



}

/*
// EXERCISE 3: Calculate the sum of even numbers in the array 

Create a function sumEvenNumbers that accepts an array as an argument. 

Use a for loop to iterate through the array and calculate the sum of the even numbers. 

Return the sum of the even numbers. 

 */

function sumEvenNumbers(Array)
{
    let sum = 0;

    for(let i=0; i<= Array.length; i++)
    {
        if(Array[i] % 2===0)
        {
            sum += Array[i];
        }



    }
    return sum;
}



/* Anropa functions now */
console.log("Guess game");
guessNumber();

console.log("random array number 1-100");
console.log(generateRandomArray(6));
console.log("sum of even numbers of given array");
console.log(sumEvenNumbers([1,2,3,4,5]));