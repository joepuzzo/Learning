#Before structs!---------------------------
class Customer 
    attr_accessor :name
    attr_accessor :address

    def initialize( name: "noname", addr: "nowhere" ) 
        @name = name 
        @address = addr
    end
end

cust1 = Customer.new( name: "joe", addr: "111 Lakewood dr" ) 

puts cust1.name
puts cust1.address

#After structs!-------------------------
class StructCustomer < Struct.new( :name, :address ) 
end

cust2 = StructCustomer.new( "bob", "123 somwhere in the world dr" )

puts "-------------Basic Struct------------"
puts cust2.name
puts cust2.address 
puts cust2[:name]
puts cust2["address"]

puts "-----------------End-----------------"

#With defaults!----------------------
class DefaultCustomer < Struct.new( :name, :address ) 
    def initialize( args={} ) 
        super( (args[:name] || "noname" ), 
               (args[:address] || "nowhere") )
    end
end

cust3 = DefaultCustomer.new()

puts cust3.name
puts cust3.address 
puts cust3[:name]
puts cust3["address"]


puts "-----------------Test Defaults-----------------"
cust4 = DefaultCustomer.new( name: "Joe", address: "111 Lakewood drive")

puts cust4.name
puts cust4.address
puts cust4[:name]
puts cust4["address"]









