//: Playground - Extentions

import UIKit

extension String {
    func reverseWords() -> String {
        let wordsArray = self.componentsSeparatedByString(" ")
        let reversedArray = wordsArray.reverse()
        let newString = ""
        for eachWord in reversedArray {
            newString += eachWord + " "
        }
        return newString
    }
}


var str = "Hello, playground"

var test = str.reverseWords()

println( test )





