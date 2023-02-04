import re

hand = open('regex_sum_1713498.txt')

numlist = list()
suma = 0
for line in hand:
    line = line.rstrip()
    numbers = re.findall('[0-9]+', line)
    if len(numbers) < 1:
        continue
    else:
        numlist.append(numbers)

emptylist = list()
for num in numlist:
   emptylist = emptylist + num

numlist = [int(x) for x in emptylist]
for i in numlist:
    suma = suma + i
print(suma)
        
