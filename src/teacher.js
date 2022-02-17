import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group'
import './App.css'
class Teacher extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow:false
        }
    }
    render() { 
        return (
            <div>
                <h2>动画相关的</h2>
                <div>1.在CSSTransition中的classNames中的name是什么，那么css中的动画的开头就是什么，例如这个，在css中的动画就要 .boss-text-enter<br/>
                      与之相关的动画有六部，如下<br/>
                      xxx-enter:进入(入场)前的css样式<br/>
                      xxx-enter-active：进入动画直到完成之前的css样式<br/>
                      xxx-enter-done:进入完成时的css样式<br/>
                      xxx-exit:退出(出场)前的动画<br/>
                      xxx-exit-active:退出动画直到完成之前的css样式<br/>
                      xxx-exit-done:退出完成时的css样式<br/>
                      <br/>
                      需要注意的是，CSSTransition标签下只能有一个直系子元素，否则会报错，所有的其他元素只能作为孙元素
                </div>
                <CSSTransition
                    in={this.state.isShow}  //用于判断是否出现的状态
                    timeout={2000}           //动画持续时间
                    classNames="boss-text"   //className值，防止重复 注意这个是classNames 带s的，为了和之前的className区分
                    unmountOnExit   //加上这个，会在元素退场的时候，自动把dom也给删除
                >
                <div>老师 - 技术胖<span>2323343</span></div>
                
                    {/* <div className={this.state.isShow?'showkfy':'hidekfy'}>老师 - 技术胖</div> */}
                </CSSTransition>
                <div><button onClick={this.changeStatus.bind(this)}>召唤</button></div>
            </div>
        );
    }
    changeStatus(){
        console.log(33)
        this.setState({
            isShow:this.state.isShow?false:true
        })
    }
}
 
export default Teacher;