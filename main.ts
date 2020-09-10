keypad.setKeyPad4(
DigitalPin.P1,
DigitalPin.P2,
DigitalPin.P8,
DigitalPin.P12,
DigitalPin.P13,
DigitalPin.P14,
DigitalPin.P15,
DigitalPin.P16
)
basic.forever(function () {
    basic.showString(keypad.getKeyString())
})
