import React from 'react';
import { Component } from 'react';

class MainPage extends Component {
  btnEvent = (key, textNum) => {
    let classType = null;
    let text = null;
    if (this.props.Questions.type === 2) {
      classType = "img-button";
      text = '';
    }
    else {
      classType = "button";
      text = this.props.Questions.answer[textNum];      
    }
    return (
      <button className={classType} type="button" onClick={function (e) {
        e.preventDefault();
        this.props.btnClick(key);
        console.log("mainpage" + key);
      }.bind(this)}>{text}</button>
    );
  }
  render() {
    const data = this.props.Questions;
    let eventData = null;
    if (data.type === 0) {
      eventData =
        <div className="page">
          <img className="image" src={data.image} alt="" />
          <div className = "text">
            <h2>{data.text}</h2>
          </div>
          <div className="button-grid">
            {this.btnEvent(data.button[0], 0)}
            {this.btnEvent(data.button[1], 1)}
            {this.btnEvent(data.button[2], 2)}
          </div>
        </div>;
    }
    else if (data.type === 1) {
      eventData =
        <div className="page">
          <img className="image" src={data.image} alt="" />
          <div className = "text">
            <h2>{data.text}</h2>
          </div>
          <div className="button-grid">
            {this.btnEvent(data.button[0], 0)}
            {this.btnEvent(data.button[1], 1)}
          </div>          
        </div>;
    }
    else if (data.type === 2) {
      eventData =
        <div className="page">
          <img className="image" src={data.image} alt="" />
          <div className = "text">
            <h2>{data.text}</h2>
          </div>  
           {this.btnEvent(data.button[0], 0)}           
        </div>;
    }
    return eventData;
  }
}

export default MainPage;