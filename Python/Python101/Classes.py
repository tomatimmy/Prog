class Empleados:

    def __init__(self, first, last, pay): # enumerar argumentos que van a ser metodos
        self.first = first
        self.last = last
        self.pay = pay
        self.email = (first + '.' + last + '@company.com').lower()

    def fullname(self):
        return self.first + " " + self.last

emp_1 = Empleados('Matias', 'Vanarelli', 50000)
emp_2 = Empleados('Coco', 'Serenella', 30000)

print(emp_1.fullname())
print(emp_1.email)


