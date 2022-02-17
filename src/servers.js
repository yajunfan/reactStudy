import React,{Component,Fragment} from 'react'
import ServerItem from './serverItem'
import Teacher from './teacher'
import axios from 'axios'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import './App.css'
class Servers extends Component{
    // 不属于生命周期，但是可以想象成initilazation的阶段，他只是一种es6的语法
    constructor(props){
        super(props);
        this.state={
            inputValue:"11111",
            inputVlaue2:"222",
            lists:[
                {"name":"学习react"},
                {"name":"学习canvas"},
            ]
        }
    }
    render(){
        return(
            //这个最外层的div必须有，或者是别的标签，必须有一层外包标签，否则会报错
            // <div> 
            <Fragment>
                {/* 注释的方法 */}
                <div>1. Fragment解释：加上最外层的DIV，组件就是完全正常的，但是你的布局就偏不需要这个最外层的标签怎么办?比如我们在作Flex布局的时候,外层还真的不能有包裹元素。<br/>
                    这种矛盾其实React16已经有所考虑了，为我们准备了Fragment标签。要想使用Fragment，需要先进行引入<br/>
                    <br/>
                    2. 使用该标签的话，在浏览器渲染页面。是不会显示的，表示，这几个标签是直接在id=root的标签下<br/>
                    <br/>
                    3. react的列表添加可以通过es6的数组扩展的方式添加；但是删除要先存储一个临时变量，处理完该变量之后，再去赋值，不可以直接操作state上的属性<br/>
                    <br/>
                    4. 在标签上写class名的时候，不能直接写class="xxxx",  而是要写成className="xxxx"; 这是jsx的一个语法问题<br/>
                    <br/>
                    5. 将内容以html的形式输出的话，使用dangerouslySetInnerHTML=双花括号__html:this.state.inputValue双花括号 ，相当于vue中的v-html <br/>
                    <br/>
                    6.JSX中标签 label 中的for在jsx语法中不可以写for，不影响页面，但是控制台会爆红，因为和javascript中的for循环混淆，所有要使用htmlfor；然后实现点击label激活对应的input <br/>
                    <br/>
                    7.React的特性中有一个概念叫做“单项数据流”,指的是数据不像vue是双向数据绑定，比如我们对inut进行change的时候，对应的inputValue是不会改变的，他是只读的，<br/>
                      我们需要通过setState的方式对他进行重新赋值；在vue中，input改变，对应的inputValue的值也跟着改变，这是两者之间的区别<br/>
                      <br/>
                    8. React中标签上的事件，都需要改变this指向，组件内置的方法中的this为组件对象，在组件中自定义的方法中的this为null<br/>
                        必须强制进行指向，使用bind(this)改变this指向<br/>
                    <br/>
                    9. 在谷歌商店中添加react-devloper-tool，新版的控制面板中不再是react选项，而是components选项，可以通过点击【尖括号】这个选项看到代码<br/>
                    <br/>
                    10. React中可以使用ref来绑定dom元素，如下面得ul标签上绑定得ref=xxx; 在任何函数中console.log(this.ul)，都可以获取到ul这个元素<br/>
                        也可以和vue一样，ref="refName" ，在函数中使用this.refs.refName得形式，一般不推荐使用<br/>
                    <br/>
                     11. React的生命周期：指的是在某一个时刻，组件会自动调用执行的函数；react有四个大的生命周期分别得是 Initialization(初始化阶段)、Mounting(挂载阶段)、Updation(更新阶段)、Unmounting(销毁阶段) <br/>
                     Mounting中又包含三个小生命周期，分别是componentWillMount(组件即将被挂载阶段，只页面刷新时执行一次)、render(页面state或者props发生变化)、componentDidMount(挂载完成，只页面刷新时执行一次)<br/>
                     Updation中包含两种，state和props得更新，分别包含三个小生命周期，但是中间会穿插render阶段分别是<br/>
                     1）. shouldComponentUpdate(询问是否允许更新，返回true就是允许，返回false就不允许,页面上不可修改数据，比如input不可输入等)<br/>
                     2）. componentWillUpdate(在组件更新之前执行，前提是允许更新)<br/>
                     3）. render(挂在渲染)<br/>
                     4）. componentDidUpdate(组件更新完成)<br/>
                     以上是state得更新，下面是props得更新<br/>
                     1）. componentWillReceiveProps(这个函数是在子组件中，因为子组件中才会接受props，子组件接收到父组件传递过来的参数，父组件render函数重新被执行，这个生命周期就会被执行。)<br/>
                     2）.componentWillUnmount (函数出现在子组件中，当子组件从父页面移除的时候，触发) 
                     <br/>
                     12. 几个生命周期在16.3之后正在逐步淘汰componentWillMount，componentWillReceiveProps，componentWillUpdate，如果要使用，在方法前面加上UNSAFE_。解决方案是将
                     状态初始化移至构造函数或者属性初始化器中，一般可以移到componentDidMount
                </div>
                <br/>
                
                <div><input value={this.state.inputValue} onChange={this.changeValue.bind(this)}/><button onClick={this.addStudy.bind(this)}>增加课程</button></div>
                {/* 引入组件 */}
                {/* <ServerItem content={this.state.inputVlaue2} othercontent={this.state.inputValue} /> */}
                
                    <ul ref={(ul)=>this.ul=ul}>
                    <TransitionGroup>
                        {
                            // 返回的html必须跟在return后面，否则报错
                            this.state.lists.map((item,index)=>{
                                // onClick={this.deleteStudy.bind(this,index)} 
                                return (
                                    // <li  key={index}  >
                                        <CSSTransition
                                            timeout={1000}
                                            classNames='boss-text'
                                            unmountOnExit
                                            appear={true}  key={index}  >
                                            {/* <span dangerouslySetInnerHTML={{__html:item.name}}></span> */}
                                    {/* 引入组件 */}
                                            <ServerItem content={item.name} index={index} deleteItem={this.deleteStudy.bind(this,index)}/>
                                        </CSSTransition>
                                    //  </li> 
                                )
                            })
                        }
                        </TransitionGroup>
                    </ul>
                
                <Teacher/>
            </Fragment> 
        )
    }
    changeValue(e){
       // 如果不对onchange中进行改变this指向，是会报错的，
       //改变state中的值必须使用特定的方法

        this.setState({
            inputValue:e.target.value ,
            inputVlaue2:e.target.value 
        },()=>{
           
            console.log("这个回调是解决 由于setState函数是一个异步函数，会导致出现没等dom渲染完就打印出不完整得数据，这个回调会在数据全部渲染完了才会执行")
        });
       
    }
    addStudy(){
        this.setState({
            lists:[...this.state.lists,{"name":this.state.inputVlaue2}]
        });

    }
    deleteStudy(index){
        let lists = this.state.lists.concat();
        lists.splice(index,1);
        this.setState({
            lists:lists
        });
    }
    getData(){
        //接口可以使用easy-mock进行模拟，但该网站经常挂掉
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda').then((res)=>{
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })
    }
    componentWillMount(){
        console.log("组件将要挂载到页面的一个时刻")
    }
    shouldComponentUpdate(){
        return true;
    }
    componentDidMount(){
        console.log("组件挂载完成")
        this.getData();
    }
}
export default Servers