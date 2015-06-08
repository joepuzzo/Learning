
import Foundation

let someString = "Hello World"

someString.uppercaseString

let words = someString.componentsSeparatedByString(" ")

let someDate = NSDate()

let someURL = NSURL(string: "http://www.google.com")

someURL
someURL?.host
someURL?.scheme
someURL?.lastPathComponent