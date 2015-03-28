
import sys
import csv
import re

#Crude check to see if a file was provied.
if len(sys.argv) < 1: 
    print( 'Usage: file to search through' )
    exit(-1)

#Get the search regex from the user
var = raw_input("Please enter a regex: ")
print ( "you entered" + var )


#I wanted a set for duplicates for convinience
dups = set()

#initilize an empty set to put found items
found = set()

#initialize an empty dictionary of CVE to any data! 
cve_data = dict()

#Read in search file
with open( sys.argv[1], 'r') as afile:

     #parse throuh file looking for a matched expression
     #will enter uniquely into found 
     for line in afile:
        temp =  re.search( var, str(line) )
        if temp != None:
            #print temp.group(0) 
            found.add( temp.group(0) )
          
     total = 0    

     print( '=====================Found==========================' )
     for elem in found: 
         print( elem )
         total = total + 1

    
     print( total )

   
     print( '==================Duplicates=======================' )
     for elem in dups: 
         print( elem )





