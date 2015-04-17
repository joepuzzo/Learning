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

puts cust2.name
puts cust2.address 
puts cust2[:name]
puts cust2["address"]

#With defaults!----------------------
class DefaultCustomer < Struct.new( :name, :address ) 
    def initialize( args={} ) 
        super( (args[:name] || "noname" ), 
               (args[:address] || "nowhere") )
    end
end

cust3 = DefaultCustomer.new()

puts cust2.name
puts cust2.address 
puts cust2[:name]
puts cust2["address"]


