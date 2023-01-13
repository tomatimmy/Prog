# RANDOM MODULE METHODS

import random

x = random.randint(1,6) #generates random int
y = random.random() #prints random float
print(x)
print(y)

myList = ['rock','paper','scissors']
z = random.choice(myList) #prints random choice
print(z)

cards = [1, 2, 3, 4, 5, 'k','q']
random.shuffle(cards) #shuffles list randomly
print(cards)