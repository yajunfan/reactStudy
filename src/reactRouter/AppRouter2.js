import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from '../Pages/home'
import List from '../Pages/list'
import IndexPage from '../Pages/index'
class AppRouter extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                    </li>
                    <li>
                        <Link to="/list/123">列表</Link>
                    </li>
                </ul>
                <Route path="/" exact component={Home}></Route>
                <Route path="/home/" exact component={IndexPage}></Route>
                <Route path="/list/:id" exact component={List}></Route>
            </Router>

        );
    }
}
 
export default AppRouter;