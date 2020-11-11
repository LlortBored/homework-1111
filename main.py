xx=2
yy=2

for i in range(1):
    for j in range(3):
        x1 = xx - j
        x2 = xx + j
    if (x1 == x2):
        led.plot(x1,yy)
    else:
        led.plot(x1,yy),(x2,yy),(yy,x1),(yy,x2)
    xx += 1