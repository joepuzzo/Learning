//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

//Typical loop
for var i = 0; i < 100; i++ {
}


//Range and itteration
var myCollection1 = 1...100 //Closed range i.e 1 to 100 inclusive
var myCollection2 = 1..<100 // 1 to 99

for item in myCollection1 {
    println("Item is: \(item)")
}

//Iterate over chars in string! 
for char in str {
    println("\(char)")
}

//While loop
var condition = 0
while condition < 100 {
    println("Hello World!")
    condition++
}