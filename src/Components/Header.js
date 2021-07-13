import React from 'react';
import Todolist from './Todolist';
import { GoPlusSmall } from "react-icons/go";
import '../style.css';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state={
            text:'',
            taskList:[],
            completetask:[],
        }
        this.OnInputSubmit = this.OnInputSubmit.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateDoneList = this.updateDoneList.bind(this);
    }

    onInputChange=e=>{
        this.setState({
            text:e.target.value,
        })
      
    }

    OnInputSubmit=e=>{
        e.preventDefault();
        var newItem = {
            text:this.state.text,
            key :Math.floor(Math.random()*10000),
        }
        this.setState({
            taskList : [...this.state.taskList,newItem],
            text : ''
        })
    }

    updateDoneList = key =>{
        var selected = this.state.taskList.filter(item=>{
            return (key === item.key);
         });
         console.log("selected task "+selected[0].text);
         this.setState({
            completetask : [...this.state.completetask,selected[0].text]
        })
        console.log("completed task"+this.state.completetask);

    }

    deleteItem = key => {
        var filterList = this.state.taskList.filter(item=>{
           return (key !== item.key);
        });

        this.setState({
            taskList:filterList
        });
    }
    
    render(){
        
        return <div id="main">
           <div id="header-div">
            <input type="text" 
            id = "inputField"
            value = {this.state.text} 
            onChange = {this.onInputChange}
            placeholder="Enter an activity..."
            />
            <button id="addButton" style={{marginTop:'10px'}}><GoPlusSmall onClick={this.OnInputSubmit} className="addIcon"/></button>
            </div>
            <Todolist list={this.state.taskList} delete={this.deleteItem} onUpdate={this.updateDoneList} donelist={this.state.completetask}/>
        </div>
    }
}

export default Header;