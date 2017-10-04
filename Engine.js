
function Engine(initPos, ordersString, xMax, yMax) {

    var dataPos,
        xInit,
        yInit;

    this.position = { x: 0, y: 0 };
	this.orientation = 0; // 0 => N, 1 => W, 2 => S, 3 => E
    this.ordersString = '';
	this.orderIndex = 0;
    this.limits = { 
        x: { 
            min: 0,
            max: 0
        },
        y: {
            min: 0,
            max: 0
        }
    };

    if (typeof initPos === 'string') {
        dataPos = initPos.split(' ');
        if (dataPos.length === 3) {
            xInit = parseInt(dataPos[0], 10);
            yInit = parseInt(dataPos[1], 10);
            orientInit = ['N', 'W', 'S', 'E'].indexOf(dataPos[2]);

            if (!isNaN(xInit) && !isNaN(yInit) && orientInit !== -1) {
                this.position.x = xInit;
                this.position.y = yInit;
                this.orientation = orientInit;
            } else {                
                throw new Error('Invalid data');
            }
        } else {
            throw new Error('Invalid data');
        }
    } else {
        throw new Error('Invalid data');
    }

    if (typeof ordersString === 'string' && /[AGD]+/.test(ordersString)) {
        this.ordersString = ordersString;
    } else {
        throw new Error('Invalid data');
    }

    if (!isNaN(xMax) && !isNaN(yMax)) {
        this.limits.x.max = xMax
        this.limits.y.max = yMax        
    } else {        
        throw new Error('Invalid data');
    }

}

Engine.prototype.tick = function() {}

module.exports = Engine;