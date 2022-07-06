let Light = 0
input.onButtonPressed(Button.A, function () {
    Light = input.lightLevel()
    basic.showNumber(Light)
})
basic.forever(function () {
	
})
