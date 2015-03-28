#A simple TCP Server implimentation
from socket import *

serverPort = 12000

#Creat a TCP v4 socket
serverSocket = socket(AF_INET,SOCK_STREAM)

#Like UPD we bind the port number to the socket
serverSocket.bind((‘’,serverPort))

#We tell the socket to listen (1 max amount of qued connects)
serverSocket.listen(1)

print ‘The server is ready to receive’

while 1:
    #Create a specific connect socket for 'this' client
    connectionSocket, addr = serverSocket.accept()
    #Recive the data
    sentence = connectionSocket.recv(1024)
    #mod the data
    capitalizedSentence = sentence.upper()
    #send mod data back
    connectionSocket.send(capitalizedSentence)
    #close the connection for others to get in
    connectionSocket.close()

