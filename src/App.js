import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './components/Calendar/Calendar';
import PatientInfo from './components/PatientInfo/PatientInfo';
import MommyFacts from './components/MommyFacts/MommyFacts';



export default class App extends Component {
  constructor(){
    super();
    this.state={
        startingWeight: 0,
        goalWeight: 0,
        bmiRange: '______',
   
       }
   
 this.getStartingWeightAndBMI=this.getStartingWeightAndBMI.bind(this);
 
  }


// get bmiRange and startingWeight input from PatentInfo.js
getStartingWeightAndBMI(bmiRange,startingWeight){
  
this.setState(
 Object.assign({}, this.state, {bmiRange: bmiRange,startingWeight : startingWeight})
)

}


render() {
 return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pregnancy Fitness Tracker</h2>
        </div>
        <div className="PatientInfo">
          <PatientInfo getStartingWeightAndBMI={this.getStartingWeightAndBMI}/>
        </div>
        <div className="calendarClass">
          <Calendar  bmiRange={this.state.bmiRange} startingWeight={this.state.startingWeight}/>
        </div>
        <div className="mommyFactsclass">
          <MommyFacts />
        </div>
      </div>
    );
  }
}


