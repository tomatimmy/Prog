# KEYWORD ARGUMENTS = arguments preceded by an identifier when we pass them to a function
# the order of the arguments doesn't matter, unlike positional arguments
# python knows the names of the arguments that our function receives

def hello(first,middle,last):
    print("Hello "+first+" "+middle+" "+last)

hello("matias", "ezequiel","vanarelli") # prints in order
hello("ezequiel",'matias','vanarelli') # prints unordered
hello(last='vanarelli',middle='ezequiel',first='matias') # prints ordered