import { default as JXG } from "npm:jsxgraph@1.11.1"

// Load css
await new Promise((resolve) => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = '//cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.11.1/jsxgraph.css'
  link.onload = resolve
  document.head.appendChild(link)
})

const drawJXG = (drawFunc, { boxAspectRatio = "1/1", boxWidth = "100%" }) => {
  // A uniq id for the div
  const boxId = `jsx_board_${Math.floor(Math.random() * 100000)}`
  const box = document.createElement("div")
  box.id = boxId
  box.style.width = boxWidth
  box.style.aspectRatio = boxAspectRatio
  drawFunc(box)
  return box
}

export { JXG, drawJXG }
