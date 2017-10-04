function Area() {
    this.dimensions = { x: 0, y: 0}
    this.engines = [];
    this.engineIndex = 0;
}

Area.prototype.currentEngine = function() {}

Area.prototype.feed = function() {}

Area.prototype.addEngine = function() {}

Area.prototype.tick = function() {}

module.exports = Area;