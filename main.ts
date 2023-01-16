function Neopixel () {
    if (SCD30.readCO2() >= 100) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        strip.show()
    } else {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    }
    if (SCD30.readCO2() >= 200) {
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        strip.show()
    } else {
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    }
    if (SCD30.readCO2() >= 300) {
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        strip.show()
    } else {
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    }
    if (SCD30.readCO2() >= 400) {
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
        strip.show()
    } else {
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    }
    if (SCD30.readCO2() >= 500) {
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
    } else {
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Black))
    }
    if (SCD30.readCO2() >= 600) {
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
    } else {
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Black))
    }
    if (SCD30.readCO2() >= 700) {
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
    } else {
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Black))
    }
    if (SCD30.readCO2() >= 800) {
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
    } else {
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Black))
    }
    if (SCD30.readCO2() >= 900) {
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    } else {
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Black))
    }
    if (SCD30.readCO2() >= 1000) {
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    } else {
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Black))
    }
    if (SCD30.readCO2() >= 1100) {
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    } else {
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Black))
    }
    if (SCD30.readCO2() >= 1200) {
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    } else {
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Black))
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
    if (leben == 1) {
        spieler.change(LedSpriteProperty.Y, 1)
    } else {
        basic.showString("hi!")
    }
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
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (leben == 1) {
        spieler.change(LedSpriteProperty.Y, -1)
    } else {
        basic.showString("hi!")
    }
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
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
	
})
let spieler: game.LedSprite = null
let leben = 0
let Würfel = 0
let strip: neopixel.Strip = null
SCD30.setCalibration400ppm()
strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
strip.setBrightness(20)
let range2 = strip.range(0, 11)
grove.setupWifi(
SerialPin.C17,
SerialPin.C16,
BaudRate.BaudRate115200,
"BYOD-WLAN",
"ESH_$1_Erdgeschoss"
)
for (let Index12 = 0; Index12 <= 11; Index12++) {
    strip.setPixelColor(Index12, neopixel.colors(NeoPixelColors.Yellow))
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
