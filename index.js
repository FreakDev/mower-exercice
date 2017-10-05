
var Area = require('./Area');
var Engine = require('./Engine');
var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) throw err;
    
    var area = new Area();
    area.feed(data);
    
    function run () {
        if (area.tick()) {
            run();
        }
    }
    run();
});