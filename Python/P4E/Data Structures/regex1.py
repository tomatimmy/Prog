import re


#Looks for a string of text with the given parameters
""" hand = open('mbox-short.txt')
for line in hand:
    line = line.rstrip()
    if re.search('From:', line):
        print(line) """

#Looks for a string of text that STARTS with the given parameters (^ operator)

""" hand = open('mbox-short.txt')
for line in hand:
    line = line.rstrip()
    if re.search('^From:', line):
        print(line) """

#Looks for a string that starts with X-, followed by 1 or more (+ operator) NON-WHITESPACE character (\S)
""" hand = open('mbox-short.txt')
for line in hand:
    line = line.rstrip()
    if re.search('^X-\S+:', line):
        print(line) """

#MATCHING AND EXTRACTING DATA
#re.search() = returnes true/false
#re.findall() = extracts data to a list

""" x = 'My favourite 6 numbers are 12, 4, 5, 133, 0 and 3.'
y = re.findall('[0-9]+', x)
print(y) """

#[] any value inside brackets mean a range for ONE CHARACTER
#[0-9] means ONE DIGIT
#[A-Z] means ONE LETTER (distinguishes upper and lowercase)

""" x = 'My favourite 6 numbers are 12, 4, 5, 133, 0 and 3.'
y = re.findall('[A-Z]+', x)
print(y) """

#Greedy Matching
#The repeat characters (* or +) push outward in both directions to match the largest string.
#In this case, it prints the all the line until the second :

x = 'From: Mati pero sin usar los dos puntos: de nuevo'
y = re.findall('^F.*:', x)
print(y)


#If we want to restrict it (non greedy), we add the (?) next to the repeat character
#It prints only 'From:'

x = 'From: Mati pero sin usar los dos puntos: de nuevo'
y = re.findall('^F.*:?', x)
print(y)

#Finding all the emails directions in mbox-short.txt

""" hand = open('mbox-short.txt')
for line in hand:
    line = line.rstrip()
    if re.search('@', line):
        y = re.findall('\S+@\S+', line)
        print(y) """

#Parentheses are not a part of the match, but tells where to start-end the string to extract

""" hand = open('mbox-short.txt')
for line in hand:
    line = line.rstrip()
    if re.search('^From', line):
        y = re.findall('^From (\S+@\S+)', line)
        print(y) """

""" test = 'From: argensuizo@protonmail.me.gpt esto ya son boludeces'
y = re.findall('@([^ ]*)', test) # [^ ] means any non blank character
print(y) """

#Look for the maximum value of DSPAM-Confidence in mbox-short.txt

""" hand = open('mbox-short.txt')
numlist = list()
for line in hand:
    line = line.rstrip()
    stuff = re.findall('^X-DSPAM-Confidence: ([0-9.]+)', line)
    if len(stuff) != 1:
        continue
    else:
        numlist.append(stuff)
print('Maximum: ', max(numlist)) """

#Escape character \

line = 'Matias es un. hijo de perra. Lalala.'
y = re.findall('\S+\.\s+?', line)
print(y)
