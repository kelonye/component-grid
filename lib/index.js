module.exports = Grid;

function Grid(){
  if (!(this instanceof Grid)) return new Grid;
  this._color = '#ddd';
  this._linewidth = 1;
  this._padding = 20;
  this._top = 0.5;
  this._left = 0.5;
};

Grid.prototype.top = function(top) {
  this._top = top;
  return this;
};


Grid.prototype.left = function(left) {
  this._left = left;
  return this;
};

Grid.prototype.right = function(right) {
  this._right = right;
  return this;
};

Grid.prototype.bottom = function(bottom) {
  this._bottom = bottom;
  return this;
};

Grid.prototype.color = function(color) {
  this._color = color;
  return this;
};

Grid.prototype.linewidth = function(linewidth) {
  this._linewidth = linewidth;
  return this;
};

Grid.prototype.padding = function(padding) {
  this._padding = padding;
  return this;
};

Grid.prototype.draw = function(canvas) {

  var ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.strokeStyle = this._color;
  ctx.lineWidth = this._linewidth;

  // horizontal lines
  for (var y = this._top; y < this._bottom; y += this._padding) {
    ctx.moveTo(this._left, y);
    ctx.lineTo(this._right, y);
  }
  
  // vertical lines
  for (var x = this._left; x < this._right; x += this._padding) {
    ctx.moveTo(x, this._top);
    ctx.lineTo(x, this._bottom);
  }
 
  // right, bottom borders
  ctx.moveTo(this._right, this._top);
  ctx.lineTo(this._right, this._bottom);
  ctx.lineTo(this._left, this._bottom);

  //
  ctx.stroke();

};