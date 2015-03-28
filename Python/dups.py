

#Question: if N digits of base B how many duplicate combinations can I have 
#Assuming any of the ten digits can be in any of the N spaces 

#Define Duplicate: case where 2 or more ( D >=2 ) of the same digit are found

#Thus N-1 duplicate cases can be defined i.e for N = 4 we have the following:
# 1 1 1 1 | 1 1 1 _ | 1 1 _ _ | so 4 - 1 = 3 cases

#For each Case we have N - i where i >= 2 see below for example
# 1 1 | 1 1 | 
# 1 1 1 | 1 1 1 | 1 1 1 | .... 1 1 1 | ( 6 ) because ( N - i )!


