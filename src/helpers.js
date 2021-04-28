/**
 * Converts an array of integers which are strings into a string of their respective phonetic equivalant.
 * 
 * @param {string[]} integers array of integers that are strings
 * @return {string} a string of the integers phonetic equivalant.
 */
function processIntegers(integers) {

    let string = "" // string variable which holds output
    
    // iterates through the integers
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
    
    return string.substr(0, string.length-1)  // returns converted string while triming the last comma
}

/**
 * Converts a positive integer to a its phonetic equivalant. If not an integer then returns "NaN".
 * 
 * @param {number} integer the integer that will be converted to its phonetic equivalant.
 * @return {string} The phonetic equivalant of a integer
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

module.exports = { processIntegers }