import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './components/Calendar/Calendar';
import PatientInfo from './components/PatientInfo/PatientInfo';
import MommyFacts from './components/MommyFacts/MommyFacts';
class weekObjectMaker{
  constructor(goalWeight, actualWeight, doctorsNote, patientsNote){
    this.goalWeight = goalWeight;
    this.actualWeight = actualWeight;
    this.doctorsNote=doctorsNote;
    this.patientsNote=patientsNote;
  }
}

export default class App extends Component {
  constructor(){
    super();
    this.state={
      startingWeight: 0,
      weeksArray: [],
      totalWeeks: 36
    }
this.makeNumberWeeks=this.makeNumberWeeks.bind(this);
    this.makeTrimester1=this.makeTrimester1.bind(this);
     this.makeTrimester23=this.makeTrimester23.bind(this);
 
  }


  

makeNumberWeeks(){
var array=this.state.weeksArray.slice();
var weeks=this.state.totalWeeks;
for (var i = 0; i < weeks; i++){
   array.push( new weekObjectMaker(0,0,'',''));
}
this.setState({
weeksArray: array,
})
}

//create goals for trimester 1
makeTrimester1(){
  var array=this.state.weeksArray.splice();
  var weight=this.state.startingWeight;
   var trimester1Length=12;
   for (var i = 0; i < trimester1Length ; i++){
 array[i].goalWeight=(weight+4); 
 console.log(array[i]);
 } 
this.setState({
   weeksArray:array
 })
}

//create goals for trimester 2-3
makeTrimester23(){
  var array= this.weeksArray.splice();
  var weight=this.startingWeight;
  var trimester23Length=36
   for (var i=12; i < trimester23Length; i++){
array[i].goalWeight=(weight+5+(1.3*(i-12))); 
 } 
 this.setState({
   weeksArray:array
 })
}



 render() {


   
   //console.log(this.makeTrimester1(this.state.weekWeightArray,this.state.startingWeight))
   //console.log(this.makeTrimester23(this.state.weekWeightArray,this.state.startingWeight))
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pregnancy Fitness Tracker</h2>
        </div>
        <div className="PatientInfo">
          <PatientInfo/>
        </div>
        <div className="calendarClass">
          <Calendar weeksArray={this.state.weeksArray}/>
        </div>
        <div className="mommyFactsclass">
          <MommyFacts />
        </div>
      </div>
    );
  }
}


