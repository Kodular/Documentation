# Text

* [string](text.md#string)
* [join](text.md#join)
* [length](text.md#length)
* [is empty?](text.md#isempty)
* [is string?](text.md#isstring)
* [compare texts](text.md#compare)
* [trim](text.md#trim)
* [upcase](text.md#upcase)
* [downcase](text.md#downcase)
* [starts at](text.md#startsat)
* [contains](text.md#contains)
* [split at first](text.md#splitatfirst)
* [split at first of any](text.md#splitatfirstofany)
* [split](text.md#split)
* [split at any](text.md#splitatany)
* [split at spaces](text.md#splitatspaces)
* [segment](text.md#segment)
* [replace all](text.md#replaceall)
* [obfuscated text](text.md#obfuscated)

## " " {#string}

![](/assets/images/blocks/text/string.png)

Contains a text string.

This string can contain any characters \(letters, numbers, or other special characters\). On Kodular, it will be considered a Text object.

## join {#join}

![](/assets/images/blocks/text/join.png)

Appends all of the inputs to make a single string. If no inputs, returns an empty string.

## length {#length}

![](/assets/images/blocks/text/length.png)

Returns the number of characters including spaces in the string. This is the length of the given text string.

## is empty {#isempty}

![](/assets/images/blocks/text/isempty.png)

Returns whether or not the string contains any characters \(including spaces\). When the string length is 0, returns true otherwise it returns false.

## is string? {#isstring}

![](/assets/images/blocks/text/isstring.png)

Returns true if input is a string.

## compare texts &lt;&gt; = {#compare}

![](/assets/images/blocks/text/compare.gif)

Returns whether or not the first string is lexicographically &lt;, &gt;, or = the second string depending on which dropdown is selected.

A string a considered lexicographically greater than another if it is alphabetically greater than the other string. Essentially, it would come after it in the dictionary. All uppercase letters are considered smaller or to occur before lowercase letters. _cat would be &gt; Cat_.

## trim {#trim}

![](/assets/images/blocks/text/trim.png)

Removes any spaces leading or trailing the input string and returns the result.

## upcase {#upcase}

![](/assets/images/blocks/text/upcase.png)

Returns a copy of its text string argument converted to all upper case

## downcase {#downcase}

![](/assets/images/blocks/text/downcase.png)

Returns a copy of its text string argument converted to all lower case

## starts at {#startsat}

![](/assets/images/blocks/text/startsat.png)

Returns the character position where the first character of piece first appears in text, or 0 if not present. For example, the location of ana in havana banana is 4.

## contains {#contains}

![](/assets/images/blocks/text/contains.png)

Returns true if _piece appears in text_; otherwise, returns false.

## split at first {#splitatfirst}

![](/assets/images/blocks/text/splitatfirst.png)

Divides the given text into two pieces using the location of the first occurrence of at as the dividing point, and returns a two-item list consisting of the piece before the dividing point and the piece after the dividing point. Splitting _apple,banana,cherry,dogfood with a comma as the splitting point returns a list of two items: the first is the text apple and the second is the text banana,cherry,dogfood_. Notice that the comma after apple doesn't appear in the result, because that is the dividing point.

## split at first of any {#splitatfirstofany}

![](/assets/images/blocks/text/splitAtFirstOfAny.png)

Divides the given text into a two-item list, using the first location of any item in the list at as the dividing point.

Splitting _i love apples bananas apples grapes by the list \[ba_,_ap_\] would result in a list of two items the first being _i love and the second ples bananas apples grapes_.

## split {#split}

![](/assets/images/blocks/text/split.png)

Divides text into pieces using at as the dividing points and produces a list of the results. Splitting _one,two,three,four at_ ,_\(comma\) returns the list one two three four_. Splitting _one-potato,two-potato,three-potato,four at_-potato_, returns the list one two three four_.

## split at any {#splitatany}

![](/assets/images/blocks/text/splitAtAny.png)

Divides the given text into a list, using any of the items in at as the dividing point, and returns a list of the results.

Splitting _appleberry,banana,cherry,dogfood with at as the two-element list whose first item is a comma and whose second item is rry returns a list of four items: \[applebe, banana, che, dogfood,_\]

## split at spaces {#splitatspaces}

![](/assets/images/blocks/text/splitatspaces.png)

Divides the given text at any occurrence of a space, producing a list of the pieces.

## segment {#segment}

![](/assets/images/blocks/text/segment.png)

Extracts part of the text starting at start position and continuing for length characters.

## replace all {#replaceall}

![](/assets/images/blocks/text/replaceall.png)

Returns a new text string obtained by replacing all occurrences of the substring with the replacement.

Replace all with _She loves eating. She loves writing. She loves coding as the text, She as the segment, and Hannah as the replacement would result in Hannah loves eating. Hannah loves writing. Hannah loves coding_.

## obfuscated text {#obfuscated}
![](/assets/images/blocks/text/obfuscated.png)

Produces text, like a text block.  The difference is that the text is not easily discoverable by examining the app's APK.  Use this when creating apps to distribute that include confidential information, for example, API keys. Warning: This provides only very low security against expert adversaries.
