import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from '../Pages/home';
import Nav1 from '../Pages/secondNav/nav1';
import '../../src/index.css'
function AppRouter(){
    let Lists=[
        {path:"/",exact:true,title:"首页",componentName:Home},
        {path:"/nav1/",exact:false,title:"导航一",componentName:Nav1}
    ];
    return ( 
        <Router>
            <div className="main-container">
                <div className="left-container">
                    <ul>
                        {
                            Lists.map((item,index)=>{
                                return(
                                    <li key={index}><Link to={item.path}>{item.title}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="right-container">
                    {
                        Lists.map((item,index)=>{
                            return(
                                <Route path={item.path} exact={item.exact} component={item.componentName} key={index}></Route>
                            )
                        })
                    }
                </div>
            </div>
        </Router>

    );
};
export default AppRouter;
// class AppRouter extends Component {
    
//     constructor(props){
//         super(props);
//         this.state={
            
//         }
//     }
//     render() { 
//         return ( 
//             <Router>
//                 <div className="main-container">
//                     <div className="left-container">
//                         <ul>
//                             {
//                                 Lists.map((item,index)=>{
//                                     return(
//                                         <li key={index}><Link to={item.path}>{item.title}</Link></li>
//                                     )
//                                 })
//                             }
//                             {/* <li><Link to="/">首页</Link></li>
//                             <li><Link to="/nav1/">导航一</Link></li> */}
//                         </ul>
//                     </div>
//                     <div className="right-container">
//                         <ul>
//                             {
//                                 Lists.map((item,index)=>{
//                                     return(
//                                         <Route to={item.path} exact={item.exact} component={Home}></Route>
//                                     )
//                                 })
//                             }
//                             {/* <li><Link to="/">首页</Link></li>
//                             <li><Link to="/nav1/">导航一</Link></li> */}
//                         </ul>
//                         <Route path="/" exact component={Home}></Route>
//                         <Route path="/nav1/" component={Nav1}></Route>
//                     </div>
//                 </div>
//             </Router>

//         );
//     }
// }
 
