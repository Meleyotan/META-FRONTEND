file = input("File name? ")
content = open(file, 'r')
print (content.read())
content.close()

