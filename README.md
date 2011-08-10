# Fayer

* Sources: <http://github.com/sandeepjain/fayer>
* Author: [Sandeep Jain](http://jsvrocks.com/)

Fayer is provided under Dual licensed under the MIT or GPL Version 2 licenses..  

## Usage Guide

###Intialize (Optional)###

Use this function to instruct `fayer` to find unique page string.

`fayer.init(func/attr)` 

func (Function): This function must return string.
attr (String): If this is string then, fayer will search identifier string at body[function]

If no parameter is passed then `fayer` will search for identifier string at body[id].

###Fire functions###

`fayer.on(page, func)`
`fayer.notOn(page, func)`

page (Array/String): Array/String containing unique page identifiers.
func (Function): Function to be fired if condition is satisfied.

###Other Helpful functions###

`fayer.is(page)`

page (String): Unique page identifier.

`fayer.isIn(page)`

page (Array/String): Unique page identifier. 



## Changelog

### v0.1 · *2011-08-10*
