import {CLASS1_LIST,CLASS1_CHANGE_INPUT,CLASS1_ADD_ITEM,CLASS1_DEL_ITEM} from "./actionType";
const defaultState = {//默认数据
    inputValue:"react",
    list:['课程1','课程2','课程3']
} 
// 知识点
// 1.Reudcer只是返回了更改的数据，但是并没有更改store中的数据，store拿到了Reducer的数据，自己对自己进行了更新。
// 2.reudcer必须是纯函数，意思是返回永远是由传入的参数决定的，如果传入的参数一样，那返回的结果必须是一样的，那就表示，在reudcer中，如果你自己返回了一个不依赖与参数的结果，那就会报错

/**
 * @params state 指的是原始仓库里的状态
 * @params action 指的是action新传递的状态
 */
export default (state=defaultState,action)=>{ //方法函数
    if(action.type === CLASS1_CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === CLASS1_ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.push(newState.inputValue)  //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
    if(action.type === CLASS1_DEL_ITEM){
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.splice(action.index,1)  //push新的内容到列表中去
        return newState
    }
    if(action.type === CLASS1_LIST){
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list = action.data;  //push新的内容到列表中去
        return newState
    }

    return state;
}
