#sort() method = used with lists
#sort() function = used with iterables

#students = ('mati','coco','nico','momo')

#students.sort() #sorts lists from a to z
#students.sort(reverse=True) #sorts lists from z to a

#for i in students:
#    print(i)

#sorted_students = sorted(students)
#for i in sorted_students:
#   print(i)

students = [('mati','A',30),
            ('coco', 'B', 34),
            ('nico', 'c', 31),
            ('momo', 'f', 29)]

grade = lambda grade:grade[1]
students.sort(key=grade)

for i in students:
    print(i)
