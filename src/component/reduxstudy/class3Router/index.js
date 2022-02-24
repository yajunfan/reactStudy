import React from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
function Home(){
    return <div>首页</div>;
}
function List(){
    return <div>列表页</div>
}
function ClassRouter(){
    return (
        <Router>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/list/">列表</Link></li>
            </ul>
            <Route path="/" exact component={Home}></Route>
            <Route path="/list/" component={List}></Route>
        </Router>
    )
}
export default ClassRouter;