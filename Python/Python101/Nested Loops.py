# NESTED LOOPS: Is the concept of having one loop inside
# other loop

# The inner loop will finish all ot if's iterations before
# finishing one iteration of the "outer loop"

# BUILDING A RECTANGLE WITH SYMBOLS

rows = int(input("How many rows?: ")) # Outer loop
columns = int(input("How many rows?: ")) # Inner loop
symbol = input("Enter a symbol to use: ")

for i in range(rows):
    for j in range(columns):
        print(symbol, end="") # prevents the printing going to next line
    print()
