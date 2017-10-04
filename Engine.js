
function Engine(initPos, ordersString, xMax, yMax) {

    var dataPos,
        xInit,
        yInit;

    this.position = { x: 0, y: 0 };
	this.orientation = 0; // 0 => W, 1 => S, 2 => E, 3 => N
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
            orientInit = ['W', 'S', 'E', 'N'].indexOf(dataPos[2]);

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

Engine.prototype.tick = function() {
    var order = this.ordersString.substr(this.orderIndex, 1),
        inc;

    switch (order) {
        case 'D':
            this.orientation = this.orientation > 0 ? this.orientation - 1 : 3;
            break;
        case 'G':
            this.orientation = this.orientation < 3 ? this.orientation + 1 : 0;
            break;
        case 'A': 
            inc = Math.floor(this.orientation / 2) * 2 - 1;
            if (this.orientation % 2 === 0) {
                this.position.x += inc
            } else {
                this.position.y += inc
            }
            break;
    }

    this.orderIndex++;
}

module.exports = Engine;