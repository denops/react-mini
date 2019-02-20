import { initVnode } from "./kvdom";

function render(vnode, container) {
    const rootNode = initVnode(vnode)
   // container.innerHTML = `<pre>${JSON.stringify(vnode,null,2)}</pre>`
   container.appendChild(rootNode)
}


export default {render}