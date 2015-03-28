#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <fcntl.h>
#include <sys/stat.h>


int main( int argc, char *argv[]) 
{
    //Check proper arguments
    if( argc < 3 )
    {
        fprintf(stderr, "Please provide a file!!");    
        exit(-1); 
    }

    // File descriptor
    int userid, fd; 

    //Allocate a string to store file name
    char* datafile = malloc(50);
    char* note = malloc(100);

    strcopy( datafile, argv[0] ); 

    //Open a file 
    fd = open( datafile, O_WRONLY | O_CREAT | O_APPEND, S_IRUSR | S_IWUSR);
    
    if( fd == -1 ) 
    {
        fprintf(stderr, "Error opening file!!");    
        exit(-1); 
    }

    //Copy note into the note buffer
    strcopy( note, argv[1] );

    //Get the actual user id
    userid = getuid();

    //Write note
    write( fd, note, strlen(note) ); 

    //Close file
    close(fd); 

    //free mem 
    free(note);
    free(datafile);    
    
}
