#simple UDP server
from socket import *

serverPort = 12000

#Create soclet for v4 UDP
serverSocket = socket(AF_INET, SOCK_DGRAM)

#bind the port number to the socket
serverSocket.bind((’’, serverPort))

print ”The server is ready to receive”

#continuously treat clients
while True:
    #Get the message, modify it, and send it back
    message, clientAddress = serverSocket.recvfrom(2048)
    modifiedMessage = message.upper()
    #Sent the mod message back
    #Note, how the clientAddress is a tuple! 
    serverSocket.sendto(modifiedMessage, clientAddress)

