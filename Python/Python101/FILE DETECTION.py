#FILE DETECTION

import os

path = '/Users/matt/Documents/'

if os.path.exists(path): # checks if path exists
    print('ok')
    if os.path.isfile(path): # checks is path is a file
        print('that is a file')
    elif os.path.isdir(path): # checks is path is a directory
        print('that is a directory')
else:
    print('that location doesnt exists')