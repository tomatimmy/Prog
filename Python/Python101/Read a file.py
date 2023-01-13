#HOW TO READ THE CONTENT OF A FILE

try:
    with open('/Users/matt/Documents/lalala.rtf') as file:
        print(file.read())
except FileNotFoundError:
    print("file wasnt found")