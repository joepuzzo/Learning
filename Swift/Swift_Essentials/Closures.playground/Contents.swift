//: Playground - Closures

import UIKit

//As we know
func myFunction() {
    println("This is a simple function.")
}

//Look a named closure
let myClosure = {
    println("This is a simple function.")
}


//Function that accepts closure as param 
func performFiveTimes( myClosureParameter: ()->() ) {
    //Execute function five times
    for i in 1...5 {
        myClosureParameter()
    }
}

performFiveTimes(myClosure)

performFiveTimes({
    println("This is a simple function.")
})

performFiveTimes({ () -> () in
    println("This is a simple function.")
})


//Example sorted!
// sorted( array_to_sort, closure_to_compare )
let unsortedArray = [ 98, 23, 643, 3, 678, 2, 567, 1, 234, 566, 4 ]


let sortedArray = sorted( unsortedArray, { (first :Int, second: Int) -> Bool in
    return first < second
})


