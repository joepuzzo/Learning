#include <stdio.h>


/*
 * A helper function to parse the line
 */
/*void parseLine() {
    
    while( fscanf(fp, "%s", line) ){
        
    }
    
}*/


int main( int argc, char *argv[] )
{
    printf("Hello World\n");
    
    //Get the filename from first arg
    const char *filename = argv[0];
    
    //Open the file and store in file descriptor
    FILE *fp = fopen(filename, "r");
    
    //Our char array to store each line
    char *line = NULL;
    
    //Always check for successful file open
    if( fp == NULL ) {
        printf("Could not open file %s\n", filename );
    }
    
    
    //Loop over each line and store in buffer
    //Note: fscanf will return 1 ( true ) when it gets somthing so this works
    //Note: fscanf will allocate memory for you so you dont have to
    while( fscanf(fp, "%s", line) ){
        
        //Print the line for debug
        printf("LOG - The Full Line is %s\n", line);
        
        //Now parse the line
        //parseLine
    }
    
    return 0; 
}
