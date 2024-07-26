input.onPinPressed(TouchPin.P0, function () {
    user_key += 1000
    soroban.showNumber(user_key)
    wait_and_clear()
})
input.onButtonPressed(Button.A, function () {
    user_key += 10000
    soroban.showNumber(user_key)
    wait_and_clear()
})
function wait_and_clear () {
    basic.pause(500)
    basic.clearScreen()
    datalogger.log(datalogger.createCV("1", user_key))
}
input.onPinPressed(TouchPin.P2, function () {
    user_key += 10
    soroban.showNumber(user_key)
    wait_and_clear()
})
input.onButtonPressed(Button.B, function () {
    user_key += 1
    soroban.showNumber(user_key)
    wait_and_clear()
})
input.onPinPressed(TouchPin.P1, function () {
    user_key += 100
    soroban.showNumber(user_key)
    wait_and_clear()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    soroban.showNumber(user_key)
    wait_and_clear()
    basic.showNumber(user_key)
    wait_and_clear()
})
let user_key = 0
datalogger.mirrorToSerial(true)
radio.setGroup(1)
user_key = 0
let key = 12345
let num = 1236
datalogger.log(datalogger.createCV("1", user_key))
basic.forever(function () {
    if (user_key == key) {
        wait_and_clear()
        basic.showNumber(num)
        serial.writeString("Cool you did it")
        radio.sendNumber(num)
        control.reset()
    }
})
