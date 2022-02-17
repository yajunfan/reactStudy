import React from 'react';
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
// class TodoListUi extends Component {
//     render() { 
//         return ( 
//             <div>
//                 <label htmlFor="test">输入框</label>
//                 <Input id="test" placeholder={this.props.inputValue} value={this.props.inputValue} style={{width:'250px'}} onChange={this.props.changeInputValue}/>
//                 <Button type="primary" onClick={this.props.addItem} >增加</Button>
//                 <div>
//                     {/* onClick={this.props.deleteItem(index)} */}
//                     <List bordered dataSource={this.props.list} renderItem={(item,index)=>(<List.Item  onClick={()=>(this.props.deleteItem(index))}>{item}</List.Item>)} ></List>
//                 </div>
//             </div>
//         );
//     }
// }
//将代码改变成无状态组件
const TodoListUi=(props)=>{
    return ( 
        <div>
            <label htmlFor="test">输入框</label>
            <Input id="test" placeholder={props.inputValue} value={props.inputValue} style={{width:'250px'}} onChange={props.changeInputValue}/>
            <Button type="primary" onClick={props.addItem} >增加</Button>
            <div>
                <List bordered dataSource={props.list} renderItem={(item,index)=>(<List.Item  onClick={()=>(props.deleteItem(index))}>{item}</List.Item>)} ></List>
            </div>
        </div>
    );
};
 
export default TodoListUi;