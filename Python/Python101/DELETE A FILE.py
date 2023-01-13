import os
import shutil

path = '/Users/matt/Documents/copyasd.txt'

try:
    os.remove(path) #removes file
    #os.rmdir(path) #removes empty directory
    #shutil.rmtree(path) #removes directory recursively
except FileNotFoundError:
    print("File not found")

