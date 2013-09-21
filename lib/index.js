/**
 * Expose `Grid`.
 */

module.exports = Grid;

/**
  * Initialize a new Grid
  *
  * @api public
  */

function Grid(top, right, bottom, left){
  if (!(this instanceof Grid)) return new Grid(top, right, bottom, left);
  this._linespacing = 20;
  this._top = top;
  this._right = right;
  this._bottom = bottom;
  this._left = left;
};

/**
  * Set lines apart with `linespacing`
  *
  * @param {Number} linespacing
  * @return {Grid} this
  * @api public
  */

Grid.prototype.linespacing = function(linespacing) {
  this._linespacing = linespacing;
  return this;
};

/**
 * Draw the grid on the given `canvas`.
 *
 * @param {Canvas} canvas
 * @api public
 */

Grid.prototype.draw = function(canvas) {

  var ctx = canvas.getContext('2d');
  ctx.beginPath();

  // horizontal lines
  for (var y = this._top; y < this._bottom; y += this._linespacing) {
    ctx.moveTo(this._left, y);
    ctx.lineTo(this._right, y);
  }
  
  // vertical lines
  for (var x = this._left; x < this._right; x += this._linespacing) {
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