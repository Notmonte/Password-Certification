// // let string = "Somewhere Waldo is hiding in this text";
// // let regex = /Waldo/;
// // let result = regex.test(string);

// // console.log(result)

// // let petString = "James has a pet a cat";
// // let petRegex = /dog|cat|bird|fish/;
// // let petResult = petRegex.test(string);

// // console.log(petResult)

// // let myString = "freeCodeCamp";
// // let fccRegex = /freecodecamp/i; // change this line
// // let myResult = fccRegex.test(myString)

// // console.log(myResult)

// // let extractStr = "Extract the word 'coding' from this string";
// // let codingRegex = /coding/;
// // let codingResult = extractStr.match(codingRegex);

// // console.log(codingResult)


// // let testStr = "Repeat, Repeat, Repeat";
// // let ourRegex = /Repeat/g;
// // testStr.match(ourRegex)


// // let twinkleStar = "Twinkle, Twinkle, Twinkle"
// // let twinkleRegex = /twinkle/ig;
// // let twinkleResult = twinkleStar;

// // console.log(twinkleResult)


// // let humStr = "I'll hum a song";
// // let hugStr = "Bear hug";
// // let huRegex = /hu./;
// // humStr.match(huRegex); // Returns ["hum"]
// // humStr.match(huRegex); // Returns ["hug"]

// // let exampleStr = "Let's have fun with regular expressions";
// // let unRegex = /.un/;
// // let exResult = unRegex.test(exampleStr);

// // console.log(exResult)


// // let byRegex = /b[aiu]g/;

// // let quoteSample = "Beware of bugs in the above code; I have only proved it correct";
// // let voewlRegex = /[aeiou]/ig;
// // let vowelResult = quoteSample.match(voewlRegex);

// // console.log(vowelResult)


// // let sampleQuote = "The quick brown fox jumps over the lazy dog.";
// // let alphabetRegex = /[a-z]/ig;
// // let alphabetResult = sampleQuote.match(alphabetRegex);

// // console.log(alphabetResult)


// // let exSample = "Blueberry 3.141592653 are delicious";
// // let exRegex = /[2-6h-s]/ig;
// // let exampleResult = string.match(exRegex);

// // console.log(exampleResult)

// // let exQuote = "3 blind mice"
// // let qxRegex = /^[0-9aeiou]/ig;
// // let qxResult = exQuote.match(qxRegex);

// // console.log(qxResult)

// // let difficultSpelling = "Mississippi";
// // let myRegex = /s+/ig;
// // let theResult = difficultSpelling.match(myRegex);

// // console.log(theResult);
// // console.clear()



// /**
//  * Regex
//  * 
//  * [a-z] => matches lowercase letters
//  * [A-Z] => matches uppercase letters
//  * [^A-Z] a non-uppercase character
//  * [^a-z] => a non-lowercase character
//  * [0-9] => matches any digits
//  * [^0-9] => a nonnumerical character
//  * \d => equivalent to [0-9] 
//  * \D => equivalent to [^0-9]
//  * . => matches any single character except line terminators
//  * [A-Za-z] => matches any letter, lowercase or uppercase
//  * \w => matches any alphanumeric character [a-zA-Z0-9]
//  * \W => special characters 
//  * \s => white space
//  * \S => any character other than white space
//  * 
//  * 
//  * ^ => matches the begginning of an input
//  * $ => matches the end of an input
//  */


// // Slash mean regular expression
// const regex = /^B/;


// // console.log(regex);

// let myString = 'basq u!at'

// // .match()

// myString.match(regex)

// if (myString.match(regex)) {
//     console.log('match');
// } else {
//     console.log('no match');
// }


//Promise => object represents the eventual completion (or failure) of an asynchronous operation and its resulting value;

/**
 *  Promise has three states
 * pending: initial state
 * fulfilled: the operation was completed successfully
 * rejected: the operation failed
 * 
 * 
 */
const loginForm = document.getElementById('loginForm')



const verifyPassword =()=> {
    

    const userInput = document.getElementById('username')
    const username = userInput.value

    const passwordInput = document.getElementById('password')
    const password = passwordInput.value

    const lowerTest = /[a-z]/
    const upperTest = /[A-Z]/
    const numTest = /\d/
    const specialTest = /\W/


    const display = document.getElementById('display')
    const reqList = document.createElement('ul')
    const reqItem = document.createElement('li')


    if (password.length < 8) {
        const reqItem = document.createElement('li')
        reqItem.innerText = 'Password must be at least 8 characters'
        reqList.appendChild(reqItem)
    }

    if (!password.match(lowerTest)) {
        const reqItem = document.createElement('li')
        reqItem.innerText = 'Must contain at least one lowercase letter'
        reqList.appendChild(reqItem)
    }

    if (!password.match(upperTest)) {
        const reqItem = document.createElement('li')
        reqItem.innerText = 'Must contain at least one uppercase letter'
        reqList.appendChild(reqItem)
    }

    if (!password.match(numTest)) {
        const reqItem = document.createElement('li')
        reqItem.innerText = 'Must contain at least one digit (0-9)'
        reqList.appendChild(reqItem)
    }

    if (!password.match(specialTest)) {
        const reqItem = document.createElement('li')
        reqItem.innerText = 'Must contain at least one special character'
        reqList.appendChild(reqItem)
    }

    console.log(reqList);

    display.appendChild(reqList)


    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*\W).{8,}$/gm

    username.length == 0 ? alert('Please enter a username') : null

    if (password.match(regex)) {
        display.innerText = 'Account created'
    } else {
        display.appendChild(reqList)
    }
}


const matchPasswords =()=> {
    const passwordInput = document.getElementById('password')
    const password = passwordInput.value

    const confirmPasswordInput = document.getElementById('confirmPassword')
    const confirmPassword = confirmPasswordInput.value

    const matchDisplay = document.getElementById('matchDisplay')

    if(password != confirmPassword) {
        matchDisplay.innerText = 'Passwords do not match'
    } else {
        verifyPassword()
    }
}


loginForm.addEventListener('submit', (e)=> {
    e.preventDefault()

    verifyPassword()
})



const userInput = document.getElementById('username')
const username = userInput.ariaValueMax