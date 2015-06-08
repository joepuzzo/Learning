//: Playground - noun: a place where people can play

import UIKit

//---------------------Format---------------------//
func myFunction() {
    println("This is a simple function!!")
}

myFunction()


//-------------------Parameters------------------//
//By default they are constants!!
//Need var keyword in order to modify it!!
func myFunction2( name: String, var age: Int ) {
    age = age + 1
    println("Hello my name is \(name) and I will be \(age) in a year")
}

myFunction2( "Joe", 20 )


func someFunction(parameterName: Int) {
    // function body goes here, and can use parameterName
    // to refer to the argument value for that parameter
}

/*
However, these parameter names are only used within the body of the function itself,
and cannot be used when calling the function. These kinds of parameter names are known 
as local parameter names, because they are only available for use within the function’s 
body.”
*/

func someFunction2(externalParameterName localParameterName: Int) {
    // function body goes here, and can use localParameterName
    // to refer to the argument value for that parameter
}

//If you want the external and internal names to be the same!!
func containsCharacter(#string: String, #characterToFind: Character) -> Bool {
    for character in string {
        if character == characterToFind {
            return true
        }
    }
    return false
}


//Default params!!
func myFunction3( name: String = "John Doe", var age: Int ) {
    age = age + 1
    println("Hello my name is \(name) and I will be \(age) in a year")
}

//When you call it you must use name:
myFunction3(name: "Joe", 20)

//You can opt out of this behavior with an _ instead of a explicit name



//--------------------Return-------------------//
func myFunction4( ) -> String {
    return "Hello"
}
