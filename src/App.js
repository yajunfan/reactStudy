import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css'
class App extends Component{
  render(){
     return (
       <ul class="test-list">
          <li>组件和普通JSX语法区别</li>
          <li>这个说起来也只有简单的一句话，就是你自定义的组件必须首写字母要进行大写，而JSX是小写字母开头的。</li>
          <li>这个也算是一个比较重要的知识点吧。</li>
          <li>三元运算符写法: 花括号 false?'我是错的时候展示':'我是true的时候展示' 花括号  </li>
          <li>三元的结果展示: {false?'我是错的时候展示':'我是true的时候展示'}。</li>
       </ul>
     )
  }
}
export default App;
