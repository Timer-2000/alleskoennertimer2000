function Neopixel () {
    if (SCD30.readCO2() >= 100) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
    }
    if (SCD30.readCO2() >= 200) {
        for (let Index = 0; Index <= 1; Index++) {
            strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Yellow))
            strip.show()
        }
    }
    if (SCD30.readCO2() >= 300) {
        for (let Index = 0; Index <= 2; Index++) {
            strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Yellow))
            strip.show()
        }
    }
    if (SCD30.readCO2() >= 400) {
        for (let Index = 0; Index <= 3; Index++) {
            strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Yellow))
            strip.show()
        }
    }
    if (SCD30.readCO2() >= 500) {
        for (let Index = 0; Index <= 4; Index++) {
            strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Yellow))
            strip.show()
        }
    }
    if (SCD30.readCO2() >= 600) {
        for (let Index = 0; Index <= 5; Index++) {
            strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Yellow))
            strip.show()
        }
    }
    if (SCD30.readCO2() >= 700) {
        for (let Index = 0; Index <= 6; Index++) {
            strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Yellow))
            strip.show()
        }
    }
    if (SCD30.readCO2() >= 800) {
        for (let Index = 0; Index <= 7; Index++) {
            strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Yellow))
            strip.show()
        }
    }
    if (SCD30.readCO2() >= 900) {
        for (let Index = 0; Index <= 8; Index++) {
            strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Yellow))
            strip.show()
        }
    }
    if (SCD30.readCO2() >= 1000) {
        for (let Index = 0; Index <= 9; Index++) {
            strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Yellow))
            strip.show()
        }
    }
    if (SCD30.readCO2() >= 1100) {
        for (let Index = 0; Index <= 10; Index++) {
            strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Yellow))
            strip.show()
        }
    }
    if (SCD30.readCO2() >= 1200) {
        for (let Index = 0; Index <= 11; Index++) {
            strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Yellow))
            strip.show()
        }
    }
}
input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    basic.showString("Wuerfel")
    Würfel = randint(1, 6)
    if (Würfel == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (Würfel == 2) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    }
    if (Würfel == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
    }
    if (Würfel == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    }
    if (Würfel == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    }
    if (Würfel == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
	
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(659, music.beat(BeatFraction.Quarter))
    music.playTone(698, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Quarter))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(659, music.beat(BeatFraction.Quarter))
    music.playTone(698, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(880, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.playTone(880, music.beat(BeatFraction.Quarter))
    music.playTone(880, music.beat(BeatFraction.Quarter))
    music.playTone(988, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(659, music.beat(BeatFraction.Quarter))
    music.playTone(698, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(698, music.beat(BeatFraction.Quarter))
    music.playTone(880, music.beat(BeatFraction.Quarter))
    music.playTone(1184, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(659, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.playTone(1096, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(698, music.beat(BeatFraction.Quarter))
    music.playTone(880, music.beat(BeatFraction.Quarter))
    music.playTone(1184, music.beat(BeatFraction.Quarter))
    music.playTone(1560, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(698, music.beat(BeatFraction.Quarter))
    music.playTone(880, music.beat(BeatFraction.Quarter))
    music.playTone(1184, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(659, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.playTone(1096, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(659, music.beat(BeatFraction.Quarter))
    music.playTone(880, music.beat(BeatFraction.Quarter))
    music.playTone(1127, music.beat(BeatFraction.Quarter))
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(880, music.beat(BeatFraction.Whole))
    music.playTone(880, music.beat(BeatFraction.Whole))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
	
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    leben = 1
    basic.showString("Flappy Birb for Calliope", 75)
    spieler = game.createSprite(1, 2)
    hinderniss1 = game.createSprite(4, randint(1, 3))
    basic.pause(1000)
    hinderniss1.change(LedSpriteProperty.X, -1)
    hinderniss2 = game.createSprite(4, randint(1, 3))
    basic.pause(1000)
    hinderniss1.change(LedSpriteProperty.X, -1)
    hinderniss2.change(LedSpriteProperty.X, -1)
    while (leben == 1) {
        basic.pause(1000)
        hinderniss1.change(LedSpriteProperty.X, -1)
        hinderniss2.change(LedSpriteProperty.X, -1)
        if (spieler.isTouching(hinderniss1)) {
            leben = 0
            spieler.delete()
            hinderniss1.delete()
            hinderniss2.delete()
        }
        if (spieler.isTouching(hinderniss2)) {
            leben = 0
            spieler.delete()
            hinderniss1.delete()
            hinderniss2.delete()
        }
        if (hinderniss1.isTouchingEdge()) {
            hinderniss1.set(LedSpriteProperty.X, 4)
            hinderniss1.set(LedSpriteProperty.Y, randint(1, 3))
        }
        if (hinderniss2.isTouchingEdge()) {
            hinderniss2.set(LedSpriteProperty.X, 4)
            hinderniss2.set(LedSpriteProperty.Y, randint(1, 3))
        }
    }
})
let hinderniss2: game.LedSprite = null
let hinderniss1: game.LedSprite = null
let spieler: game.LedSprite = null
let leben = 0
let Würfel = 0
let strip: neopixel.Strip = null
SCD30.setCalibration400ppm()
strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
strip.setBrightness(20)
let range = strip.range(0, 11)
grove.setupWifi(
SerialPin.C17,
SerialPin.C16,
BaudRate.BaudRate115200,
"Vodafone-7788",
"StepanIrinaTimMax"
)
for (let Index = 0; Index <= 11; Index++) {
    strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
    basic.pause(500)
}
strip.easeBrightness()
basic.pause(2000)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.forever(function () {
    basic.pause(100)
    if (grove.wifiOK()) {
        basic.setLedColor(0x00ff00)
        basic.showNumber(SCD30.readCO2())
        grove.sendToThinkSpeak(
        "4XLXHDPRJ5TKIEJ5",
        SCD30.readCO2(),
        SCD30.readHumidity(),
        SCD30.readTemperature(),
        grove.measureInCentimeters(DigitalPin.C17),
        0,
        0,
        0,
        0
        )
        grove.sendToThinkSpeak(
        "V2L5Y365T1VLJ6B8",
        0,
        0,
        0,
        0,
        SCD30.readCO2(),
        0,
        0,
        0
        )
    } else {
        basic.setLedColor(0xff0000)
    }
})
basic.forever(function () {
    Neopixel()
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(500)
})
