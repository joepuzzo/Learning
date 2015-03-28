
while true do 
    data = gets.chomp.downcase
    puts data.to_i(16)
    puts data.to_i(2)
    puts data.unpack('B*')
end
