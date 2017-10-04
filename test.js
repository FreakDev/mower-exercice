var assert = require('assert');
var Area = require('./Area');

function getInstance () {
    return new Area();
}

var tests = {
    feedTest: function() {
        var a = getInstance();

        assert.equal(a.dimensions.x, 0) 
        && assert.equal(a.dimensions.y, 0)

        a.feed(`5 5`);
        assert.equal(a.dimensions.x, 5) 
        && assert.equal(a.dimensions.y, 5)

        a = getInstance()
        a.feed(`20 30`)
        assert.equal(a.dimensions.x, 20) 
        && assert.equal(a.dimensions.y, 30)
    }
    
}

Object.keys(tests).forEach(function (testFn) {
    var outStr = testFn.padEnd(20, '.'); 
    try {
        tests[testFn].call();
        outStr += 'OK';
    } catch (e) {
        outStr += 'FAIL (with message : ' + e.message + ')';
    }
    console.log(outStr)
})