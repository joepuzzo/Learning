//: Playground - Protocols

import UIKit

var str = "Hello, playground"

protocol Cleaner {
    // method signatures
    func cleanFloors()
    func vacuum()
    func emptyTrash() -> Bool
    
    // properties
    var brockenBulbs : Bool { get set }
}


//class SimpleCleaner : SuperClass, Protocol1, Protocol2 {

class SimpleCleaner : Cleaner {
    
    func cleanFloors() {
        println("Mop")
    }
    func vacuum() {
        println("Suck")
    }
    func emptyTrash() -> Bool {
        println("Eww")
        return false
    }
    
    var brockenBulb : Bool {
        get {
            return true
        }
        set {
            self.brockenBulb = newValue
        }
    }
}