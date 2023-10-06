import sys

# flake8: noqa

def main():
    data = openAndReadFile()
    dataLC = determinePrinatableAscii(data)
    printHexOutput(data, dataLC)

def openAndReadFile():
    fd = open(sys.argv[1], "rb")
    data = fd.read()
    return data

def determinePrinatableAscii(data):
    dataListCopy = []
    # determine if a character is printable ascii
    for el in data:
        # if it is, then append it to the list so that it may be printed
        if int(hex(el), 16) >= int(hex(32), 16) and int(hex(el), 16) <= int(hex(126), 16):
            dataListCopy.append(chr(el))
        # else the character is not printable ascii, so append a period in it's place
        else:
            dataListCopy.append(".")
    return dataListCopy

def printHexOutput(d, dLC):
    d = list(d)
    dataListCopyHex = []
    for el in d:
        dataListCopyHex.append(f"{el:x}".rjust(2, "0"))

    for i in range(len(dataListCopyHex)):
        if i % 16 == 0:
            if len(dataListCopyHex) - i > 15:
                print("{:08x}".format(i), end="  ")
                print(" ".join(dataListCopyHex[i: i + 8]), end="  ")
                print(" ".join(dataListCopyHex[i + 8: i + 16]), end="  ")
                print("|" + "".join(dLC[i: i + 16]) + "|")
            else:
                length = len(
                    "{:08x}".format(i)
                    + "  "
                    + " ".join(dataListCopyHex[i: i + 8])
                    + " ".join(dataListCopyHex[i + 8: i + 16])
                )
                print(
                    "{:08x}".format(i)
                    + "  "
                    + " ".join(dataListCopyHex[i: i + 8])
                    + "  "
                    + " ".join(dataListCopyHex[i + 8: i + 16]),
                    end="",
                )
                print("|".rjust(59 - length), end="")
                print("".join(dLC[i: i + 16]) + "|")
        if len(dLC) - 1 == i:
            print("{:08x}".format(i + 1), end="")

if __name__ == "__main__":
    main()