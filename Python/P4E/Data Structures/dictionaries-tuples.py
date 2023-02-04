name = input("Enter file:")
if len(name) < 1:
    name = "mbox-short.txt"
handle = open(name)
li = list()
di = dict()
for line in handle:
    line = line.rstrip()
    if not line.startswith('From '):
        continue
    else:
        line = line.split()
        line = line[5]
        line = line.split(":")
        line = line[0]
        li.append(line)
#print(li)

for w in li:
    di[w] = di.get(w, 0) + 1
#print(di)

tmp = list()
for k,v in di.items():
    newt = (k,v)
    tmp.append(newt)
tmp = sorted(tmp)

for k,v in tmp:
    print(k,v)


# largest = -1
# word = None
# for k,v in di.items():
#     if v > largest:
#         largest = v
#         word = k
# print(word,largest)
                    

