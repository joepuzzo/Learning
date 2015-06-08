//
//  ViewController.swift
//  FirstDemo
//
//  Created by Joe Puzzo on 5/22/15.
//  Copyright (c) 2015 Joe Puzzo. All rights reserved.
//

import UIKit

//This can handle delegation from text fields
class ViewController: UIViewController, UITextFieldDelegate {

    /*------------------------UIViewController------------------------*/
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func touchesBegan(touches: Set<NSObject>, withEvent event: UIEvent) {
        // Takes the spotlight off of the current first responder
        self.view.endEditing(true)
        // Note: view is a container that holds all the view objects!
    }

    /*----------------------------MyCode-----------------------------*/
    @IBOutlet var textField: UITextField!
    
    @IBOutlet var textLabel: UILabel!
    
    @IBAction func changeLabel(sender: AnyObject) {
        // Change the text fiield
        textLabel.text = "Hello, " + textField.text + "!"
        // Make the keyboard go away
        textField.resignFirstResponder()
    }
    
    /*----------------------UITextFiekdDelegate----------------------*/
    func textFieldShouldReturn(textField: UITextField) -> Bool {
        textField.resignFirstResponder()
        return false
    }

}

