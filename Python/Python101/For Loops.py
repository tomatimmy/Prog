import time
# FOR LOOPS: A statement that will execute it's block of code
# a limited amount of time
#
# WHILE LOOP = UNLIMITED
# FOR LOOP = LIMITED

# for i in range(10): # Counter to ten
#    print(i + 1)

# for i in range(50, 100): # counter from 50 to 99
#    print(i)

# for i in "Matt Vanarelli": # prints letters
#    print(i)

# COUNTDOWN TO 0 and printing message

for seconds in range(10, 0, -1):
    print(seconds)
    time.sleep(1) # delays the iteration for 1 second
print("Happy new year!")

