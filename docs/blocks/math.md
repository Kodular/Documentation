# Math

> **Note**: _any Math blocks that have unplugged sockets will read the unplugged spot as a 0._

* [0 \(basic number block\)](math.md#number)
* [=](math.md#=)
* [≠](math.md#≠)
* [&gt;](math.md#gt)
* [≥](math.md#gte)
* [&lt;](math.md#lt)
* [≤](math.md#lte)
* [+](math.md#add)
* [-](math.md#subtract)
* [x](math.md#multiply)
* [/](math.md#divide)
* [^](math.md#exponent)
* [bitwise and](math.md#bitwise_and)
* [bitwise or (inclusive)](math.md#bitwise_ior)
* [bitwise or (exclusive)](math.md#bitwise_xor)
* [random integer](math.md#randomint)
* [random fraction](math.md#randomfrac)
* [random set seed to](math.md#randomseed)
* [min](math.md#min)
* [max](math.md#max)
* [square root](math.md#sqrt)
* [absolute](math.md#abs)
* [neg](math.md#neg)
* [log](math.md#log)
* [e^](math.md#e)
* [round](math.md#round)
* [ceiling](math.md#ceiling)
* [floor](math.md#floor)
* [modulo](math.md#modulo)
* [remainder](math.md#remainder)
* [quotient](math.md#quotient)
* [sin](math.md#sin)
* [cos](math.md#cos)
* [tan](math.md#tan)
* [asin](math.md#asin)
* [acos](math.md#acos)
* [atan](math.md#atan)
* [atan2](math.md#atan2)
* [convert radians to degrees](math.md#convertrad)
* [convert degrees to radians](math.md#convertdeg)
* [format as a decimal](https://github.com/Kodular/docs/tree/6b89ce9eb8c93762fd238491325318be0e89c35f/format%20as%20a%20decimal/README.md)
* [is a number](math.md#isnumber)
* [convert number](math.md#convertnumber)

> ### _Can't find the math block you're looking for in the built-in blocks?_
>
> Some math blocks are dropdowns which means that they can be converted into different blocks. Here's a list of what is included in each dropdown:
>
> * **=, ≠, &gt;, ≥, &lt;, ≤**
>
> ![](/assets/images/blocks/math/equals.gif)
>
> * **min, max**
>
> ![](/assets/images/blocks/math/minmax.gif)
>
> * **square root, absolute, neg, log, e^, round, ceiling, floor**
>
> ![](/assets/images/blocks/math/sqrt.gif)
>
> * **modulo of, remainder of, quotient of**
>
> ![](/assets/images/blocks/math/modulo.gif)
>
> * **sin, cos, tan, asin, acos, atan**
>
> ![](/assets/images/blocks/math/sin.gif)
>
> * **convert radians to degrees, convert degrees to radians**
>
> ![](/assets/images/blocks/math/convert.gif)

## Basic Number Block {#number}

![](/assets/images/blocks/math/number.png)

Can be used as any positive or negative number \(decimals included\). Double clicking on the "0" in the block will allow you to change the number.

## = {#=}

![](/assets/images/blocks/math/equal.png)

Tests whether two numbers are equal and returns true or false.

## ≠

![](/assets/images/blocks/math/notequal.png)

Tests whether two numbers are not equal and returns true or false.

## &gt; {#gt}

![](/assets/images/blocks/math/greater.png)

Tests whether the first number is greater than the second number and returns true or false.

## ≥ {#gte}

![](/assets/images/blocks/math/greaterequal.png)

Tests whether the first number is greater than or equal to the second number and returns true or false.

## &lt; {#lt}

![](/assets/images/blocks/math/less.png)

Tests whether the first number is less than the second number and returns true or false.

## ≤ {#lte}

![](/assets/images/blocks/math/lessequal.png)

Tests whether the first number is less than or equal to the second number and returns true or false.

## + {#add}

![](/assets/images/blocks/math/plus.png)

Returns the result of adding any amount of blocks that have a number value together. Blocks with a number value include the basic number block, length of list or text, variables with a number value, etc. This block is a[mutator](http://appinventor.mit.edu/explore/ai2/support/concepts/mutators.html)and can be expanded to allow more numbers in the sum.

![](/assets/images/blocks/math/plus.gif)

## - {#subtract}

![](/assets/images/blocks/math/minus.png)

Returns the result of subtracting the second number from the first.

## x {#multiply}

![](/assets/images/blocks/math/multiply.png)

Returns the result of multiplying any amount of blocks that have a number value together. It is a [mutator](http://appinventor.mit.edu/explore/ai2/support/concepts/mutators.html) block and can be expanded to allow more numbers in the product.

![](/assets/images/blocks/math/multiply.gif)

## / {#divide}

![](/assets/images/blocks/math/divide.png)

Returns the result of dividing the first number by the second.

## ^ {#exponent}

![](/assets/images/blocks/math/exponent.png)

Returns the result of the first number raised to the power of the second.

## Bitwise And {#bitwise_and}
![](/assets/images/blocks/math/bitwise_and.png)

Takes two numbers and compares each pair of bits. Each bit of the result is 1 only if the corresponding bits of both operands are 1.

## Bitwise Or (Inclusive) {#bitwise_ior}
![](/assets/images/blocks/math/bitwise_ior.png)

Takes two numbers and compares each pair of bits. Each bit of the result is 1 if either of the corresponding bits in each operand is 1.

## Bitwise Or (Exclusive) {#bitwise_xor}
![](/assets/images/blocks/math/bitwise_xor.png)

Takes two numbers and compares each pair of bits. Each bit of the result is 1 only if one corresponding bit in the operands is 1 and the other is 0.

## random integer {#randomint}

![](/assets/images/blocks/math/randomint.png)

Returns a random integer value between the given values, inclusive. The order of the arguments doesn't matter.

## random fraction {#randomfrac}

![](/assets/images/blocks/math/randomfrac.png)

Returns a random value between 0 and 1.

## random set seed to {#randomseed}

![](/assets/images/blocks/math/randomseed.png)

Use this block to generate repeatable sequences of random numbers. You can generate the same sequence of random numbers by first calling random set seed with the same value. This is useful for testing programs that involve random values.

## min {#min}

![](/assets/images/blocks/math/min.png)

Returns the smallest value of a set of numbers. If there are unplugged sockets in the block, min will also consider 0 in its set of numbers. This block is a [mutator](http://appinventor.mit.edu/explore/ai2/support/concepts/mutators.html) and a dropdown.

## max {#max}

![](/assets/images/blocks/math/max.png)

Returns the largest value of a set of numbers. If there are unplugged sockets in the block, max will also consider 0 in its set of numbers. This block is a [mutator](http://appinventor.mit.edu/explore/ai2/support/concepts/mutators.html) and a dropdown.

## square root {#sqrt}

![](/assets/images/blocks/math/sqrt.png)

Returns the square root of the given number.

## absolute {#abs}

![](/assets/images/blocks/math/abs.png)

Returns the absolute value of the given number.

## neg {#neg}

![](/assets/images/blocks/math/neg.png)

Returns the negative of a given number.

## log {#log}

![](/assets/images/blocks/math/log.png)

Returns the natural logarithm of a given number, that is, the logarithm to the base e \(2.71828...\).

## e^ {#e}

![](/assets/images/blocks/math/e.png)

Returns e \(2.71828...\) raised to the power of the given number.

## round {#round}

![](/assets/images/blocks/math/round.png)

Returns the given number rounded to the closest integer. If the fractional part is &lt; .5 it will be rounded down. It it is &gt; .5 it will be rounded up. If it is exactly equal to .5, numbers with an even whole part will be rounded down, and numbers with an odd whole part will be rounded up. \(This method is called _round to even_.\)

## ceiling {#ceiling}

![](/assets/images/blocks/math/ceiling.png)

Returns the smallest integer that's greater than or equal to the given number.

## floor {#floor}

![](/assets/images/blocks/math/floor.png)

Returns the greatest integer that's less than or equal to the given number.

## modulo {#modulo}

![](/assets/images/blocks/math/modulo.png)

Modulo\(a,b\) is the same as remainder\(a,b\) when a and b are positive. More generally, modulo\(a,b\) is defined for any a and b so that \(floor\(a/b\)× b\) + modulo\(a,b\) = a. For example, modulo\(11, 5\) = 1, modulo\(-11, 5\) = 4, modulo\(11, -5\) = -4, modulo\(-11, -5\) = -1. Modulo\(a,b\) always has the same sign as b, while remainder\(a,b\) always has the same sign as a.

## remainder {#remainder}

![](/assets/images/blocks/math/remainder.png)

Remainder\(a,b\) returns the result of dividing a by b and taking the remainder. The remainder is the fractional part of the result multiplied by b.

For example, remainder\(11,5\) = 1 because

In this case, is the fractional part. We multiply this by b, in this case 5 and we get 1, our remainder.

Other examples are remainder\(-11, 5\) = -1, remainder\(11, -5\) = 1, and remainder\(-11, -5\) = -1.

## quotient {#quotient}

![](/assets/images/blocks/math/quotient.png)

Returns the result of dividing the first number by the second and discarding any fractional part of the result.

## sin {#sin}

![](/assets/images/blocks/math/sin.png)

Returns the sine of the given number in degrees.

## cos {#cos}

![](/assets/images/blocks/math/cos.png)

Returns the cosine of the given number in degrees.

## tan {#tan}

![](/assets/images/blocks/math/tan.png)

Returns the tangent of the given number in degrees.

## asin {#asin}

![](/assets/images/blocks/math/asin.png)

Returns the arcsine of the given number in degrees.

## acos {#acos}

![](/assets/images/blocks/math/acos.png)

Returns the arccosine of the given number in degrees.

## atan {#atan}

![](/assets/images/blocks/math/atan.png)

Returns the arctangent of the given number in degrees.

## atan2 {#atan2}

![](/assets/images/blocks/math/atan2.png)

Returns the arctangent of y/x, given y and x.

## convert radians to degrees {#convertrad}

![](/assets/images/blocks/math/convertrad.png)

Returns the value in degrees of the given number in radians. The result will be an angle in the range \[0, 360\)

## convert degrees to radians {#convertdeg}

![](/assets/images/blocks/math/convertdeg.png)

Returns the value in radians of the given number in degrees. The result will be an angle in the range \[-π , +π\)

## format as decimal {#format}

![](/assets/images/blocks/math/format.png)

Formats a number as a decimal with a given number of places after the decimal point. The number of places must be a non-negative integer. The result is produced by rounding the number \(if there were too many places\) or by adding zeros on the right \(if there were too few\).

## is a number {#isnumber}

![](/assets/images/blocks/math/isnumber.png)

Returns true if the given object is a number, and false otherwise.

## convert number {#convertnumber}

![](/assets/images/blocks/math/convertnumber.png)

Takes a text string that represents a positive integer in one base and returns a string that represents the same number is another base. For example, if the input string is 10, then converting from base 10 to binary will produce the string 1010; while if the input string is the same 10, then converting from binary to base 10 will produce the string 2. If the input string is the same 10, then converting from base 10 to hex will produce the string A.
