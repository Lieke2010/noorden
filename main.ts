basic.forever(function () {
    if (input.compassHeading() >= 135 && input.compassHeading() <= 225) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (input.compassHeading() >= 45 && input.compassHeading() <= 135) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (input.compassHeading() >= 225 && input.compassHeading() <= 315) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (input.compassHeading() >= 315 && input.compassHeading() <= 415) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.showArrow(ArrowNames.North)
    }
})
