//: Playground - Enumerations

import UIKit

//New structure so uppercase .. simply style!
enum SeatPreference {
    case Window
    case Middle
    case Aisle
    case NoPreference
    // or: case Window, Middle, Aisle, NoPreference
}

var jenPrefers : SeatPreference
// this
jenPrefers = SeatPreference.Aisle
// or this
jenPrefers = .Window
// or this
var royPrefers = SeatPreference.Window

switch royPrefers {
case .Window:
    println("Window Seat!")
case .Aisle:
    println("Aisle Seat!")
case .Middle:
    println("Middle Seat!")
default:
    println("No preference")
}

//Yes you can have properties and methods like in java

