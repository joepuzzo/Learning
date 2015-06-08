//: Playground - Optionals

import UIKit

//Note: swift will not let you use vars if they have not been initialized
var temperature : Int

//So we do thos 
var temper = 0

//Use it like this
println("The temperature is \(temp) degrees") //This would err if we used temperature

//But what if we don't know if the value is there or not .. tmep might be nil
var temp : Int?
temp = 65

//Look no Error!!
if temp != nil {
    println("The temperature is \(temp) degrees")
}

//To get value from optional
if temp != nil {
    // forced unwrapping.. only if we are sure!! 
    // if its nil you will get a runtime error!!
    println("The temperature is \(temp!) degrees")
}


var states = [ "AZ": "Arazona", "CA": "California", "DE": "Delaware" ]

var result = states["AZ"]

if result != nil {
    //Yes so unwrap optional
    println("The state name is \(result!)")
}

//Or.. this is cool!!
if let result = states["NV"] {
    //yes - value found
    println("The state name is \(result)")
} else {
    println("No matching key found")
}



