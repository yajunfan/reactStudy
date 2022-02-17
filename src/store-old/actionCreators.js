
/**
 * 定义各个action --- 统一管理
 */
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_PLANLIST} from './actionType'
import axios from 'axios';
export const changeInputAction=(value)=>({
    type:CHANGE_INPUT,
    value
});
export const addItemAction=()=>({
    type:ADD_ITEM
});
export const deleteItemAction=(value)=>({
    type:DELETE_ITEM,
    value
});
export const getPlanListAction=(value)=>({
    type:GET_PLANLIST,
    value
});
export const getPlanList=()=>{
    //dispatch 这个参数是中间件带来的，直接使用，必须在return的函数中有，否则报未定义的问题
    return (dispatch)=>{
        axios.get('http://yapi.demo.qunar.com/mock/53736/getlists').then((res)=>{
            const data =res;
            const action = getPlanListAction(data);
            dispatch(action)
        })
    }
   
};


