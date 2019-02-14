#!/usr/bin/env checkio --domain=js run humpty-dumpty-form

// https://js.checkio.org/mission/humpty-dumpty-form/

// 'I said you LOOKED like an egg, Sir,' Alice gently explained. 'And some eggs are very pretty, you know' she added, hoping to turn her remark into a sort of a compliment.

// 'Some people,' said Humpty Dumpty, looking away from her as usual, 'have no more sense than a baby!'

// Alice didn't know what to say to this: it wasn't at all like conversation, she thought, as he never said anything to HER; in fact, his last remark was evidently addressed to a tree--so she stood and softly repeated to herself:--

// Humpty Dumpty sat on a wall:
// Humpty Dumpty had a great fall.
// All the King's horses and all the King's men
// Couldn't put Humpty Dumpty in his place again.
// 'That last line is much too long for the poetry,' she added, almost out loud, forgetting that Humpty Dumpty would hear her.

// "Through the Looking-Glass." Lewis Carroll
// After reading this fragment Nicola wants to build his own "Humpty Dumpty". As a basis he chooses the spheroid (read more about it on Wikipedia). We know the height and width (in inches) for this spheroid. For the job at hand, Nikola needs to know how much material is required.

// You can help him and create a function to calculate the volume (cubic inches) and the surface area (square inches).

// spheroid
// Tips: Be careful with sin-1x -- it’s an arcsin.

// Input: Two arguments. The height and width as integers.

// Output: The volume and surface area as a list of floats. The results should be accurate to two decimals.

// Example:

// spheroid(4, 2) == [8.38, 21.48]
// spheroid(2, 2) == [4.19, 12.57]
// spheroid(2, 4) == [16.76, 34.69]

// How it is used:
// This is a simple math task, but we want to introduce you to the splendid shape -- spheroid (in case you hadn't heard of it yet).

// The prolate spheroid is the shape of the ball in several sports, such as in rugby and Australian football. In American football, a more pointed prolate spheroid is used. Several moons of the Solar system approximate prolate spheroids in shape, though they are actually scalene. Examples are Mimas, Enceladus, and Tethys which orbit Saturn and Miranda which orbits Uranus.

// The true shape of the Earth is called an Oblate Spheroid, though it’s only very slightly oblate. The diameter from the North Pole to the South Pole (the shortest diameter) is approximately 12,714 km. The equatorial diameter (the longest diameter) is approximately 12,756 km. This is not a big difference, but it does mean the Earth is not quite a sphere.

// Precondition: 0 < width < 100
// 0 < height < 100

// END_DESC

"use strict";

function spheroid(height, width) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    // These "asserts" are used for self-checking and not for an auto-testing

    assert.deepEqual(spheroid(4, 2), [8.38, 21.48])
    assert.deepEqual(spheroid(2, 2), [4.19, 12.57])
    assert.deepEqual(spheroid(2, 4), [16.76, 34.69])
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}