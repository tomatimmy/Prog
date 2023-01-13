#EXCEPTION = events detected during exexution that interrupt the flow
# of a program

# numerator = int(input('enter a number to divide: '))
# denominator = int(input('enter a number do divide by: '))
# result = numerator / denominator
# print(result)

#IF WE DIVIDE By ZERO WE GENERATE AN EXCEPTION

try:
    numerator = int(input('enter a number to divide: '))
    denominator = int(input('enter a number do divide by: '))
    result = numerator / denominator
except ZeroDivisionError as e:
    print(e)
    print("You cant divide by zero idiot!")
except ValueError as e:
    print(e)
    print("enter only numbers, idiot!")
except Exception as e:
    print(e)
    print("something went wrong")
else:
    print(result)
finally:
    print('thanks')