//: Playground - noun: a place where people can play

import UIKit

var myVar = -1

//------------------------If Statements-----------------------//
//Curly braces are required!!
if myVar < 0 {
    println("It's negative")
}
else if myVar == 0 {
    println("It's Zero")
}
else {
    println("It's positive")
}


//----------------------Switch Statements--------------------//
//No need for break statement
//Case statements must be exhaustive i.e needs a default
//No implicit fall through!!!
let windSpeed = 5
switch windSpeed {
case 0:
    println("Zero")
case 1:
    println("One")
case 2:
    println("Two")
default:
    println("Other!")
}


//Ranges of values!
switch windSpeed {
case 0...3:
    println("Zero-Three")
case 4...6:
    println("Four-Six")
case 7..9:
    println("Seven-Nine")
default:
    println("Other!")
}

