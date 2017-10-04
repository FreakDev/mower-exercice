var assert = require('assert')
var Engine = require('./Engine')

var tests = [
    ['test constructor', function constructorTest() {

        e = new Engine('1 2 N', 'GAGAGAGAA', 5, 5)
        assert.equal(e.position.x, 1);
        assert.equal(e.position.y, 2);
        assert.equal(e.orientation, 0);
        assert.equal(e.ordersString, 'GAGAGAGAA');
        assert.equal(e.limits.x.min, 0);
        assert.equal(e.limits.x.max, 5);
        assert.equal(e.limits.y.min, 0);
        assert.equal(e.limits.y.max, 5);

        e = new Engine('4 11 W', 'DGADGAGDA', 20, 12)
        assert.equal(e.position.x, 4);
        assert.equal(e.position.y, 11);
        assert.equal(e.orientation, 1);
        assert.equal(e.ordersString, 'DGADGAGDA');
        assert.equal(e.limits.x.min, 0);
        assert.equal(e.limits.x.max, 20);
        assert.equal(e.limits.y.min, 0);
        assert.equal(e.limits.y.max, 12);

        e = new Engine('14 7 S', 'DGADGAGDA', 20, 12)
        assert.equal(e.position.x, 14);
        assert.equal(e.position.y, 7);
        assert.equal(e.orientation, 2);

        e = new Engine('14 7 E', 'DGADGAGDA', 20, 12)
        assert.equal(e.orientation, 3);

    }]
]

tests.forEach(function (test) {
    var outStr = test[0].padEnd(80, '.'); 
    try {
        test[1].call();
        outStr += 'OK';
    } catch (e) {
        outStr += 'FAIL (with message : ' + e.message + ')';
    }
    console.log(outStr)
})