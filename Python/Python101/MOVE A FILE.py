import os

source = '/Users/matt/Documents/asd.txt'
destination = '/Users/matt/asd.txt'

try:
    os.replace(source,destination)
except FileNotFoundError:
    print(source + ' was not found')