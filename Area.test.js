var assert = require('assert');
var Area = require('./Area');
var Engine = require('./Engine')

function getInstance () {
    return new Area();
}

var tests = [
    ['init area dimensions', function feedTest() {
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

        assert.throws(a.feed, /Invalid data/)
        assert.throws(a.feed.bind(a, ``), /Invalid data/)
        assert.throws(a.feed.bind(a, `1`), /Invalid data/)
        assert.throws(a.feed.bind(a, `a b`), /Invalid data/)
        assert.throws(a.feed.bind(a, `10 b`), /Invalid data/)
    }],
    ['init engines', function feedTest() {
        var a = getInstance();

        assert.equal(a.engines.length, 0) 
        && assert.equal(a.engineIndex, 0)

        var dataSets = [
`5 5
1 2 N
GAGAGAGAA
3 3 E
AADAADADDA`,
`5 5
1 2 N
GAGAGAGAA
3 3 E
AADAADADDA
1 2 N
GAGAGAGAA`
,
`5 5
3 3 E
AADAADADDA`
        ]

        a = getInstance();
        a.feed(dataSets[0]);
        assert.equal(a.engines.length, 2)
        assert.equal(a.engineIndex, 0)        
        assert.equal(a.engines[0] instanceof Engine, true)
        assert.equal(a.engines[1] instanceof Engine, true)
        
        a = getInstance();
        a.feed(dataSets[1]);
        assert.equal(a.engines.length, 3)
        assert.equal(a.engineIndex, 0)        
        assert.equal(a.engines[0] instanceof Engine, true)
        assert.equal(a.engines[1] instanceof Engine, true)
        assert.equal(a.engines[2] instanceof Engine, true)
        
        a = getInstance();
        a.feed(dataSets[2]);
        assert.equal(a.engines.length, 1)
        assert.equal(a.engineIndex, 0)        
        assert.equal(a.engines[0] instanceof Engine, true)


        var invalidDataSets = [
`5 5
1 2 N
3 3 E
AADAADADDA`,
`5 5
GAGAGAGAA
3 3 E
AADAADADDA`
,
`5 5
AADAADADDA`,
`5 5
3 3 E`
         ]            

        assert.throws(a.feed.bind(a, invalidDataSets[0]), /Invalid data/)
        assert.throws(a.feed.bind(a, invalidDataSets[1]), /Invalid data/)
        assert.throws(a.feed.bind(a, invalidDataSets[2]), /Invalid data/)
    }],
    ['test whole scenario', function tickTest() {

        a = getInstance();
        a.feed(
`5 5
1 2 N
GAGAGAGAA
3 3 E
AADAADADDA`
        );

        assert.equal(a.tick(), true)
        assert.equal(a.tick(), true)
        assert.equal(a.tick(), true)
        assert.equal(a.tick(), true)
        assert.equal(a.tick(), true)
        assert.equal(a.tick(), true)
        assert.equal(a.tick(), true)
        assert.equal(a.tick(), true)
        assert.equal(a.tick(), true)
        assert.equal(a.engineIndex, 1)

        assert.equal(a.tick(), true)
        assert.equal(a.tick(), true)
        assert.equal(a.tick(), true)
        assert.equal(a.tick(), true)
        assert.equal(a.tick(), true)
        assert.equal(a.tick(), true)
        assert.equal(a.tick(), true)
        assert.equal(a.tick(), true)
        assert.equal(a.tick(), true)
        assert.equal(a.tick(), false)

        assert.equal(a.engines[0].position.x, 1)
        assert.equal(a.engines[0].position.y, 3)
        assert.equal(a.engines[0].orientation, 3)

        assert.equal(a.engines[1].position.x, 5)
        assert.equal(a.engines[1].position.y, 1)
        assert.equal(a.engines[1].orientation, 2)        
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