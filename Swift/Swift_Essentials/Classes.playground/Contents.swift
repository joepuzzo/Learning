//: Playground - Defining Classes

//BTW does not inherite from an Object class!!

func getDailyBonus() -> Int {
    println("Performing complicated task...")
    return random()
}


//-----------Classes-----------//
class Player {
    // instance variables.. STORED properties in swift!
    var name: String
    var score: Int
    
    // COMPUTED property
    var nameAndScore: String {
        get {
            // return computed property
            return ("\(name) and \(score)")
        }
        /*set {
            // split the "newValue" into two pieces
            newValue.dosomething...
        }*/
    }
    
    //Class variables
    class var game : String {
        return "Chess"
    }
    
    //Lazy Properties
    //var bonus = getDailyBonus() //bad
    lazy var bonus = getDailyBonus()

    
    //Constructor.. Initializers
    init() {
        name = "Joe"
        score = 0
    }
    
    init( name: String ) {
        self.name = name
        score = 0
    }
    
    // methods 
    func description() -> String {
        return ("Player \(name) has a score of \(score)")
    }
    
    // cannot override
    final func dontTouch() {
        println("Cant override!")
    }
    
    // class level method
    class func example() {
        println("This is an example")
    }
    
    //Deconstructor!! 
    deinit {
        // any cleanup code!
    }
}

// instantiate a new plater object
var jake = Player()
var bob  = Player(name: "BOB")

// use dot syntax
jake.name = "Jake"
jake.score = 100
println(jake.description())
println(Player.game)
println(jake.bonus)


//-----------Class inheritance-----------//
class PremierPlayer : Player {
    
    //Additional properties
    var memberLevel : String
    
    //Need another init .. DA!
    //But ahha .. need an override keyword!
    override init() {
        memberLevel = "Gold"
        super.init()
    }
    
    override func description() -> String {
        let original = super.description()
        return ("\(original) and is a \(memberLevel) member")
    }
    
    //additiona methods
    func calculateBonus() {
        self.score += 1000
        println("New score is \(self.score)")
    }
}
