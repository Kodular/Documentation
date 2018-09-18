# Lists

* [create empty list](lists.md#emptylist)
* [make a list](lists.md#makealist)
* [add items to list](lists.md#additems)
* [is in list?](lists.md#inlist)
* [length of list](lists.md#lengthoflist)
* [is list empty](lists.md#islistempty)
* [pick a random item](lists.md#pickrandomitem)
* [index in list](lists.md#indexinlist)
* [select list item](lists.md#selectlistitem)
* [insert list item](lists.md#insert)
* [replace list item](lists.md#replace)
* [remove list item](lists.md#removeitem)
* [append to list](lists.md#append)
* [copy list](lists.md#copy)
* [is a list?](lists.md#isalist)
* [list to csv row](lists.md#listtocsvrow)
* [list to csv table](lists.md#listtocsvtable)
* [list from csv row](lists.md#listfromcsvrow)
* [list from csv table](lists.md#listfromcsvtable)
* [lookup in pairs](lists.md#lookupinpairs)

> ### _Need additional help understanding lists? Check out_ [_making lists_](http://appinventor.mit.edu/explore/ai2/support/concepts/lists.html).

## create empty list {#emptylist}

![](/assets/images/blocks/lists/emptylist.png)

Creates an empty list with no elements.

## make a list {#makealist}

![](/assets/images/blocks/lists/makealist.png)

Creates a list from the given blocks. If you don't supply any arguments, this creates an empty list, which you can add elements to later.  
This block is a [mutator](http://appinventor.mit.edu/explore/ai2/support/concepts/mutators.html). Clicking the blue plus sign will allow you to add additional items to your list.

## add items to list {#additems}

![](/assets/images/blocks/lists/additems.png)

Adds the given items to the end of the list.  
The difference between this and `append to list` is that `append to list` takes the items to be appended as a single list  
while `add items to list` takes the items as individual arguments. This block is a [mutator](http://appinventor.mit.edu/explore/ai2/support/concepts/mutators.html).

## is in list? {#inlist}

![](/assets/images/blocks/lists/inlist.png)

If thing is one of the elements of the list, returns true; otherwise, returns false. Note that if a list contains sublists,  
the members of the sublists are not themselves members of the list.

For example, the members of the list \(1 2 \(3 4\)\) are 1, 2, and the list \(3 4\); 3 and 4 are not themselves members of the list.

## length of list {#lengthoflist}

![](/assets/images/blocks/lists/lengthoflist.png)

Returns the number of items in the list

## is list empty? {#islistempty}

![](/assets/images/blocks/lists/islistempty.png)

If list has no items, returns true; otherwise, returns false.

## pick a random item {#pickrandomitem}

![](/assets/images/blocks/lists/pickrandomitem.png)

Picks an item at random from the list.

## index in list {#indexinlist}

![](/assets/images/blocks/lists/indexinlist.png)

Returns the position of the\_thing\_in the list. If not in the list, returns 0.

## select list item {#selectlistitem}

![](/assets/images/blocks/lists/selectlistitem.png)

Selects the item at the given index in the given list. The first list item is at index 1.

## insert list item {#insert}

![](/assets/images/blocks/lists/insert.png)

Inserts an item into the list at the given position

## replace list item {#replace}

![](/assets/images/blocks/lists/replace.png)

Inserts\_replacement\_into the given list at position index. The previous item at that position is removed.

## remove list item {#removeitem}

![](/assets/images/blocks/lists/removeitem.png)

Removes the item at the given position.

## append to list {#append}

![](/assets/images/blocks/lists/append.png)

Adds the items in the second list to the end of the first list.

## copy list {#copy}

![](/assets/images/blocks/lists/copy.png)

Makes a copy of a list, including copying all sublists.

## is a list? {#isalist}

![](/assets/images/blocks/lists/isalist.png)

If\_thing\_is a list, returns true; otherwise, returns false.

## list to csv row {#listtocsvrow}

![](/assets/images/blocks/lists/listtocsvrow.png)

Interprets the list as a row of a table and returns a CSV \(comma-separated value\) text representing the row.  
Each item in the row list is considered to be a field, and is quoted with double-quotes in the resulting CSV text. Items are separated by commas.  
For example, converting the list \(a b c d\) to a CSV row produces \("a", "b", "c", "d"\).  
The returned row text does not have a line separator at the end.

## list from csv row {#listfromcsvrow}

![](/assets/images/blocks/lists/listfromcsvrow.png)

Parses a text as a CSV \(comma-separated value\) formatted row to produce a list of fields.  
For example, converting \("a", "b", "c", "d"\) to a list produces \(a b c d\).

## list to csv table {#listtocsvtable}

![](/assets/images/blocks/lists/listtocsvtable.png)

Interprets the list as a table in row-major format and returns a CSV \(comma-separated value\) text representing the table.  
Each item in the list should itself be a list representing a row of the CSV table.  
Each item in the row list is considered to be a field, and is quoted with double-quotes in the resulting CSV text.  
In the returned text, items in rows are separated by commas and rows are separated by CRLF \(\r\n\).

## list from csv table {#listfromcsvtable}

![](/assets/images/blocks/lists/listtocsvtable%20%281%29.png)

Parses a text as a CSV \(comma-separated value\) formatted table to produce a list of rows, each of which is a list of fields.  
Rows can be separated by newlines \(\n\) or CRLF \(\r\n\).

## lookup in pairs {#lookupinpairs}

![](/assets/images/blocks/lists/lookupinpairs.png)

Used for looking up information in a dictionary-like structure represented as a list.  
This operation takes three inputs, a _key_, a list _pairs_, and a _notFound_ result, which by default, is set to "not found".  
Here pairs must be a list of pairs, that is, a list where each element is itself a list of two elements.  
Lookup in pairs finds the first pair in the list whose first element is the key, and returns the second  
element.

For example, if the list is \(\(a apple\) \(d dragon\) \(b boxcar\) \(cat 100\)\) then looking up 'b' will return 'boxcar'.  
If there is no such pair in the list, then the\_lookup in pairs\_will return the notFound result. If pairs is not a list of  
pairs, then the operation will signal an error.
