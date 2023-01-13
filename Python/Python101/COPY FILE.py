# copyfile() = copies contents of a file
# copy() = copyfile() + permission mode + destination can be a directory
# copy2() = copy() + copies metadata (files creation and mod times)

import shutil

shutil.copyfile('/Users/matt/Documents/asd.txt', '/Users/matt/Documents/copyasd.txt') # source, destination
