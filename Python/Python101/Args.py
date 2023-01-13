# *ARGS = parameter that will pack all arguments
# into a tuple

# def add(num1,num2): # accepts only 2 arguments
#     sum = num1 + num2
#     return sum
#
# print(add(1,2))

def add(*args): # accepts as many arguments as you provide
    sum = 0
    for i in args:
        sum += i
    return sum

print(add(1,2,3,4,5))