
var Area = require('./Area');
var Engine = require('./Engine');

// get file content

var area = new Area();
area.feed();

function run () {
    if (area.tick()) {
        run();
    }
}