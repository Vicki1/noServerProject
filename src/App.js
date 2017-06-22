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
function makeNumberWeeks(weeks){
  var array=[];
for (var i = 0; i < weeks; i++){
   array.push( new weekObjectMaker(150,0,'',''));
}
return array;
}

var makeWeeks = makeNumberWeeks(12);

export default class App extends Component {
  constructor(){
    super();
    this.state={
      goalWeight: 150,
      startingWeight: 0,
      weeksArray: makeWeeks,
      totalWeeks: 36
    }
    this.makeTrimester1=this.makeTrimester1.bind(this);
     this.makeTrimester23=this.makeTrimester23.bind(this);
 
  }


  



//create goals for trimester 1
makeTrimester1(){
  var array=this.state.weeksArray.slice(0);
 
  var startingWeight=this.state.startingWeight;
   var trimester1Length=12;

   console.log(array[1].goalWeight)
   for (var i = 0; i < trimester1Length ; i++){
     console.log(array[i])
    array[i].goalWeight = (startingWeight+4); 
} 
return array;

}



//create goals for trimester 2-3
makeTrimester23(){
  var array=this.state.weeksArray.slice(0);
  
  var startingWeight= this.state.startingWeight;
   var trimester1Length=12;
   for (var i = 0; i < trimester1Length ; i++){
      array[i].goalWeight=(startingWeight+5+(1.3*(i))); 
 } 
return array;
}





 render() {


 
  console.log(this.makeTrimester1())
   console.log(this.makeTrimester23())
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


