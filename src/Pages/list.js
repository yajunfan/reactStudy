import React, { Component } from 'react';
// import TodoListUi from '../reduxStudy/TodoListsUi'
class Lists extends Component {
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
    }
    render() { 
        return (  
            <div>
                <ul>
                    {
                        this.state.lists.map((item,index)=>{
                            return (
                                <li key={index}> {item.title}</li>
                            )
                        })
                    }
                </ul>
                </div>
        );
    }
    componentDidMount(){
        console.log(this.props.match)
    }
}
 
export default Lists;