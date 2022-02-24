// 实现ui和业务分离
import React, { Component } from 'react';
import store from "../../../store/index"
import Class2Ui from './classui-2';
import {CLASS1_ADD_ITEM} from "../../../store/actionType";
// 工作中写法，将action单独放一个文件
import {changeInputAction,delItemAction,getLists} from "../../../store/actionCreator";

class Class2 extends Component{
    constructor(props){
        super(props)
        this.state = store.getState();
        this.inputChange = this.inputChange.bind(this);
        this.clickButton = this.clickButton.bind(this);
        // store发生变化
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange) //订阅Redux的状态
    }
    render(){
        return (
            <Class2Ui 
                inputValue={this.state.inputValue}
                inputChange={this.inputChange}
                clickButton={this.clickButton}
                list={this.state.list}
                delItem={this.delItem.bind(this)}
            /> 
        )
    }
    componentDidMount(){
        console.log(8888)
        const action = getLists();
        store.dispatch(action);
    }
    storeChange(){
        this.setState(store.getState())
    }
    inputChange(e){
        const action = changeInputAction(e.target.value);
        store.dispatch(action);
    }
    clickButton(){
        const action = { type:CLASS1_ADD_ITEM}
        store.dispatch(action)
    }
    delItem(index){
        console.log(444,index)
        const action = delItemAction(index);
        store.dispatch(action)
    }
}
export default Class2;
