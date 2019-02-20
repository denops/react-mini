import {createVnode} from './kvdom'
function createElement(type, props, ...children){

    delete props.__source
    delete props.__self
    let vtype 
    if (typeof type == 'string') {
        vtype = 1
    } else if(typeof type == 'function'){
        if (type.isReactComponent) {
            vtype = 2
        } else {
            vtype = 3
        }
    }
    return createVnode(vtype,type, props, children)
}

class Component {
    static isReactComponent = true
    constructor(props){
        this.props = props
        this.state = {}
    }
    setState(newState){

    }
}

export default {createElement, Component}