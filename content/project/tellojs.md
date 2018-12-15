+++
date = 2018-02-27T00:00:00
title = "tellojs"
image_preview = "project/tellojs.png"
external_link = "https://github.com/kanekotic/tellojs"
tags = ["tello","dji","drone","iot"]
+++
# ![logomakr_123ujk](https://user-images.githubusercontent.com/3071208/49430616-cddbc300-f7ab-11e8-9356-381c730d0839.png)
[![Build Status](https://travis-ci.org/kanekotic/tellojs.svg?branch=master)](https://travis-ci.org/kanekotic/tellojs)
[![Coverage Status](https://coveralls.io/repos/github/kanekotic/tellojs/badge.svg?branch=master)](https://coveralls.io/github/kanekotic/tellojs?branch=master)
[![npm](https://img.shields.io/npm/dt/tellojs.svg)](https://github.com/kanekotic/tellojs)
[![GitHub license](https://img.shields.io/github/license/kanekotic/tellojs.svg)](https://github.com/kanekotic/tellojs/blob/master/LICENSE)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/kanekotic/tellojs/graphs/commit-activity)
[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://www.paypal.me/kanekotic/)

## Motivation

Provide an async promise based unofficial sdk for the tello drone based on the official [documentation](https://dl-cdn.ryzerobotics.com/downloads/tello/20180910/Tello%20SDK%20Documentation%20EN_1.3.pdf).

## Installation

add it to your project using `npm install tellojs --save` or `yarn add tellojs`

## Usage

this sdk provide functions when you import for the next capabilities:

```js
const sdk = require('tellojs')

const x = number,
    y = number,
    z = number,
    speed = number,
    start = {x, y, z},
    end = {x, y, z}

//CONTROL COMMANDS
await sdk.control.connect()                     // Enter SDK mode.
await sdk.control.takeoff()                     // Auto takeoff.
await sdk.control.land()                        // Auto landing.
await sdk.control.emergency()                   // Stop motors immediately
await sdk.control.stop()                        // Hovers in the air
await sdk.control.move.up(x)                    // Ascend to “x” cm.
await sdk.control.move.down(x)                  // Descend to “x” cm.
await sdk.control.move.left(x)                  // move left to “x” cm.
await sdk.control.move.right(x)                 // move right to “x” cm.
await sdk.control.move.front(x)                 // move forward to “x” cm.
await sdk.control.move.back(x)                  // move backwards to “x” cm.
await sdk.control.move.go(end, speed )          //  fly to x y z in speed (cm/s)
await sdk.control.move.curve(start, end, speed) //  fly to x y z in speed (cm/s)
await sdk.control.rotate.clockwise(x)           // rotate clockwise 'x' degrees.
await sdk.control.rotate.counterClockwise(x)    // rotate counter clockwise 'x' degrees.
await sdk.control.flip.left()                   // Flip to the left.
await sdk.control.flip.right()                  // Flip to the right.
await sdk.control.flip.back()                   // Flip in backward.
await sdk.control.flip.front()                  // Flip in forward.

//SET COMMANDS
await sdk.set.speed(x)                          // set speed to x cm/s
await sdk.set.rc(x, y, z, yaw)                  // Send RC control via four channels.
await sdk.set.wifi(ssid, password)              // Set Wi-Fi with SSID password

//READ COMMANDS
await sdk.read.speed()                          // Obtain current speed (cm/s).
await sdk.read.battery()                        // Obtain current battery percentage.
await sdk.read.time()                           // Obtain current flight time.
await sdk.read.height()                         // Obtain get height (cm)
await sdk.read.temperature()                    // Obtain temperature (°C)
await sdk.read.attitude()                       // Obtain IMU attitude data
await sdk.read.barometer()                      // Obtain barometer value (m)
await sdk.read.tof()                            // Obtain distance value from TOF（cm）
await sdk.read.acceleration()                   // Obtain IMU angular acceleration data (0.001g)
await sdk.read.wifi()                           // Obtain Wi-Fi SNR.
```

##### Web graphic by <a href="http://www.flaticon.com/authors/picol">picol</a> from <a href="http://www.flaticon.com/">Flaticon</a> is licensed under <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a>. Check out the new logo that I created on <a href="http://logomakr.com" title="Logo Makr">LogoMakr.com</a> https://logomakr.com/09u4Zz
