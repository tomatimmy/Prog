# STRING SLICING = create a substring by extracting elements
# from another string

# metodos: indexing [] or slice ()
# argumentos opcionales: [start:stop:step]

# INDEXING
# name = "Mati Vanarelli"
#
# first_name = name[:4] #[0:4]
# last_name = name [5:] #[5:end]
# reversed_name = name[::-1] #[0:end:inversed]
#
# print(first_name)
# print(last_name)
# print(reversed_name)

# USING SLICE FUNCTION

website1 = "http://google.com"
website2 = "http://wikipedia.com"
slice = slice(7, -4)
print(website1[slice])
print(website2[slice])