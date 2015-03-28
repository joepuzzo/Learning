#include <stdio.h>
#include <sys/socket.h>
#include<arpa/inet.h> //inet_addr

int main(int argc , char *argv[])
{
    int socket_desc; 
    struct sockaddr_in server;
     
    //Create socket
    socket_desc = socket(AF_INET , SOCK_STREAM , 0);
    if (socket_desc == -1)
    {
        printf("Could not create socket");
    }
         
    //Set the variables of the socket structure
    server.sin_addr.s_addr = inet_addr("74.125.235.20");
    server.sin_family = AF_INET;
    server.sin_port = htons( 80 );
 
    //Connect to remote server
    //Give connect the socket identifier, the structure by referecnce
    //and the size of the structure 
    if ( connect(socket_desc , (struct sockaddr *)&server , sizeof(server)) < 0 )
    {
        puts("connect error");
        return 1;
    }
     
    puts("Connected");
    return 0;
}










/*int main( int argc, char *argv[] )
{
	printf( "Hello World my age is: %d", 19 );
	
	//Declare a socket identifier
	int socket_desc;
	
	//Ipv4 socket, TCP connect, IP protocol 
    socket_desc = socket(AF_INET , SOCK_STREAM , 0);
     
    //Ensure connection
    if (socket_desc == -1)
    {
        printf("Could not create socket");
    }
     
     
    // IPv4 AF_INET sockets:
	struct sockaddr_in 
	{
		short            sin_family;   // e.g. AF_INET, AF_INET6
		unsigned short   sin_port;     // e.g. htons(3490)
		struct in_addr   sin_addr;     // see struct in_addr, below
		char             sin_zero[8];  // zero this if you want to
	};
 
	struct in_addr 
	{
		unsigned long s_addr;          // load with inet_pton()
	};
 
	struct sockaddr 
	{
		unsigned short    sa_family;    // address family, AF_xxx
		char              sa_data[14];  // 14 bytes of protocol address
	};
	
	//The inet_addr function coverts a ipv4 address string to a long
	server.sin_addr.s_addr = inet_addr("74.125.235.20");
	
    return 0;
}*/

