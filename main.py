def Neopixel():
    if SCD30.read_co2() >= 100:
        strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.GREEN))
        strip.show()
    if SCD30.read_co2() >= 200:
        for Index in range(2):
            strip.set_pixel_color(Index, neopixel.colors(NeoPixelColors.GREEN))
            strip.show()
    if SCD30.read_co2() >= 300:
        for Index2 in range(3):
            strip.set_pixel_color(Index2, neopixel.colors(NeoPixelColors.GREEN))
            strip.show()
    if SCD30.read_co2() >= 400:
        for Index3 in range(4):
            strip.set_pixel_color(Index3, neopixel.colors(NeoPixelColors.GREEN))
            strip.show()
    if SCD30.read_co2() >= 500:
        for Index4 in range(5):
            strip.set_pixel_color(Index4, neopixel.colors(NeoPixelColors.YELLOW))
            strip.show()
    if SCD30.read_co2() >= 600:
        for Index5 in range(6):
            strip.set_pixel_color(Index5, neopixel.colors(NeoPixelColors.YELLOW))
            strip.show()
    if SCD30.read_co2() >= 700:
        for Index6 in range(7):
            strip.set_pixel_color(Index6, neopixel.colors(NeoPixelColors.YELLOW))
            strip.show()
    if SCD30.read_co2() >= 800:
        for Index7 in range(8):
            strip.set_pixel_color(Index7, neopixel.colors(NeoPixelColors.YELLOW))
            strip.show()
    if SCD30.read_co2() >= 900:
        for Index8 in range(9):
            strip.set_pixel_color(Index8, neopixel.colors(NeoPixelColors.RED))
            strip.show()
    if SCD30.read_co2() >= 1000:
        for Index9 in range(10):
            strip.set_pixel_color(Index9, neopixel.colors(NeoPixelColors.RED))
            strip.show()
    if SCD30.read_co2() >= 1100:
        for Index10 in range(11):
            strip.set_pixel_color(Index10, neopixel.colors(NeoPixelColors.RED))
            strip.show()
    if SCD30.read_co2() >= 1200:
        for Index11 in range(12):
            strip.set_pixel_color(Index11, neopixel.colors(NeoPixelColors.RED))
            strip.show()

def on_pin_touch_p1():
    global Würfel
    basic.show_string("Wuerfel")
    Würfel = randint(1, 6)
    if Würfel == 1:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
    if Würfel == 2:
        basic.show_leds("""
            # . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . #
        """)
    if Würfel == 3:
        basic.show_leds("""
            # . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . #
        """)
    if Würfel == 4:
        basic.show_leds("""
            # . . . #
                        . . . . .
                        . . . . .
                        . . . . .
                        # . . . #
        """)
    if Würfel == 5:
        basic.show_leds("""
            # . . . #
                        . . . . .
                        . . # . .
                        . . . . .
                        # . . . #
        """)
    if Würfel == 6:
        basic.show_leds("""
            # . . . #
                        . . . . .
                        # . . . #
                        . . . . .
                        # . . . #
        """)
input.on_pin_touch_event(TouchPin.P1, input.button_event_down(), on_pin_touch_p1)

def on_button_a():
    pass
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_ab():
    music.play_tone(523, music.beat(BeatFraction.QUARTER))
    music.play_tone(659, music.beat(BeatFraction.QUARTER))
    music.play_tone(698, music.beat(BeatFraction.QUARTER))
    music.play_tone(784, music.beat(BeatFraction.WHOLE))
    music.play_tone(698, music.beat(BeatFraction.HALF))
    music.play_tone(659, music.beat(BeatFraction.QUARTER))
    music.play_tone(659, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.QUARTER))
    music.play_tone(523, music.beat(BeatFraction.QUARTER))
    music.play_tone(659, music.beat(BeatFraction.QUARTER))
    music.play_tone(698, music.beat(BeatFraction.QUARTER))
    music.play_tone(784, music.beat(BeatFraction.WHOLE))
    music.play_tone(880, music.beat(BeatFraction.HALF))
    music.play_tone(784, music.beat(BeatFraction.QUARTER))
    music.play_tone(880, music.beat(BeatFraction.QUARTER))
    music.play_tone(880, music.beat(BeatFraction.QUARTER))
    music.play_tone(988, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.QUARTER))
    music.play_tone(523, music.beat(BeatFraction.QUARTER))
    music.play_tone(659, music.beat(BeatFraction.QUARTER))
    music.play_tone(698, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.WHOLE))
    music.play_tone(587, music.beat(BeatFraction.QUARTER))
    music.play_tone(698, music.beat(BeatFraction.QUARTER))
    music.play_tone(880, music.beat(BeatFraction.QUARTER))
    music.play_tone(1184, music.beat(BeatFraction.QUARTER))
    music.play_tone(523, music.beat(BeatFraction.QUARTER))
    music.play_tone(659, music.beat(BeatFraction.QUARTER))
    music.play_tone(784, music.beat(BeatFraction.QUARTER))
    music.play_tone(1096, music.beat(BeatFraction.QUARTER))
    music.play_tone(587, music.beat(BeatFraction.QUARTER))
    music.play_tone(698, music.beat(BeatFraction.QUARTER))
    music.play_tone(880, music.beat(BeatFraction.QUARTER))
    music.play_tone(1184, music.beat(BeatFraction.QUARTER))
    music.play_tone(1560, music.beat(BeatFraction.QUARTER))
    music.play_tone(587, music.beat(BeatFraction.QUARTER))
    music.play_tone(698, music.beat(BeatFraction.QUARTER))
    music.play_tone(880, music.beat(BeatFraction.QUARTER))
    music.play_tone(1184, music.beat(BeatFraction.QUARTER))
    music.play_tone(523, music.beat(BeatFraction.QUARTER))
    music.play_tone(659, music.beat(BeatFraction.QUARTER))
    music.play_tone(784, music.beat(BeatFraction.QUARTER))
    music.play_tone(1096, music.beat(BeatFraction.QUARTER))
    music.play_tone(440, music.beat(BeatFraction.QUARTER))
    music.play_tone(554, music.beat(BeatFraction.QUARTER))
    music.play_tone(659, music.beat(BeatFraction.QUARTER))
    music.play_tone(880, music.beat(BeatFraction.QUARTER))
    music.play_tone(1127, music.beat(BeatFraction.QUARTER))
input.on_button_event(Button.AB, input.button_event_click(), on_button_ab)

def on_gesture_shake():
    music.play_tone(659, music.beat(BeatFraction.HALF))
    music.play_tone(659, music.beat(BeatFraction.HALF))
    music.play_tone(587, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.HALF))
    music.play_tone(440, music.beat(BeatFraction.QUARTER))
    music.play_tone(440, music.beat(BeatFraction.HALF))
    music.play_tone(523, music.beat(BeatFraction.HALF))
    music.play_tone(880, music.beat(BeatFraction.WHOLE))
    music.play_tone(880, music.beat(BeatFraction.WHOLE))
    music.play_tone(784, music.beat(BeatFraction.WHOLE))
    music.play_tone(698, music.beat(BeatFraction.WHOLE))
    music.play_tone(659, music.beat(BeatFraction.WHOLE))
    music.play_tone(523, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.WHOLE))
    music.play_tone(659, music.beat(BeatFraction.HALF))
    music.play_tone(523, music.beat(BeatFraction.HALF))
    music.play_tone(587, music.beat(BeatFraction.WHOLE))
    music.play_tone(587, music.beat(BeatFraction.WHOLE))
    music.play_tone(659, music.beat(BeatFraction.WHOLE))
    music.play_tone(494, music.beat(BeatFraction.WHOLE))
    music.play_tone(523, music.beat(BeatFraction.WHOLE))
    music.play_tone(440, music.beat(BeatFraction.WHOLE))
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_pin_touch_p0():
    pass
input.on_pin_touch_event(TouchPin.P0, input.button_event_down(), on_pin_touch_p0)

def on_pin_touch_p2():
    pass
input.on_pin_touch_event(TouchPin.P2, input.button_event_down(), on_pin_touch_p2)

Würfel = 0
strip: neopixel.Strip = None
SCD30.set_calibration400ppm()
strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
strip.set_brightness(20)
range2 = strip.range(0, 11)
grove.setup_wifi(SerialPin.C17,
    SerialPin.C16,
    BaudRate.BAUD_RATE115200,
    "BYOD-WLAN",
    "ESH_$1_Erdgeschoss")
for Index12 in range(12):
    strip.set_pixel_color(Index12, neopixel.colors(NeoPixelColors.YELLOW))
    strip.show()
    basic.pause(500)
strip.ease_brightness()
basic.pause(2000)
strip.show_color(neopixel.colors(NeoPixelColors.BLACK))

def on_forever():
    basic.pause(100)
    if grove.wifi_ok():
        basic.set_led_color(0x00ff00)
        basic.show_number(SCD30.read_co2())
        grove.send_to_think_speak("4XLXHDPRJ5TKIEJ5",
            SCD30.read_co2(),
            SCD30.read_humidity(),
            SCD30.read_temperature(),
            grove.measure_in_centimeters(DigitalPin.C17),
            0,
            0,
            0,
            0)
        grove.send_to_think_speak("V2L5Y365T1VLJ6B8", 0, 0, 0, 0, SCD30.read_co2(), 0, 0, 0)
    else:
        basic.set_led_color(0xff0000)
basic.forever(on_forever)

def on_forever2():
    Neopixel()
    basic.pause(1000)
    strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
    basic.pause(500)
basic.forever(on_forever2)
