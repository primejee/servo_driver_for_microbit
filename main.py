item = 0
flag = 5

def on_forever():
    global flag, item
    if flag + item > 180:
        flag = -2
    if flag + item < 0:
        flag = 2
    item += flag
    for i in range(16):
        Servo.servo(i, item)
    basic.pause(20)
basic.forever(on_forever)
