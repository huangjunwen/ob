# JSXGraph 使用例子

首先引入 component，它会载入 JSXGraph 以及相关联的 css，以及定义工具函数：drawJXG

```js echo
import { JXG, drawJXG } from "./components/useJXG.js";
```

## 一个简单的例子

```js echo
drawJXG((box) => {
  var board = JXG.JSXGraph.initBoard(box, {
    boundingbox: [-5, 2, 5, -2],
    axis:true,
  });
  board.create('functiongraph', ['sin(x)']);
}, { boxAspectRatio: "2/1", boxWidth: "80%" })
```

## 一个稍微复杂的例子 [Two Squares](https://jsxgraph.org/wiki/index.php?title=Two_squares)

```js echo
drawJXG((box) => {
  var board = JXG.JSXGraph.initBoard(box, {
    boundingbox: [-4, 3, 4, -3],
  });

  var A = board.create('point', [-3, -1], {color: 'blue'}),
      B = board.create('point', [0, -1], {color: 'blue'}),
      E = board.create('point', [1, -2], {name: 'E', color: 'blue'}),

      square1 = board.create('regularpolygon', [A, B, 4], {name: 'Square 1'}),
      square2 = board.create('regularpolygon', [B, E, 4], {name: 'Square 2'}),

      C = square1.vertices[2],
      H = square2.vertices[3],

      p = board.create('line', [A, H]),
	    q = board.create('line', [E, C]);

}, { boxAspectRatio: "4/3", boxWidth: "60%" })
```

## 三维的例子 [3D parametric surface: Klein bottle](https://jsxgraph.uni-bayreuth.de/share/example/3d-parametric-surface-klein-bottle)

```js echo

drawJXG((box) => {
  var board = JXG.JSXGraph.initBoard(box, {
    boundingbox: [-8, 8, 8, -8],
    keepaspectratio: false,
    axis: false
  });

  var view = board.create('view3d',
    [
      [-6, -3],
      [8, 8],
      [
        [-5, 5],
        [-5, 5],
        [-5, 5]
      ]
    ],
    {}
  );

  var b = board.create('slider', [[-7, -6], [5, -6], [-3, 2, 4]], {name: 'b'});

  // Klein bottle
  var c = view.create('parametricsurface3d',
    [
      (u, v) => b.Value() * (1 - Math.sin(u)) * Math.cos(u) + (2 - Math.cos(u)) * Math.cos(v) * (2 * Math.exp(-Math.pow(u / 2 - Math.PI, 2)) - 1),
      (u, v) => (2 - Math.cos(u)) * Math.sin(v),
      (u, v) => 4 * Math.sin(u) + 0.5 * (2 - Math.cos(u)) * Math.sin(u) * Math.cos(v) * Math.exp(-Math.pow(u - 3 * Math.PI / 2, 2)),
      [0, 2 * Math.PI],
      [0, 2 * Math.PI],
    ],
    {
      strokeColor: 'green',
      stepsU: 60,
      stepsV: 60
    }
  );

}, { boxWidth: "60%" })
```

## DSL 例子 [JessieCode](https://jsxgraph.uni-bayreuth.de/wp/docs_jessiecode/)

```js echo
drawJXG((box) => {
  var board = JXG.JSXGraph.initBoard(box, {
    boundingbox: [-8, 8, 8, -8],
    keepaspectratio: false,
    axis: true
  });
  board.jc.snippet(jcText, false)
})
```

```js echo
const jcText = view(Inputs.textarea({
  label: "JessieCode",
  value: [
    "S = functiongraph(function(x) { return sin(x) * x; } ) <<strokeColor: 'red' >>;",
    "C = functiongraph(function(x) { return cos(x) * x; } ) <<strokeColor: 'blue' >>;",
  ].join("\n")
}));
```
