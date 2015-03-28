
def test(n)
    raise "bad input" if n == nil 
    puts n
end

begin 
    test(nil)
rescue Exception => e
    puts e.message
end
