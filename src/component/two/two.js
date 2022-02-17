import React,{Component} from "react";
import Child from "../childComponent/child";
class Two extends Component{
    constructor(props){
        super(props)
        this.state={

        }
        // 对所有的事件进行this绑定，不用写在jsx中了
    }
    render(){
        return (
            <div>
                <Child value="我是默认的值" ref={(ref)=>{this.childdom = ref;}} getData={this.getData.bind(this)}></Child>
            </div>
        )
    }
    getData(index){
        console.log("获取到子组件传递过来的index",index);
    }
}
export default Two;