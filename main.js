/**
 * Converts a list of integers into their phonetic equivilant
 * 
 * @author: Matthew Morrison
 * @email: james.m.morrison@vanderbilt.edu
 */

const integers = process.argv.slice(2)  // takes arguments from the command line and put it into the variable integers

let string = "" // string variable which holds output

// iterates through the arguments
integers.forEach((val) => {

    // iterates through and processes each digit from the argument
    val.split('').forEach((letter) => {
        if (letter === "-") {
            string += "Negative"
        } else {
            string += toPhoneic(parseInt(letter))
        }
    })
    string += ","
})

console.log(string.substr(0, string.length-1))  // prints to the console while triming the last comma



/**
 * Converts a positive integer to a its phonetic equivilant. If not an integer then returns "NaN".
 * 
 * @param {number} integer the integer that will be converted to its phonetic equivilant.
 * @return {string} The phonetic equivilant of integer
 */
function toPhoneic(integer) {
    switch(integer) {
        case 0:
            return "Zero"
        case 1:
            return "One"
        case 2:
            return "Two"
        case 3:
            return "Three"
        case 4:
            return "Four"
        case 5:
            return "Five"
        case 6:
            return "Six"
        case 7:
            return "Seven"
        case 8:
            return "Eight"
        case 9:
            return "Nine"
        default:
            return "NaN"
    }
}