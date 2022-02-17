import React, { Component } from 'react';
import 'antd/dist/antd.css'
import '../../src/App.css'
import {Input,Button,List} from 'antd';
import store from '../store/index'
import {changeInputAction,addItemAction,deleteItemAction} from '../store/actionCreators'
// 实现了store ，page ， action的分离 更好管理
class Todolists extends Component {
    render() { 
        return ( 
            <div className="Redux-container">
                <div>
                    <h2>学习redux</h2>
                    <h3>一、Reducer.js里只能接收state，不能改变state,所以需要重新声明一个变量，然后return出去</h3>    
                    <h3>二、数据共享的步骤(以input中的值改变为例)：<br/>
                        1) 在input上写入onChange事件<br/>
                        2) 在事件中定义action变量，将新的input值赋值<br/>
                        3) 将action，传递给store，store.dispatch(action)<br/>
                        4) 进入reducer.js中，根据action的type，重定义state，并且返回<br/>
                        5) 在input页面，contructor中，使用store.subscribe进行对state的更新，<br/>
                        6) input中，placrholder是实现不了双向绑定的，即使是身上的值发生了变化，页面也不会更改
                    </h3>
                    <h3>三、三个注意点：<br/>
                        1) store必须是唯一的，多个store是坚决不允许，只能有一个store空间<br/>
                        2) 只有store能改变自己的内容，Reducer不能改变<br/>
                        3) Reducer必须是纯函数：只依赖自己传入的参数，进行更新，它的返回结果，完全是依赖于传入的参数，和其他的外部状态没有关系<br/>
                    </h3>
                    
                </div>
                <h2>Example</h2>
                <label htmlFor="test">输入框</label>
                <Input id="test" placeholder={this.state.inputValue} value={this.state.inputValue} style={{width:'250px'}} onChange={this.changeInput.bind(this)}/>
                <Button type="primary" onClick={this.add.bind(this)}>增加</Button>
                <div>
                    <List bordered dataSource={this.state.list} renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)} ></List>
                </div>
                <h2>业务逻辑和UI组件拆分</h2>
            </div>
        );
    }
    constructor(props){
        super(props);
        //不需要存储在仓库中的值
        this.state={
            myvalue:111
        };
        //es6的扩展，合并对象
        this.state ={...this.state,...store.getState()};
        //因为这段代码，使得该页面的仓库的更新过的数据可以及时更新并且得到
        this.storeChange= this.storeChange.bind(this);
        store.subscribe(this.storeChange);
       
    }
    changeInput(e){
        //想改变Redux里边State的值就要创建Action了。Action就是一个对象，这个对象一般有两个属性，第一个是对Action的描述，第二个是要改变的值。
        const action = changeInputAction(e.target.value);
       // store只是一个仓库，它并没有管理能力，它会把接收到的action自动转发给Reducer
        store.dispatch(action);

    }
    storeChange(){
        this.setState(store.getState());
    }
    add(){
        const action =addItemAction();
        store.dispatch(action);
    }
    deleteItem(index){
        const action=deleteItemAction(index);
        store.dispatch(action);
    }
}

export default Todolists;