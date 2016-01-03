// This is the "Hello World" test suite
describe("Hello World", function() {
 
    // This is the "says hello" test spec
    it("says hello", function() {
        // This is known as a matcher ( there are many of these)
        expect(helloWorld()).toEqual("Hello world!");
    });
    // See, you can have multile specs within your suite
    it("says hello Joe"), function() { 
        // You can have custom matchers ( this is not an example of one though )
        expect( helloName( "Joe") ).toEqual("Hello Joe");
    }
    // Example of a different matcher
    it("says world", function() {
        expect(helloWorld()).toContain("world");
    });

    // Example of a custom matcher
    beforeEach( function() {
      jasmine.addMatchers({
        // A custom matcher
        toBeDivisibleByTwo: function() {
            return {
                compare: function(actual, expected) {
                    return { pass: (actual % 2) === 0 };
                }
            };
        }
        // Add more custom matchers here
      });
    });

    it('is divisible by 2', function() {
        expect(gimmeANumber()).toBeDivisibleByTwo();
    });
     
});
