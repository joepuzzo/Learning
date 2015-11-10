#Variables
my_name = "Joe"


#Basic Input 

#Stiring methods

#Loops
for i in 1..5 #Inclusive

for i in 1...5 #Exclusive

#While loop
while i > 0 do 
    print i 
    i -= 1 
end

#Until loop
until counter > 10
  puts counter
  counter += 1 
end

#loop loop ...... ok
i = 20
loop do
  i -= 1
  next if i % 2 != 0 #Skip to next if this is true 
  print "#{i}"
  break if i <= 0
end

10.times { print "Hello World"} #Print something 10 times

#Arrays
numbers = [1,2,3,4,5]

#Iterators
numbers.each do |i|
    puts "#{i}"
end

#Hashes ( Dictionaries/Maps )
pets = Hash.new

pets["TC"] = "dog"

puts pets["TC"]

frequencies = Hash.new(0) #Initialize an empy hash with all zeros

#Methods 

#Splat arguments!!
def what_up(greeting, *bros)
  bros.each { |bro| puts "#{greeting}, #{bro}!" }
end

#Splat arguments!!
def what_up(greeting, *bros)
   bros.each do |bro| 
     puts "#{greeting}, #{bro}!" }
   end
end
 
what_up("What up", "Justin", "Ben", "Kevin Sorbo")

#Sortingi

# Sort your books in descending order, in-place below
books.sort! do |firstBook, secondBook|
     secondBook <=> firstBook
end

my_hash.each_value do |i|
    puts i
end

#Switch Statements
puts "Hello there!"
greeting = gets.chomp

# Add your case statement below!
case greeting
    when "English" then puts "Hello!"
    when "French"  then puts "Bonjour!"
    when "German"  then puts "Guten Tag!"
    when "Finnish" then puts "Haloo!"
else puts "I don't know!"
end


#In order to check if an element has a method
age.respond_to?(:next)#


#Some shortcuts for basic methods
"Yukihiro " << "Matsumoto"
# ==> "Yukihiro Matsumoto"

[1, 2, 3] << 4
# ==> [1, 2, 3, 4]

#Simplicity with string concatination
"I am " + age.to_s + " years old."  == "I am #{age} years old."


#Conditional statements.. simple!
puts "One is less than two!" if 1 < 2 


#Terinary operator
puts 1 < 2 ? "One is less than two!" : "One is not less than two."

#Yielding!!!! 
def block_test
  puts "We're in the method!"
  puts "Yielding to the block..."
  yield
  puts "We're back in the method!"
end

block_test { puts ">>> We're in the block!" }

#Yielding with parameters
def yield_name(name)
  puts "In the method! Let's yield."
  yield("Kim")
  puts "In between the yields!"
  yield(name)
  puts "Block complete! Back in the method."
end

yield_name("Eric") { |n| puts "My name is #{n}." }


#Procs=============================================================
cube = Proc.new { |x| x ** 3 }

[1, 2, 3].collect!(&cube)
# ==> [1, 8, 27]

[4, 5, 6].map!(&cube)
# ==> [64, 125, 216]

#Refer to methods using symbols and usign "&" to dereference that method as a Proc!!
strings = ["1", "2", "3"]
nums = strings.map(&:to_i)
# ==> [1, 2, 3]


#Lambda=============================================================
lambda { |param| block }

#This will return out of the parent method
def batman_ironman_proc
  victor = Proc.new { return "Batman will win!" }
  victor.call
  "Iron Man will win!"
end

puts batman_ironman_proc

#This will return to the parent method and continue
def batman_ironman_lambda
  victor = lambda { return "Batman will win!" }
  victor.call
  "Iron Man will win!"
end

puts batman_ironman_lambda


#Passing Functions=================================================
def bar(&block)
    p 'bar'
    block.call()
end

def foo()
  p 'foo'
end

bar(&method(:foo))
