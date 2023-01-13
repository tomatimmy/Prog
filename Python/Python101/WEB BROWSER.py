import socket

mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM) #creates socket with default parameters (AF_INET, SOCK_STREAM)
mysock.connect(('data.pr4e.org', 80)) # connects to webserver on selected port
cmd = 'GET http://data.pr4e.org/romeo.txt HTTP/1.0\r\n\r\n'.encode() # creates and enconde the package with the request to get data from webserver
mysock.send(cmd) # sends the package

while True:
    data = mysock.recv(512) # receives and stores data 512 characters at a time
    if len(data) < 1: # checks when data is less than 1 so it know's its finised receiving
        break # breaks loop when condition is true
    print(data.decode(),end='') # decode and prints the received data
mysock.close() #closes socket