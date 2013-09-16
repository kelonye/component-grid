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

  var grid = require('component-grid')();
  grid
    .top(0.5)
    .left(0.5)
    .right(300.5)
    .bottom(300.5)
    .linespacing(20)
    .linewidth(1)
    .color('deepskyblue')
    .draw(canvas);

```

Example
---

    $ make example

License
---

MIT