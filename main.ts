let x1: number;
let x2: ?212;
let xx = 2
let yy = 2
for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 3; j++) {
        x1 = xx - j
        x2 = xx + j
    }
    if (x1 == x2) {
        led.plot(x1, yy)
    } else {
        [led.plot(x1, yy), [x2, yy], [yy, x1], [yy, x2]]
    }
    
    xx += 1
}
