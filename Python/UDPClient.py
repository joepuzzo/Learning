#A simple client that used udp
from socket import *

#Define variables
serverName = 'hostname'
serverPort = 12000

#create a v4 socket that uses UDP
clientSocket = socket(AF_INET, SOCK_DGRAM)

#Get the message to send
message = raw_input("Input lowercase sentence: ")

#send the message to the server and port
clientSocket.sendto(message, (serverName, serverPort))

#get the message and ip address object that are returned
modifiedMessage, serverAddress = clientSocket.recvfrom(2048)

#Print the result and close the connection
print modifiedMessage
clientSocket.close()
