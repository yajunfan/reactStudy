import React,{Component} from "react"
import First from "../first/first";

class AntdDemo extends Component{
    constructor(props){
        super(props)
        this.state={
            content:"父组件向子组件传值"
        }
    }
    render(){
        return (
            <div>
                <h2>我是另一个页面，学习组件之间传值</h2>
                <First content={this.state.content}></First>
            </div>
        )
    }
}
export default AntdDemo;