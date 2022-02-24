// 仓库
// 需要使用一个管理员来管理仓库，使用Reducers来管理，创建一个reducer.js文件
// 基础版 -1
// import {createStore} from "redux";
// import reducer from "./reducer";
// const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // 创建数据存储仓库
// export default store; //暴露出去
// 想要改变state的值，就要创建action，创建的action是在组件的函数中

// 进阶版 - 2 使用redux-thunk，Redux的中间件配置
import { createStore, applyMiddleware,compose  } from "redux";
import thunk from "redux-thunk";
import reudcer from "./reducer.js";
/**这样写是完全没有问题的，但是我们的Redux Dev Tools插件就不能使用了，如果想两个同时使用，需要使用增强函数。使用增加函数前需要先引入compose */
// const store = createStore( reducer, applyMiddleware(thunk)) // 创建数据存储仓库 

// 利用compose创造一个增强函数，就相当于建立了一个链式函数
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;
const enhancersd = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reudcer,enhancersd);
console.log(44,store)
export default store;