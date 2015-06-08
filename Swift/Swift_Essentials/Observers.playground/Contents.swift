//: Playground - Observers

import UIKit


//-----------Classes-----------//
class Player {
    // Property observers
    var name: String = "John Doe" {
        //implicit parameters!
        willSet {
            println("About to change name to \(newValue)")
        }
        didSet {
            println("Have changed name from \(oldValue)")
        }
    }
    var score: Int = 0
}

var newPlayer = Player()
newPlayer.name = "NewName"
