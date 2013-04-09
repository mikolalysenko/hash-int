# hash-int
Given an integer, deterministically computes a psuedorandom unsigned 32 bit integer.  Based on Thomas Wang's 7-shift integer hash algorithm.  For more discussion and experiments, see the following references:

* Thomas Wang's Original Homepage (now down):  http://www.cris.com/~Ttwang/tech/inthash.htm
* Bob Jenkins' Write Up: http://burtleburtle.net/bob/hash/integer.html

## Install

    npm install hash-int
    
## Example

```javascript
var hashInt = require("hash-int")

for(var i=-10; i<=10; ++i) {
  console.log(hashInt(i))
}
```

### `require("hash-int")(x)`
Given an integer `x` as a seed, computes a psuedorandom integer.

* `x` the seed value

**Returns**: A signed 32 bit integer representing the value of `x`

# Credits
Algorithm by Thomas Wang

JS Port (c) 2013 Mikola Lysenko. MIT License