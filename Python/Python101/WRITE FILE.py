
text = 'yooooooooo\nThis is some text\nHave a good one\n'
text2 = 'tex appended'

with open('/Users/matt/Documents/asd.txt', 'w') as file: #overrides file
    file.write(text)

with open('/Users/matt/Documents/asd.txt', 'a') as file: #appends
    file.write(text2)

