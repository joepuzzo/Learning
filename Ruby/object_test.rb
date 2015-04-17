#Module action
module Action
  #modules can have attributes
  attr_accessor :distance
  #modules have a constructor
  def initialize( dist ) 
      @distance = 4
      puts "Action Constructor"
  end
  #obviously can have methods
  def jump
    @distance = 2
    puts "jumped forward #{@distance} feet!"
  end
end

#Test Module
module TestMod 
    def initialize()
        puts "Test Mod Constructor"
    end
end


class ExtendMe 
    def initialize()
        puts "ExtendMe Constructor"
    end
    def hey
        puts "hey"
    end
end

class Extended < ExtendMe
   def initialize()
       puts "Extended Constructor"
   end
end

#Includes (instance method) 
class Rabbit < ExtendMe

  attr_reader :name

  #Order of include matters for who extends who
  include TestMod  
  include Action

  def initialize(name)
    @name = name
    puts "Created new rabbit #{@name}"
    super(5)
  end

  def test
      print "#{@name} "
      jump
  end

end

#Extends (class method)
class Cricket
  extend Action
  attr_reader :name
  def initialize(name)
    @name = name
  end
end

#Create new rabbit named peter
peter = Rabbit.new("Peter")

#you can call jump on the instance of a rabbit
peter.jump

#you can call test wich calls the method
peter.test

#you can access the distance var as if its part of peter
puts peter.distance

puts peter.class.ancestors

#This will call the jump as if it was a static function
Cricket.jump

#Because that static function gets called ^^ the distance var gets set
puts Cricket.distance

extended = Extended.new()

