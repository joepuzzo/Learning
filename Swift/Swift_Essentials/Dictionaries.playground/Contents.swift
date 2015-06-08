//: Playground - Dictionaries

import UIKit

//Type innfered
var states = [ "AZ": "Arazona", "CA": "California", "DE": "Delaware" ]

//Decalare a dictionary of INt keys and string values 
var products : [Int:String]

//You can also create them this way
var namesOfIntegers = Dictionary<Int, String>()

//Accessing dictionary values Ohh looks like it returns an optional like SML !! .. or mayb not
println(states["AZ"])

//Uddating or inserting
states["FL"] = "Florida"

//Returns nil i guess
states["PP"]

//Attemts to retrieve it first so it rerturns nil
states.updateValue("Nevada", forKey: "NV")

states.updateValue("Something else", forKey: "DE")

states

// to delete key/value pair
// this will actually delete it!! not just set value to nil
states["DE"] = nil
states.removeValueForKey("CA")

//Still get amount
states.count

//Iterate over loop
for (key, value) in states {
    println("\(key) is short for \(value)")
}


