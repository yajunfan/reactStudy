import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import {Link, Redirect} from 'react-router-dom'
class Home extends Component {
    state = {  }
    constructor(props){
        super(props);
        this.state={
            lists:[
                {cid:123,title:'技术胖的个人博客-1'},
                {cid:456,title:'技术胖的个人博客-2'},
                {cid:789,title:'技术胖的个人博客-3'}
            ]
        };
        //手动重定向
        // this.props.history.push("/home/");  
    }
    render() { 
        return ( 
           
            <div>
                {/* 简单重定向 */}
                 {/* <Redirect to="/home/" /> */}
                 <ul>
                    {
                        this.state.lists.map((item,index)=>{
                            return (
                                <li key={index}><Link to={'/list/'+item.cid}>{item.title}</Link> </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
 
export default Home;