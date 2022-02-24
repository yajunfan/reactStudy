
import React,{Component} from "react";
import 'antd/dist/antd.css';
import {Input,Button,List,Divider} from 'antd';
class Class2Ui extends Component{
    render(){
        return (
            <div>
                <div>学习redux</div>
                <Input placeholder="请输入" value={this.props.inputValue} onChange={this.props.inputChange}/>
                <Button onClick={this.props.clickButton}>点击</Button>
                <List bordered dataSource={this.props.list} renderItem={(item,index)=>(
                    <List.Item>{item}<Divider orientation="left">Small Size</Divider><Button onClick={()=>{this.props.delItem(index)}}>删除</Button></List.Item>   
                 )} ></List>
            </div>
        )
    }
    
}
export default Class2Ui;