![](https://dl.dropbox.com/u/30162278/component-grid.png) 


Install
---

    $ component install kelonye/component-grid

Usage
---

```javascript

  var canvas = document.createElement('canvas');
  canvas.width = 301;
  canvas.height = 301;
  document.body.appendChild(canvas);

  var ctx = canvas.getContext('2d');
  ctx.strokeStyle = 'deepskyblue';

  var grid = require('component-grid');
  grid(0.5, 300.5, 300.5, 0.5)
    .linespacing(20)
    .draw(canvas);

```

Example
---

See [demo](http://component-kelonye.rhcloud.com/#/523dcc8d12a4b7fa2900000b)

    $ make example

## Api

### grid(top, right, bottom, left)

  Make new grid sized (top, right, bottom, left).

### Grid#linespacing(linespacing)

  Set lines apart with `linespacing`

### Grid#draw(canvas)
  
  Draw the grid on the given `canvas`

License
---

MIT