import React from 'react';
import {Component} from 'react';
import url from './Data.json';
import MainPage from './MainPage';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      Questions : url.question,
      key : 0
    };
    this.buttonClick = this.buttonClick.bind(this);
  }  
  //state의 데이터를 Mainpage component로 전달 및 가공된 데이터를 반환
  getPages = (e) => {    
    var data = null;
    if (this.state.key ===0)
    {
      data = 
      <div>
        <h1>뫼비우스</h1>
        <div>
          <img className = "image" src = './Images/mainImage.jpg' alt = ""/>
        </div>
        <div className = "startButton">
          <button className = "button" type ="button" onClick ={(e) =>{
          e.preventDefault();
          this.buttonClick(1);
        }}>시작하기</button>
        </div>        
      </div>     
    }
    else
    {
      data = <MainPage Questions = {this.state.Questions[this.state.key-1]} btnClick = {this.buttonClick}></MainPage>;
    }    
    return (data);
  }
  //이벤트 발생 시 key값을 변경 
  buttonClick = (btnkey) => {    
    this.setState({key : btnkey});    
  }

  render(){    
    return (      
      <div className="main">
        {this.getPages()}
        <audio autoPlay loop>
        <source src ="./bgm.mp3" type = "audio/mp3"></source>
      </audio>      
      </div>      
    );     
  }
}

export default App;
