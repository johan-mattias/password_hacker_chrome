def on_received_string(receivedString):
    if receivedString == "pass":
        basic.show_icon(IconNames.TORTOISE)
radio.on_received_string(on_received_string)

one = 0
letters = ["a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"]
length = len(letters) - 1
while one <= length:
    two = 0
    while two <= length:
        three = 0
        while three <= length:
            four = 0
            while four <= length:
                radio.send_string("" + letters[one] + letters[two] + letters[three] + letters[four])
                print(letters[one] + letters[two] + letters[three] + letters[four])
                four += 1
            three += 1
        two += 1
    one += 1