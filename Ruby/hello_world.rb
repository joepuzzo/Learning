
#A mapping of language to knowledge
languages = { 
    "Ruby"   => 5, 
    "Java"   => 9, 
    "C++"    => 7,
    "C"      => 8, 
    "JS"     => 5, 
    "Python" => 6,
} 

def puzzo_code( my_name, language_hash )
    puts "Hello my name is #{my_name}!"
    yield( language_hash )
end 

puzzo_code( "Joe", languages ) do | lang | 
    lang.each do | i, j |
        puts "Language: #{i}      \t Knowlege Level: "<< ( j * 10 ).to_s << "%"
    end
end   


