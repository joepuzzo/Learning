#Simple TCP Client
from socket import *

serverName = "agate.cs.unh.edu"
serverPort = 8000

#V4 socket using TCP
clientSocket = socket(AF_INET, SOCK_STREAM)

#Establish a connection
clientSocket.connect((serverName,serverPort))

#Get input

#Look we can just call send now!!
while True: 
    clientSocket.send("GET /servertime HTTP/1.1\n\n")
    #Call a recive on our socket
    modifiedSentence = clientSocket.recv(8000)

    #print results and close connection
    #print "From Server:", modifiedSentence


clientSocket.close()

