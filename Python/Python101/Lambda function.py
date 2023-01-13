#LAMBDA function = function written in 1 line using lambda keyword
# accepts any number of arguments, but only has one expression.
# lambda parameters:expression

def double(x):
    return x * 2
print(double(5))

double = lambda x:x * 2
multiply = lambda x, y: x * y

print(multiply(2,3))
print(double(5))

age_check = lambda age:True if age >= 18 else False
print(age_check(18))