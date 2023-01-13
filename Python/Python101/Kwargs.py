# *KWARGS = parameter that will pack all arguments into
# a dictionary

def hello(**kwargs):
    #print('hello ' + kwargs['first'] + ' ' + kwargs['last'])
    print('hello', end=' ')
    for key,value in kwargs.items():
        print(value, end=" ")

hello(first="bro",middle='dude',last='code', title='mr')