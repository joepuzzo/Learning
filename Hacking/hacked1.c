
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int check_psswd( char* psswd );

int main( int argc, char *argv[] ) 
{
    char buffer[16]; 

    printf("Please Enter a Password <= 15 characters.. Dont hack me please ;) \n");
    scanf("%s", buffer); 
    if( check_psswd( buffer ) )
    {
        printf("You are in!\n");
    }
    else
    {
        printf("Nope try again!\n");
    }
    return 0;
}

int check_psswd( char* psswd )
{
    int authenticator = 0;

    if( strcmp(psswd, "HelloWorld") == 0 )
    {
        authenticator = 1;
    }
    return authenticator;
}

