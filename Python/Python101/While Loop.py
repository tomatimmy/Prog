# WHILE LOOP: a statement that will execute it's block of code
# as long as it's condition remains True

# FIRST WAY

# name = ""
#
# while len(name) == 0:
#     name = input("Enter your name: ")
#
# print("Hello " + name)

# SECOND WAY

name = None

while not name:
    name = input("Please enter your name: ")

print("Hello " + name)