import React from 'react';
import { BiCheckCircle } from "react-icons/bi";
import { GoTrashcan } from "react-icons/go";
import { AiFillCheckCircle } from "react-icons/ai";
import '../style.css';

class Todolist extends React.Component{
    constructor(props)
    {
        super(props);
        this.createlistItem = this.createListItem.bind(this);
      
    }

    delButtonStyle = {
        cursor: 'pointer',
        right: '8%' ,
        top:'10%',
        position:'absolute',
        border:'none' ,
        fontSize:'30px',
        color: '#bfcdcb' ,
        padding:'4px',
        margin:'1px',
    }
    completeButtonStyle = {
        cursor: 'pointer',
        right: '2%' ,
        top:'10%',
        position:'absolute',
        border:'none' ,
        fontSize:'32px',
        color: '#bfcdcb' ,
        padding:'4px',
        margin:'1px',
        color:'teal',
    }
    createListItem=(item)=>{
       
        return <li id="listItem" key={item.key}>{item.text}
        <GoTrashcan id="delbtn" onMouseOver={({target}) => target.style.color='red'}
        onMouseOut={({target})=>target.style.color='#c4d1cf'}
        onClick={()=>this.props.delete(item.key)} style={this.delButtonStyle} />
        <BiCheckCircle style={this.completeButtonStyle} onClick={()=>{
            this.props.onUpdate(item.key);
            this.props.delete(item.key);

        }}/>
        </li>
    }

    createDoneList=(doneItem)=>{
        return (
        <li id="doneItem" key={Math.random()*20000}>{doneItem}
        <GoTrashcan id="delbtn" onMouseOver={({target}) => target.style.color='red'}
        onMouseOut={({target})=>target.style.color='#c4d1cf'} style={this.delButtonStyle}
        />
        <AiFillCheckCircle style={this.completeButtonStyle} /></li>
        );    
}
    


    render(){
        
        var list = this.props.list;
        var listItem = list.map(this.createListItem);
        var donelist = this.props.donelist;
        var doneli = donelist.map(this.createDoneList);

        return( 
        <div id="listItemDiv">
        <div id="inCompletTask">   
        <ul id="tasklist">
            {listItem}
        </ul>
        </div>
        
        <div id="CompletTask">   
        <ul id="donelist">
            {doneli}
        </ul>
        </div>
        </div>
        );
    }
}

export default Todolist;