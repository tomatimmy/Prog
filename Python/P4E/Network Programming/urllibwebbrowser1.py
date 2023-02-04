import urllib.request

""" fhand = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')
for line in fhand:
    print(line.decode().strip()) """

fhand = urllib.request.urlopen('https://www.py4e.com/')
for line in fhand:
    print(line.decode().strip())

