//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"


let myButton = UIButton()
let mySlider = UISlider()
let myTextField = UITextField()
let myDatePicker = UIDatePicker()

let controls = [ myButton, mySlider, myTextField, myDatePicker ]

for item in controls {
    
    // option1: check type with "is" 
    if item is UIDatePicker {
        println("UI Date Picker!!")
        //need to cast to get access to specifics
        let picker = item as! UIDatePicker
        picker.datePickerMode = UIDatePickerMode.CountDownTimer
    }
    
    // option2: try to downcast
    let picker = item as? UIDatePicker
    //then check if it worked and unwrap optional
    if picker != nil {
        
    }
    
    // option3: compact
    if let picker = item as? UIDatePicker {
        
    }
}

