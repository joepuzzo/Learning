class Outer
    class Inner
        def test 
            puts "Fuck!"
        end
    end
end

class Outerext < Outer 

    def test 
        return Inner.new()
    end

end

test = Outerext.new()
testinner = test.test()
testinner.test()
