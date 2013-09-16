![](https://dl.dropbox.com/u/30162278/component-grid.png) 


Install
---

    $ component install kelonye/component-grid

Usage
---

```javascript

  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  var grid = require('component-grid')();
  grid
    .right(300.5)
    .bottom(300.5)
    .draw(ctx);

```

Example
---

    $ make example

License
---

MIT