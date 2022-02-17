import React, { Component } from 'react';
import PropTypes from 'prop-types';

//此页面在父页面进行任何更新操作的时候，都会进行渲染，会耗性能，这时，我们需要在shouldComponentUpdate中进行优化
class  ServerItem extends Component {
    state
    render() { 
        console.log(222)
        return (  
            <div onClick={this.handclick.bind(this)}>{this.props.content} ,111 {this.props.othercontent}</div>
        );
    }
    handclick(){
        console.log("点击子组件",this.props.index)
        this.props.deleteItem(this.props.index);
    }
    shouldComponentUpdate(nextProps,nextState){
        // 这两个参数分别是变化后的属性  和  变化后的参数 //判断更新后的content和当前的content是否一致，不一致再进行渲染，一致就不去执行render函数
        return nextProps.content !==this.props.content;
    }
};
// 对父组件传值得类型限定
// 注意的是ServerItem.propTypes  这里的p是小写，而对象中使用的边是引入的PropTypes，p是大写
//PropTypes.string.isRequired  表示在父组件的页面，子组件上必须传这个属性，否则报错
ServerItem.propTypes={
    content:PropTypes.string.isRequired,
    othercontent:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
//如果有人忘记传必传值得话，为了避免报错，会给他们设置一个默认值
ServerItem.defaultProps={
    content:"加油学习"
};
export default ServerItem;