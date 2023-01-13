let Hand = 0
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    Hand = randint(1, 3)
    if (Hand == 1) {
        basic.showLeds(`
            # . . . #
                        . # . # .
                        . . # . .
                        # # . # #
                        # # . # #
        `)
    }
    
    if (Hand == 2) {
        basic.showLeds(`
            . . . . .
                        . # # # .
                        . # # # .
                        . # # # .
                        . . . . .
        `)
    }
    
    if (Hand == 3) {
        basic.showLeds(`
            # # # # #
                        # . . . #
                        # . . . #
                        # . . . #
                        # # # # #
        `)
    }
    
})
basic.forever(function on_forever() {
    
})
