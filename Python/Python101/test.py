dido = open('/Users/matt/Documents/dido.txt')
counts = dict()

for line in dido:
    words = line.split()
    words = line.split(',')
    for word in words:
        counts[word] = counts.get(word, 0) + 1

print(counts)
