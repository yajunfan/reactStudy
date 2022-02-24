
import React,{Component} from "react";
import store from "../../store/index"
import 'antd/dist/antd.css';
import {Input,Button,List,Divider} from 'antd';
import {CLASS1_ADD_ITEM} from "../../store/actionType";
// 工作中写法，将action单独放一个文件
import {changeInputAction,delItemAction} from "../../store/actionCreator";

class Class1 extends Component{
    constructor(props){
        super(props)
        this.state = store.getState();
        this.inputChange = this.inputChange.bind(this);
        this.clickButton = this.clickButton.bind(this);
        // this.delItem = this.delItem.bind(this);
        // store发生变化
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange) //订阅Redux的状态
    }
    render(){
        return (
            <div>
                <div>学习redux</div>
                <Input placeholder="请输入" value={this.state.inputValue} onChange={this.inputChange}/>
                <Button onClick={this.clickButton}>点击</Button>
                <List bordered dataSource={this.state.list} renderItem={(item,index)=>(
                    <List.Item>{item}<Divider orientation="left">Small Size</Divider><Button onClick={this.delItem.bind(this,index)}>删除</Button></List.Item>
                    
                 )} ></List>
            </div>
        )
    }
    storeChange(){
        // setState 重新设置state 一次就可以实现组件也是变化的
        this.setState(store.getState())
    }
    inputChange(e){
        // 方式一 ：将action的对象以函数的形式写入
        const action = changeInputAction(e.target.value);
        store.dispatch(action);
        // store只是一个仓库，它并没有管理能力，它会把接收到的action自动转发给Reducer
    }
    clickButton(){
        // 方式二
        // 改变redux中的state的值
        const action = { type:CLASS1_ADD_ITEM}
        store.dispatch(action)
    }
    delItem(index){
        const action = delItemAction(index);
        store.dispatch(action)
    }
}
export default Class1;