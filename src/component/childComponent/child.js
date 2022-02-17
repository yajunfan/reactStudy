import React,{Component} from "react"
import {Button} from "antd";
import PropTypes from "prop-types";

class Child extends Component{
     constructor(props){
         super(props)
         this.state = {
             inputValue:"",
            lists:["列子1","例子2"]
         }
        //  this的绑定，不写在jsx中
        this.inputChange = this.inputChange.bind(this);
        this.add = this.add.bind(this);
     }
    //  该生命周期在16.3之后开始淘汰
    //  componentWillMount(){
    //      console.log("组件将要挂载到页面上的一个时刻，只在页面刷新时执行一次")
    //  }
     componentDidMount(){
         console.log("组件挂载完成，只在页面刷新时执行一次")
     }
    /**
     * 你可能应该避免用它。据React团队的说法，shouldComponentUpdate是一个保证性能的紧急出口，意思就是你不到万不得已就别用它。当然这也不是绝对
     * @param {*} nextProps 变化后的属性;
     * @param {*} nextState 变化后的状态;
     * 可以通过比较要渲染的属性的前后值的变化，判断是否需要重新render
     */
     shouldComponentUpdate(nextProps,nextState){
         console.log("在组件生命周期更新之前时执行，就是页面上的state或者props中改变前执行，发生在render之前")
        //  return true 就会继续执行render
        //  return false 就会阻止继续执行render
         return true;
     }
     render(){
         console.log("组件挂载中，只有页面state或props发生变化就会执行")
         return (
             <div>
                 <label htmlFor="input">请输入</label>
                 <input id="input" value={this.state.value} onChange={this.inputChange}></input>
                <Button onClick={this.add}>ADD</Button>
                 <ul>
                    {
                        this.state.lists.map((item,index)=>{
                            return <li key={index} onClick={this.del.bind(this,index)}>{item}</li>
                        })
                    }
                 </ul>
             </div>
         )
     }
     inputChange(e){
         this.setState({
            inputValue:e.target.value
         })
     }
     add(e){
        this.setState({
            lists:[...this.state.lists,this.state.inputValue]
        }) 
     }
     del(index){
        //  向父组件传递参数
         this.props.getData(index);
     }
}
// 对prop中的值设置属性类型
Child.propTypes={
    value:PropTypes.string.isRequired, //表示value必须是字符串类型，且必传
    getData:PropTypes.func,
    name:PropTypes.oneOfType([PropTypes.string,PropTypes.number]) //表示name这个值可以是字符串，可以是数字,且是可传可不传
}
// 对prop设置默认值
Child.defaultProps = {
    value:"react"
 }

 export default Child;