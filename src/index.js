import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header.js';
import './style.css';
class App extends React.Component{

    render(){
        return (
        <div>    
        <Header />
        </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));