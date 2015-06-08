//: Playground - tuple

import UIKit

var str = "Hello, playground"

var num = 1000

var myTuple = (str, num)

var otherTuple = ( str, num, 12345, "sometext")

//Functions with multiple returns using tuples! haha
func getCurrentSongDuration() -> ( name: String, length: Int) {
    return ("Moonlight in Vermont", 210)
}

//Dealing with tuples
var result = getCurrentSongDuration()

//decomposition - option1 
result.0
result.1
//result.2 //Errors out

//decomposition - option2
result.name
result.length
//result.hello //Errors out

// decomposition - option 3
let ( name, length ) = getCurrentSongDuration()









