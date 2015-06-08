//: Playground - noun: a place where people can play

import UIKit

//-----------------------Arrays-----------------------
//Type Safe!
//Zero based.. DA!
//var means array is mutable 
//tel means array is immutable

let daysInMonth = [ 31,28,32,30,30,31,31,30,31,30,31,30 ]

var colorOptions = [ "Red", "Green", "Blue" ]

var flavors : [String]
flavors = [ "Vanilla", "Strawberry", "Chocolate"]


// adding to end of array
flavors[0] = "Peach"
flavors.append("Coco")
flavors += ["Mint"]

// insert at specific position
flavors.insert("Coconut", atIndex: 3 )
flavors

//removing items
flavors.removeLast()
flavors.removeAtIndex(2)

// .cont for number of items
println("The array has \(daysInMonth.count) items")

//Check if empty
if daysInMonth.isEmpty {
    println("Array is empty")
}

//Iterate over array
for  month in daysInMonth {
    println(month)
}
