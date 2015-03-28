for i in $(ls); do
    #l=( echo $i | sed -E 's/[0-9]/"F"/')
    echo Moving item: $i to $l
done
