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


const integers = process.argv.slice(2)

let string = ""
integers.forEach((val) => {
    val.split('').forEach((letter) => {
        string += toPhoneic(parseInt(letter))
    })
    string += ","
})

console.log(string.substr(0, string.length-1))