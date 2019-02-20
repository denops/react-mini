import React from './kreact';
import ReactDOM from './kreact-dom';

function App1(props){
    return <h1>hello {props.name}</h1>
}

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {num:1}
    }
    render(){
        return <div>
            <h2>你好啊，{this.props.name}</h2>
            {this.state.num}
        </div>
    }
}

ReactDOM.render(
    <div id='demo' name="kaikeba" style={{"color":"red"}}>
        <p>render开课吧</p>
        <p>render开课吧，<strong>React</strong></p>
        <App1 name="函数组件"/>
        <App name="class组件"/>
    </div>,
    document.getElementById('root')
 );

