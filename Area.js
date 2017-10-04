var Engine = require('./Engine')

function Area() {
    this.dimensions = { x: 0, y: 0}
    this.engines = [];
    this.engineIndex = 0;
}

Area.prototype.currentEngine = function() {}

Area.prototype.feed = function(data) {

    if (typeof data === 'string') {
        var dimensionsSpec,
            enginesSpec,
            i,
            lines = data.split('\n'),
            xMax,
            yMax;
        
        if (lines.length) {
    
            // process dimensions
            dimensionsSpec = lines[0].split(' ');
            if (dimensionsSpec.length != 2) {
                throw Error('Invalid data');
            } else {
                
                xMax = parseInt(dimensionsSpec[0], 10);
                yMax = parseInt(dimensionsSpec[1], 10);

                if (isNaN(xMax) || isNaN(yMax)) {
                    throw Error('Invalid data');
                } else {
                    this.dimensions.x = xMax;
                    this.dimensions.y = yMax;
                }
            }

            // process engines
            enginesSpec = lines.slice(1);
            if (enginesSpec.length % 2 != 0) {
                throw Error('Invalid data');
            } else {
                for(i=0; i<(enginesSpec.length / 2); i++) {
                    this.engines.push(new Engine(enginesSpec[i], enginesSpec[i + 1]));
                }
            }
        }        
    } else {
        throw Error('Invalid data');
    }

}

Area.prototype.addEngine = function() {}

Area.prototype.tick = function() {}

module.exports = Area;