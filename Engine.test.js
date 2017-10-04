var assert = require('assert')
var Engine = require('./Engine')

var tests = [
    ['test constructor', function constructorTest() {
        var e;
        e = new Engine('1 2 N', 'GAGAGAGAA', 5, 5)
        assert.equal(e.position.x, 1);
        assert.equal(e.position.y, 2);
        assert.equal(e.orientation, 0);
        assert.equal(e.ordersString, 'GAGAGAGAA');
        assert.equal(e.orderIndex, 0);
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
    }],
    ['execute one order', function tickTest() {
        var e;
        e = new Engine('1 2 N', 'A', 5, 5)
        e.tick()
        assert.equal(e.orderIndex, 1)
        assert.equal(e.position.x, 1);
        assert.equal(e.position.y, 3);
        assert.equal(e.orientation, 0);

        e = new Engine('1 3 N', 'G', 5, 5)
        e.tick()
        assert.equal(e.position.x, 1);
        assert.equal(e.position.y, 3);
        assert.equal(e.orientation, 1);

        e = new Engine('1 3 W', 'A', 5, 5)        
        e.tick()
        assert.equal(e.position.x, 0);
        assert.equal(e.position.y, 3);
        assert.equal(e.orientation, 1);

        e = new Engine('0 3 W', 'G', 5, 5)        
        e.tick()
        assert.equal(e.position.x, 0);
        assert.equal(e.position.y, 3);
        assert.equal(e.orientation, 2);

        e = new Engine('0 3 S', 'A', 5, 5)        
        e.tick()
        assert.equal(e.position.x, 0);
        assert.equal(e.position.y, 2);
        assert.equal(e.orientation, 2);

        e = new Engine('0 2 S', 'G', 5, 5)        
        e.tick()
        assert.equal(e.position.x, 0);
        assert.equal(e.position.y, 2);
        assert.equal(e.orientation, 3);

        e = new Engine('0 2 E', 'A', 5, 5)        
        e.tick()
        assert.equal(e.position.x, 1);
        assert.equal(e.position.y, 2);
        assert.equal(e.orientation, 3);

        e = new Engine('0 2 E', 'G', 5, 5)
        e.tick()
        assert.equal(e.position.x, 1);
        assert.equal(e.position.y, 2);
        assert.equal(e.orientation, 0);

        e = new Engine('1 2 N', 'D', 5, 5)
        e.tick()
        assert.equal(e.position.x, 1);
        assert.equal(e.position.y, 2);
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