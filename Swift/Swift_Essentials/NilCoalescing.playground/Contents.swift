//: Playground - Nil Coalescing operator

var personalSite : String?
let defaultSite = "http://www.lynda.com"

var website : String

if personalSite != nil {
    website = personalSite!
} else {
    website = defaultSite
}

//OR OR 

var website = personalSite ?? defaultSite

