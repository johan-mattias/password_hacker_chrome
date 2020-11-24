radio.onReceivedString(function (receivedString) {
    if (receivedString == "pass") {
        basic.showIcon(IconNames.Tortoise)
    }
})
radio.setGroup(1)
let one = 0
let two: number;
let three: number;
let four: number;
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let length = letters.length - 1
basic.showIcon(IconNames.Chessboard)
while (one <= length) {
    two = 0
    while (two <= length) {
        three = 0
        while (three <= length) {
            four = 0
            while (four <= length) {
                radio.sendString("" + letters[one] + letters[two] + letters[three] + letters[four])
                console.log(letters[one] + letters[two] + letters[three] + letters[four])
four += 1
            }
            three += 1
        }
        two += 1
    }
    one += 1
}
