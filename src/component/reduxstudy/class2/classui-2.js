// 无状态组件
// 1.首先我们不在需要引入React中的{ Component }，删除就好。
// 2.然后写一个Class2Ui_2函数,里边只返回JSX的部分就好。
// 3.函数传递一个props参数，之后修改里边的所有props，去掉this。
import React from "react";
import 'antd/dist/antd.css';
import {Input,Button,List,Divider} from 'antd';
const Class2Ui_2 = (props)=>{
    return (
        <div>
            <div>学习redux</div>
            <Input placeholder="请输入" value={props.inputValue} onChange={props.inputChange}/>
            <Button onClick={props.clickButton}>点击</Button>
            <List bordered dataSource={props.list} renderItem={(item,index)=>(
                <List.Item>{item}<Divider orientation="left">Small Size</Divider><Button onClick={()=>{props.delItem(index)}}>删除</Button></List.Item>   
                )} ></List>
        </div>
    )
}

export default Class2Ui_2;