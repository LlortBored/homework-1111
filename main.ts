basic.forever(function () {
    for (let I = 0; I <= 1; I++) {
        for (let j = 0; j <= 2; j++) {
            if (2 - j == 2) {
                led.plot(2, 2)
            } else {
                led.plot(2 - j, 2)
                led.plot(2, 2 - j)
                led.plot(2, 2 + j)
                led.plot(2 + j, 2)
            }
            basic.pause(500)
        }
    }
    basic.pause(500)
    basic.clearScreen()
})
