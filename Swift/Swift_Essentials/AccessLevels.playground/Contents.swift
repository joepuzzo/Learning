//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

//-----------Class----------//
public class Player {
    //instance variables default internal!
    var name = "John Doe"
    var score = 0
    
    public func description() -> String {
        return ("Player \(name) has a score of \(score)")
    }
}

