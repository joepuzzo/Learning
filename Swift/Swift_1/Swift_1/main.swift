//
//  main.swift
//  Swift_1
//
//  Created by Joe Puzzo on 6/7/14.
//  Copyright (c) 2014 Joe Puzzo. All rights reserved.
//

import Foundation

println("Hello, World!")



for i in 1..10
{
    println( "This is a test, the iteration is \(i) Cool?")
    
}

func testFunction( myVar: String ) -> Int
{
    println( myVar )
 
    return 20
}

var num = 10

testFunction( "hello the number is \(num)" )

println("+++++++++++++++++++++++++++++++")

let possibleNumber = "123"

if let actualNumber = possibleNumber.toInt()
{
    println("\(possibleNumber) has an integer value of \(actualNumber)")
}
else
{
    println("\(possibleNumber) could not be converted to an integer")
}



if ( true )
{
    
}

//Parameters to functions are constants by default and must be prefixed by var otherwise.. i.e var myString: String 

//You can pass one anysized array using a varidic parameter i.e ... (always should be your last parameter )

//You can declare default values for parameters as follows myString: String = "hello world" 

//you can specify lables parameters as follows: labelName paramName: Type 

//If you want both the param name and lavbel to be the same: #paramName: Type


//In order to pass parameters that you want to be modified i.e passed by reference you do the following
// func swapTwoInts(inout a: Int, inout b: Int)  and call by swapTwoInts( &varName1, &varName2 )

//You can set functions to variables as follows: “var mathFunction: (Int, Int) -> Int = addTwoInts”
//Not that the (Int, Int) -> Int is not necisary for swift is smart




var myArray1 = Int[]()

var myArray2 =  (Int,Int)[]( count: 20, repeatedValue: (0,0) )

var myArray3 =  Array<(Int,Int)>( count: 20, repeatedValue: (0,0) )





