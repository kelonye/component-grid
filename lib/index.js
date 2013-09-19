/**
 * Expose `Grid`.
 */

module.exports = Grid;

/**
  * Initialize a new Grid
  *
  * @api public
  */

function Grid(){
  if (!(this instanceof Grid)) return new Grid;
  this._color = '#ddd';
  this._linewidth = 1;
  this._linespacing = 20;
  this._top = 0.5;
  this._left = 0.5;
};

/**
  * Set grid's topleft x position as `top`
  *
  * @param {Number} top
  * @return {Grid} this
  * @api public
  */

Grid.prototype.top = function(top) {
  this._top = top;
  return this;
};

/**
  * Set grid's topleft y position as `left`
  *
  * @param {Number} left
  * @return {Grid} this
  * @api public
  */

Grid.prototype.left = function(left) {
  this._left = left;
  return this;
};

/**
  * Set grid's bottomright x position as `right`
  *
  * @param {Number} right
  * @return {Grid} this
  * @api public
  */

Grid.prototype.right = function(right) {
  this._right = right;
  return this;
};

/**
  * Set grid's bottomright y position as `bottom`
  *
  * @param {Number} bottom
  * @return {Grid} this
  * @api public
  */

Grid.prototype.bottom = function(bottom) {
  this._bottom = bottom;
  return this;
};

/**
  * Set strokeStyle as `color`
  *
  * @param {Number} color
  * @return {Grid} this
  * @api public
  */

Grid.prototype.color = function(color) {
  this._color = color;
  return this;
};

/**
  * Set lineWidth as `linewidth`
  *
  * @param {Number} linewidth
  * @return {Grid} this
  * @api public
  */

Grid.prototype.linewidth = function(linewidth) {
  this._linewidth = linewidth;
  return this;
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
  ctx.strokeStyle = this._color;
  ctx.lineWidth = this._linewidth;

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