---
title: JSXGraph example
toc: true
---

首先根据 [Minimal Example](https://jsxgraph.uni-bayreuth.de/wp/docs/index.html) 引入 css/js:

```html echo
<link href="https://cdn.jsdelivr.net/npm/jsxgraph@1.8.0/distrib/jsxgraph.min.css" rel="stylesheet" type="text/css">
```

```js echo
import { default as jxg } from "npm:jsxgraph@1.8.0";
```

创建一个 `div` 用于放画版，类似
```
<div id="jxg-board" class="jxgbox" style="aspect-ratio:1/1;width:500px"></div>
```

初始化 board，然后画一条曲线

```js echo
const board = jxg.JSXGraph.initBoard("jxg-board", {
    boundingbox: [-8, 4, 8, -4],
    keepaspectratio: true,
    axis: true,
});

var fun = board.create('functiongraph', ['sin(x)']);
```

效果如下:

<div id="jxg-board" class="jxgbox" style="aspect-ratio:1/1;width:500px"></div>
