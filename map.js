var Map;
var __extends = function(child, parent) {
    var ctor = function(){};
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.prototype.constructor = child;
    if (typeof parent.extended === "function") parent.extended(child);
    child.__super__ = parent.prototype;
  };
Map = function() {
  Map.__super__.constructor.call(this);
  this.loadMap();
  return this;
};
__extends(Map, XCNode);
Map.prototype.loadMap = function() {
  var _result, _result2, empty, fileName, height, i, map, type, width, x, y;
  map = [];

		map.width = 20
		map.height = 24
		map.tileSize = 16
		map.tiles= [
			['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',],
			['#','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','#',],
			['#','.','@','@','@','@','.','.','.','.','.','.','.','.','.','.','.','.','.','#',],
			['#','.','@','@','@','@','.','.','.','.','.','.','.','.','.','.','.','.','.','#',],
			['#','.','@','@','@','@','.','.','.','.','.','.','.','.','.','.','.','.','.','#',],
			['#','.','@','@','@','@','.','.','.','.','.','.','.','.','.','.','.','.','.','#',],
			['#','.','@','@','@','@','.','.','.','.','.','.','.','.','.','.','.','.','.','#',],
			['#','.','@','.','.','@','.','.','.','.','.','.','.','.','.','.','.','.','.','#',],
			['#','.','@','.','.','@','.','.','.','.','.','.','.','.','.','.','.','.','.','#',],
			['#','.','@','.','.','@','.','.','.','.','.','.','.','.','.','.','.','.','.','#',],
			['#','.','@','.','.','@','.','.','.','.','.','.','.','.','.','.','.','.','.','#',],
			['#','.','@','@','@','@','.','.','.','.','.','.','.','.','.','.','.','.','.','#',],
			['#','.','@','@','@','@','.','.','.','.','.','.','.','.','.','.','.','.','.','#',],
			['#','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','#',],
			['#','.','@','@','@','@','.','.','.','.','.','.','.','.','.','.','.','.','.','#',],
			['#','.','@','@','@','@','.','.','.','.','.','.','.','.','.','.','.','.','.','#',],
			['#','.','@','@','@','@','.','.','.','.','.','.','.','.','.','.','.','.','.','#',],
			['#','.','@','@','@','@','.','.','.','.','.','.','.','.','.','.','.','.','.','#',],
			['#','.','@','@','@','@','.','.','.','.','.','.','.','.','.','.','.','.','.','#',],
			['#','.','@','.','.','@','.','.','.','.','.','.','.','.','.','.','.','.','.','#',],
			['#','.','@','.','.','@','.','.','.','.','.','.','.','.','.','.','.','.','.','#',],
			['#','.','@','.','.','@','.','.','.','.','.','.','.','.','.','.','.','.','.','#',],
			['#','.','@','.','.','@','.','.','.','.','.','.','.','.','.','.','.','.','.','#',],
			['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',],
			]
	;
  width = map.width;
  height = map.height;
  this.gridSize = 16;
  console.log(map.tiles.length + " " + map.tiles[0].length);
  this.tiles = new Array(width);
  for (i = 0; (0 <= width ? i <= width : i >= width); (0 <= width ? i += 1 : i -= 1)) {
    this.tiles[i] = new Array(height);
  }
  _result = [];
  for (x = 0; (0 <= width ? x < width : x > width); (0 <= width ? x += 1 : x -= 1)) {
    _result.push((function() {
      _result2 = [];
      for (y = 0; (0 <= height ? y < height : y > height); (0 <= height ? y += 1 : y -= 1)) {
        _result2.push((function() {
          type = map.tiles[y][x];
          fileName = "";
          if (type === "#") {
            console.log('a wall');
            fileName = "grave.png";
          } else if (type === "@") {
            fileName = "pumpkin.png";
          }
          if (fileName !== "") {
            console.log(x + ' ' + y);
            return (this.tiles[x][y] = new GridEntity(fileName, this, type, x, y));
          } else {
            empty = [];
            empty.type = "empty";
            return (this.tiles[x][y] = "empty");
          }
        }).call(this));
      }
      return _result2;
    }).call(this));
  }
  return _result;
};
Map.prototype.moveableBlock = function(block) {
  return block.type !== '#';
};