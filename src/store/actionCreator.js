// 实现redux和action的分离
import {CLASS1_LIST,CLASS1_CHANGE_INPUT,CLASS1_DEL_ITEM} from "./actionType";
// import axios from "axios"

// 在这里写
export const changeActionList = (data)=>({
    type:CLASS1_LIST,
    data
})
// 可以写需求页面的axios请求
export const getLists = ()=>{
    console.log(222)
    return (dispatch)=>{
            console.log(111,dispatch)
            let data = ["3333","44444","45555"];
            // axios.get("xxx").then(res=>{
                // let {data} = res;
                const action = changeActionList(data)
                dispatch(action);
            // })
        }
    
}
// 在这里写
export const changeInputAction = (value)=>({
    type:CLASS1_CHANGE_INPUT,
    value
})
export const delItemAction = (index)=>({
    type:CLASS1_DEL_ITEM,
    index
})
