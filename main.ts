let item = 0
let flag = 5
basic.forever(function () {
    if (flag + item > 180) {
        flag = -2
    }
    if (flag + item < 0) {
        flag = 2
    }
    item += flag
    for (let i = 0; i <= 15; i++) {
        Servo.Servo(i, item)
    }
    basic.pause(20)
})
