//: Playground - Structures

// Structs are pass by value
// Classes are pass by reference

//-----------Class----------//
/*class Player {
    //instance variables default internal!
    var name = "John Doe"
    var score = 0
    
    func description() -> String {
        return ("Player \(name) has a score of \(score)")
    }
}*/

//-----------Struct----------//
struct Player {
    //instance variables default internal!
    var name = "John Doe"
    var score = 0
    
    func description() -> String {
        return ("Player \(name) has a score of \(score)")
    }
}

var playerClass  = Player()
var playerStruct = Player(name: Joe, score: 100)

