import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_PLANLIST} from './actionType'
const defaultState={//默认数据
    inputValue:"Today Plan",
    list:[
        '10点开始，准备学习redux',
        '10.30 : 学习中，安装了redux和antd',
        '10:50 ：学习reducer.js 和 store中的index'
    ]
}; 
//state: 是整个项目中需要管理的数据信息,这里我们没有什么数据，所以用空对象来表示。
export default (state=defaultState,action)=>{
    //state  指的是原始仓库里的状态 ,action 指的是新传递的状态
    //根据action中的type，也就是改变值得一个特征，我们去改变我们想要改变的值
    // let newState=JSON.parse(JSON.stringify(state));
    // switch(action.type){
    //     case "change-input-value"
    // }
    if(action.type === CHANGE_INPUT){
        let newState=JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        console.log(newState)
        return newState;
    };
    if(action.type===ADD_ITEM){
        let newState=JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        return newState;
    };
    if(action.type===DELETE_ITEM){
        let newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value,1);
        return newState;
    };
    console.log(action)
    if(action.type===GET_PLANLIST){
        let newState=JSON.parse(JSON.stringify(state));
        newState.list = action.value.data.data;
        return newState;
    };
    
    return state;
}