#find the larges prime factor of a given number
from math import sqrt

num = 600851475143

def isPrime( number): 
    j = 2
    while j * j <= number:
        if number % j == 0:
            return 0 
        j = j + 1
    
    return 1;

#A factor = two numbers that multipy to get a number i.e 
#factors of 4 are ( 1 * 4 ) and ( 2 * 2 )
def factor(n):
      t = 0
      factors = set()
      for x in range(1, int(sqrt(n)) + 1):
        if n % x == 0:
          factors.add(x)
          factors.add(n//x)
        t = t + 1
      
      print t 
      return sorted(factors)
 
factors = factor( num )

for i in factors: 
    if isPrime(i): 
        print i

#for i in (45, 53, 64): print( "%i: factors: %s" % (i, factor(i)) )

