import React, { Component } from 'react';
// import 'antd/dist/antd.css'
import '../../src/App.css'
// import {Input,Button,List} from 'antd';
import store from '../store/index'
import {changeInputAction,addItemAction,deleteItemAction,getPlanList} from '../store/actionCreators'
import TodoListUi from './TodoListsUi'

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
                <h2 className="mrt20">Example</h2>
                <TodoListUi inputValue={this.state.inputValue} 
                            list={this.state.list} 
                            changeInputValue={this.changeInput} 
                            addItem={this.add} 
                            deleteItem={this.deleteItem.bind(this)}
                            />
                {/* <label htmlFor="test">输入框</label>
                <Input id="test" placeholder={this.state.inputValue} value={this.state.inputValue} style={{width:'250px'}} onChange={this.changeInput.bind(this)}/>
                <Button type="primary" onClick={this.add.bind(this)}>增加</Button>
                <div>
                    <List bordered dataSource={this.state.list} renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)} ></List>
                </div> */}
                <h2 className="mrt20">业务逻辑和UI组件拆分</h2>
                <h3>这里有三个知识点<br/>
                    1) 有状态组件：主要用来定义交互逻辑和业务数据（如果用了Redux，可以把业务数据抽离出去统一管理），使用 this.state.xxx的表达式把业务数据挂载到容器组件的实例上<br/>
                    （有状态组件也可以叫做容器组件，无状态组件也可以叫做展示组件），然后传递props到展示组件，展示组件接收到props，把props塞到模板里面,比如当前页面就是有状态组件，<br/>
                    使用class Todolists extends Component 这种形式<br/>
                    <br/>
                    2) 无状态组件：主要用来定义模板，接收来自父组件props传递过来的数据，使用props.xxx的表达式把props塞到模板里面。无状态组件应该保持模板的纯粹性，以便于组件复用<br/>
                        使用的是const TodoListUi=箭头函数(props)为参数的形式<br/>
                        <br/>
                    3) 构造函数的参数props和super中的参数props，props.name和this.props.name的值都是一样的，但是它俩还是有区别的，props.name中这个props就是子组件的属性props，<br/>
                        但是this.props.name中的这个props却不是子组件的属性props，虽然值都是一样的，这个props其实在调用super方法的时候被传递到了Component这个父类中去了，<br/>
                        所以this.props.name获取到的是Component父类中的props属性，子类super方法把props参数传递给了父类Component，Component把props参数挂载到它的实例属性props上了<br/>
                </h3>
                <h2 className="mrt20">axios异步获取数据，并和redux结合</h2>
                <h3>在请求成功的函数中进行store的分发</h3>
                <h2 className="mrt20">redux-thunk的使用</h2>
                <h3>安装 npm install --save redux-thunk,介绍https://www.jianshu.com/p/51c8eaa9fa2a</h3>
                <h3>直接按文档的，将thunk放在applyMiddleware中，是可以的，但是会使redux-devloop不可使用，所以进行了改造，使用了增强函数compose，具体看代码</h3>
            </div>
        );
    }
    constructor(props){  //这个有参数props,在函数中可以直接使用props.name的方式获取值
        super(props);  //这个函数中有props，可以通过this.props.name获取值，没有这个参数的话，不能通过this.props获取值
        //
        //不需要存储在仓库中的值
        this.state={
            myvalue:111
        };
        //es6的扩展，合并对象
        this.state ={...this.state,...store.getState()};
        this.changeInput = this.changeInput.bind(this);
        this.add = this.add.bind(this);
        //因为这段代码，使得该页面的仓库的更新过的数据可以及时更新并且得到
        this.storeChange= this.storeChange.bind(this);  //改变this指向可以直接在html中，也可以在构造函数中
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
        console.log(action)
        store.dispatch(action);
    }
    componentDidMount(){
        const action =getPlanList();
        console.log(action)
        store.dispatch(action);
        // axios.get('http://yapi.demo.qunar.com/mock/53736/getlists').then((res)=>{
           
        // }) 
    }
}

export default Todolists;