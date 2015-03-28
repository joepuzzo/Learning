
#the fib function will take in the previous value and create the next one 
#then it will retiurn until it hits a base case 
def fib( val1, val2 ):

    nextval = val1 + val2

    #Base case 1. We are over 4 million
    if nextval > 4000000: 
        return 2

    #If we make it here we recurse
    mysum = fib( val2, nextval  )

    #When we come back we add to the sum if our val1 is even
    if nextval % 2 == 0: 
        mysum = mysum + nextval 

    #now we return our sum
    return mysum

answer = fib( 1, 2 )

print answer

