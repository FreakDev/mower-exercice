
function Engine(init, ordersString) {
	position = { x: 0, y: 0 };
	orientation = 0; // 0 => N, 1 => W, 2 => S, 3 => E
    ordersString = '';
	orderIndex = 0;
    limits = { 
        x: { 
            min: 0,
            max: 0
        },
        y: {
            min: 0,
            max: 0
        }
    };
}

Engine.prototype.tick = function() {}

Engine.prototype.setLimits = function () {}

module.exports = Engine;