# LOGICAL OPERATORS: (and, or, not)
# Used to check if two or more conditional
# statements are True

temp = float(input("What is the temperature outside?: "))

if (temp >= 0) and (temp <= 30):
    print("The temperature is good today.")
    print("Go outside!")
elif (temp < 0) or (temp > 30):
    print("The temperature is bad today.")
    print("Stay inside.")



