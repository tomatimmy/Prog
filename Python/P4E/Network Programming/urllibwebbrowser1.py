import urllib.request

#Web browser

#urllib.request.urlopen('...') makes the connection, encodes the get request
#and retrieves all the headers and an object as a file for the provided URL
""" fhand = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')
for line in fhand:
    print(line.decode().strip()) """ #print(line.decode().strip()) decodes the obtained data and decodes it


fhand = urllib.request.urlopen(input('Enter URL: '))
for line in fhand:
    print(line.decode().strip())

