/**
 * redux的核心文件
 */
import {createStore,applyMiddleware,compose } from 'redux'
import reducer from './reducer';
import thunk from 'redux-thunk'

//加入中间件，为了不和redux-dev-tools起冲突，使用了增强函数进行封装
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;

const enhancer = composeEnhancers(applyMiddleware(thunk))
// const store = createStore(reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //看window里有没有这个方法，有则执行这个方法,添加这句话，就可在redux-devloop工具中看到仓库的数据了
//     );
const store = createStore(reducer,enhancer)
export default store;