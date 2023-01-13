import time
import datetime


class Employee(object):
    def __init__(self):
        self.firstName = ""
        self.lastName = ""
        self.timeCard = {}
        self.inCount = 1
        self.outCount = 1
        self.clockedIn = False

    def getEmployeeInfo(self):
        self.firstName = "Sam"  # raw_input("What is your first name? ")#.title
        self.lastName = "Winterton"  # raw_input("What is your last name? ")#.title
        self.email = "SamuelWinterton@gmail.com"  # raw_input("What is your email address? ")
        print
        ""

    def emploeeReport(self):

        print
        "Name: " + self.firstName + " " + self.lastName
        print
        "e-mail: " + self.email
        print
        self.timeCard

    def clockInOut(self, forgot):
        if forgot == True:
            if self.clockedIn == False:
                self.timeCard["in"] = getTimeStamp()
                self.clockedIn = True
            else:
                self.timeCard["out"] = getTimeStamp()
                self.clockedIn = False

        else:
            if self.clockedIn == False:
                self.timeCard["in"] = input("What time should you have clocked IN?")
                self.clockedIn = True
            else:
                self.timeCard["out"] = ("What time should you have clocked OUT?")
                self.clockedIn = False


def getTimeStamp():
    ts = time.time()
    print
    ts
    # timeStamp = datetime.datetime.strftime(datetime.datetime.now(), '%Y-%m-%d %H:%M:%S')
    # print timeStamp
    return ts


def yesNoQuestion(question):
    response = input(question + " (Y/N) ")
    if response.lower() == "y" or response.lower() == "yes":
        return True
    elif response.lower() == "n" or response.lower() == "no":
        return False
    else:
        print
        response + " is not an option please try again. "
        yesNoQuestion(question)


# sam = Employee()
# sam.getEmployeeInfo()
# sam.clockInOut()
# sam.clockInOut()
# sam.emploeeReport()
# getTimeStamp()

if yesNoQuestion("Do you want to use Punch clock?") == True:
    sam = Employee()
    sam.getEmployeeInfo()
    if yesNoQuestion("(Y for IN) (N for OUT)") == True:
        if sam.clockedIn == True:
            print
            "You are already clocked in. "
            sam.clockInOut(False)
            sam.clockInOut(True)
        else:
            print
            "You are not clocked in. "
            sam.clockInOut(False)
            sam.clockInOut(True)
    sam.emploeeReport()