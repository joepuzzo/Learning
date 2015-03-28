#!/bin/bash
#echo 'Enter a command: '
#read cmd
#echo 'Enter a regex: '
#read regex
#echo 'Enter a replacement: '
#read replace

cmd=mv
regex='*Hello*'
replace='F'

for i in $(ls); do
    echo $i | sed -E 's/$regex/$replace/g'
    #echo $cmd $i $new
done 

