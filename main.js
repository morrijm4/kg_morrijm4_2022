/**
 * Converts a list of integers into their phonetic equivalant
 * 
 * @author: Matthew Morrison
 * @email: james.m.morrison@vanderbilt.edu
 */

const { processIntegers } = require("./src/helpers.js")

const integers = process.argv.slice(2)  // takes arguments from the command line and put it into the variable integers
console.log(processIntegers(integers))  // processes argurments and prints result to the command line