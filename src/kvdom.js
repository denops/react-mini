
function createVnode(vtype,type,props,children){
    return {vtype,type,props,children}
}
function initVnode(vnode){
    const {vtype} = vnode

    if(!vtype){
        return initVtext(vnode)
    }
    if (vtype  === 1) {
        return initVelement(vnode)
    } else if(vtype === 2){
        return initVclass(vnode)
    } else if(vtype === 3){
        return initVfunc(vnode)
    }

}
function initVtext(vnode) {
    return document.createTextNode(vnode)
}
function initVelement(vnode) {
    const {type,props,children} = vnode
    const node = document.createElement(type)
    const {key,style,...reset} = props
    Object.keys(reset).forEach(k=>{
        node.setAttribute(k,reset[k])
        
    })
    if (style) {
        
        Object.keys(style).forEach(k=>{
            node.style[k] = style[k]
    
        })
    }
    initVchildren(node,children)
    return node
}
function initVchildren(node,children) {
    console.log(node)
    children.forEach(child=>{
        node.appendChild(initVnode(child))
    })
}
function initVclass(vnode) {
    const Comp = vnode.type
    const component= new Comp(vnode.props)
    let newNode = component.render()
    return initVnode(newNode)
}
function initVfunc(vnode) {
    const Comp = vnode.type
    const newNode= new Comp(vnode.props)
    return initVnode(newNode)
}
export {createVnode, initVnode}