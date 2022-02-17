import React from 'react';
import {Route,Link} from 'react-router-dom';
import NavOneOne from './nav_one_one'
import NavOneTwo from './nav_one_two'

function Nav1(){
    return(
        <div>
            <div className="nav-top">
                <ul>
                    <li><Link to="/nav1/navoneone/">二级导航一</Link></li>
                    <li><Link to="/nav1/navonetwo/">二级导航二</Link></li>
                </ul>
            </div>
            <div className="nav-Content">
                <Route path="/nav1/navoneone/" component={NavOneOne}></Route>
                <Route path="/nav1/navonetwo/" component={NavOneTwo}></Route>
            </div>
        </div>
    )
}
export default Nav1;
