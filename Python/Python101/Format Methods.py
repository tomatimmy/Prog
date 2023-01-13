# str.format() = optional method that gives user
# more control when displaying outpoot

animal = 'cow'
item = 'moon'

print('The ' + animal + ' jumped over the ' + item) # normal
print('the {} jumped over the {}'.format(animal,item)) # str.format
print('the {0} jumped over the {1}'.format(animal,item)) # positional
print('the {animal} jumped over the {item}'.format(animal="cow",item="moon")) # keyword arg

text = 'the {} jumped over the {}'
print(text.format(animal,item))

# ADDING PADDING
name = 'Mati'
print('hello, my name is {}'.format(name))
print('hello, my name is {:10} vanarelli'.format(name)) # padding 10

#FORMAT NUMBERS

number = 10000

print('The number pie is {:.2f}'.format(number)) # :.2f Prints only 2 digits after decimal
print('The number is {:,}'.format(number)) # adds , to thousands
print('The number pie is {:b}'.format(number)) # prints binary
print('The number pie is {:o}'.format(number)) # prints octal
print('The number pie is {:x}'.format(number)) # prints hexadecimal
print('The number pie is {:e}'.format(number)) # prints scientfic