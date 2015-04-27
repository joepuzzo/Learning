

array = "[1,2,3,4,5,6]"
array = [1,2,3,4,5,6]

puts "array[0..6]"
print array[0..6].to_s << "\n"
puts "array[0..7]"
print array[0..7].to_s << "\n"
puts "array[0..3]"
print array[0..3].to_s << "\n"
puts "array[6..7]"  
test1 = array[6..8]
puts ( test1.nil? or test1.empty? ) ? "Is nil" : test1.to_s 
#puts array != nil ? "One is less than two!" : 
