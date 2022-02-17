import React,{Component,Fragment} from "react";
import {Button,Input } from "antd";
import "./first.css";
class First extends Component{
    constructor(props){
        super(props);
        this.state = {
            time:"2022-2-14",
            num:[1,2,3,4,5,6]
        }
    };
    render(){
        return (
            <div>
                {/* 这里写注释，注释的写法 */}
                {/* 注意写class的属性名，应该写成className，防止和js中的class类名冲突 */}
                <p className="tip">注意注意：必须有一个外层的div包着，否则会报错，如果布局不需要外界的这个标签，比如flex布局的时候，
                    这时候，使用Fragment标签，使用前，需要先引入，和Component在一起</p>
                <h4 className="h4-title">JSX简介</h4>
                <p>JSX就是Javascript和XML结合的一种格式。React发明了JSX，可以方便的利用HTML语法来创建虚拟DOM，当遇到尖括号，JSX就当作HTML解析，遇到花括号就当JavaScript解析.</p>
                <h4 className="h4-title">组件和JSX语法区别</h4>
                <p>自定义的组件必须首字母大写，而jsx的小写字母开头</p>
                <h4 className="h4-title">JSX中可以使用三元符</h4>
                <p>{true?'我是true':'我是false'}</p>
                <h4 className="h4-title">在页面上显示标签作为文本，使用 dangerouslySetInnerHTML属性</h4>
                <div dangerouslySetInnerHTML={{ __html:'<h4>dddddd</h4>' }}/> 
                {/* <div dangerouslySetInnerHTML={{ __html: '<div>123</div>' }} /> */}
                <p></p>
                <h4 className="h4-title">通过Input，来使用事件,使用this的时候i，需要使用bind进行绑定</h4>
                {/* 不进行绑定this的话，在事件中这个this是undefined */}
                {/* 这里label中要使用 htmlFor，不能使用for，为了防止和for循环中的for冲突*/}
                <label htmlFor="input-1">开始学习日期:</label>
                <Input id="input-1" placeholder="请输入" value={this.state.time} onChange={this.inputChange.bind(this)}/>

                <h4 className="h4-title">列表</h4>
                <ul>
                    {this.state.num.map((item,index)=>{
                        return <li key={index}>列表{index} <Button onClick={this.add.bind(this)}>增加</Button><Button onClick={this.del.bind(this,index)}>删除</Button></li>
                    })}
                </ul>
                <p>{this.props.content}</p>

            </div>
        )
    }
    inputChange(e){
        this.setState({
            time:e.target.value
        })
    }
    add(e){
        let newNum = this.state.num.length+1;
        this.setState({
            num:[...this.state.num,newNum]
        })
    }
    del(index){
        // 这里有个坑，如果直接操作state上的属性，也能实现，但是之后会出现优化上的问题；因为React是禁止直接操作state的
        // this.state.num.splice(index,1); 不建议这么写

        let lists = this.state.num;
        lists.splice(index,1);
        this.setState({
            num:lists
        })
    }
}
export default First;

// class Antdemo extends Component{
//     render(){
//         return (
//             <div>

//             </div>
//         )
//     }
// }
