import React,{Component} from "react";
import 'antd/dist/antd.css';
import {Input,List,Divider} from 'antd';
const data=[
    '课程1','课程2','课程3'
]
class Class1 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div>学习redux</div>
                <Input placeholder="请输入"/>
                <List bordered dataSource={data} renderItem={item=>(
                    <List.Item>{item}<Divider orientation="left">Small Size</Divider></List.Item>
                    
                 )} ></List>
            </div>
        )
    }
}
export default Class1;