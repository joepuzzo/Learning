# A ruby Module.. really cool ( Similar to static utilities class in java )
module BarModule
  def hello_world
    puts "Hello World"
  end
end

#A simple class
class BaseClass
  def class_method
    puts "In class method"
  end
end

#Class that extends the base class
class Foo < BaseClass
  include BarModule
end

#The two below sections are equivilant
f = Foo.new
f.class_method
f.hello_world

f = Foo.send(:new)
f.send(:class_method)
f.send(:hello_world)

#Now Lets get fancy
String.send(:include, BarModule)
s = "Arbitrary String"
s.hello_world

#Yep I just added a new method to Ruby's base string class





