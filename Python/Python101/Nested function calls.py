# NESTED FUNCTION CALLS = function calls inside another function calls

num = input('Enter a whole positive number: ')
num = float(num)
num = abs(num)
num = round(num)
print(num)

print(round(abs(float(input('Enter a whole number: '))))) # nested
