


#Prompts for and gets data.. overide function if nesisar to format data
def get_data( prompt ) 
    print prompt
    data = gets.chomp.strip
    data = yield( data ) if block_given?
    return data
end



File.open("2.1.3.2_out", "a") do |file|
    prefix = get_data("Enter a prefix: ")
    type = get_data("enter a type: ")
    start_range = get_data("Enter a start code: ")
    end_range= get_data("Enter an end code: ")

    for i in start_range.to_i .. end_range.to_i do 
        file.write( "#{prefix} #{type} #{i} \n" )
    end

end
