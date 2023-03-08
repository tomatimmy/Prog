#SCRAPING HTML DATA AUTOGRADER

import urllib.request, urllib.parse, urllib.error
from bs4 import BeautifulSoup
import ssl

# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input('Enter - ')
repeat = int(input('Enter number of repetitions: '))
position = int(input('Enter the link position: '))

for i in range(repeat):
    html = urllib.request.urlopen(url, context=ctx).read()
    soup = BeautifulSoup(html, 'html.parser')
    tags = soup('a')
    count = 0
    for tag in tags:
        count = count +1
        if count>position:
            break
        url = tag.get('href', None)
        name = tag.contents[0]
print(name)
