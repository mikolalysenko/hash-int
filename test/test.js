var hashInt = require("../hashint.js")
  , numeric = require("numeric")

require("tap").test("hash-int", function(t) {


  for(var i=1; i<=100; ++i) {
    t.assert(hashInt(i) !== hashInt(-1))
  }
  
  //Check cascading
  var tab = numeric.rep([32,32], 0)
  for(var i=-10000; i<10000; ++i) {
    var n = hashInt(i)
    for(var j=0; j<32; ++j) {
      var m = hashInt(i ^ (1<<j)) ^ n
      for(var k=0; k<32; ++k) {
        if(m & (1 << k)) {
          tab[j][k] += 1
        }
      }
    }
  }
  for(var i=0; i<32; ++i) {
    for(var j=0; j<32; ++j) {
      t.assert(5000 < tab[i][j])
      t.assert(tab[i][j] < 15000)
    }
  }

  t.end()
})