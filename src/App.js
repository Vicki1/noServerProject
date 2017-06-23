import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './components/Calendar/Calendar';
import PatientInfo, {giveStartingWeight} from './components/PatientInfo/PatientInfo';
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
   array.push( new weekObjectMaker('____','____',' none',' none'));
}
return array;
}

var makeWeeks1 = makeNumberWeeks(12);
var makeWeeks2 = makeNumberWeeks(24);

export default class App extends Component {
  constructor(){
    super();
    this.state={
      goalWeight: 0,
        startingWeight: 40,
        bmiRange: 'HEALTHY',
      Trimester1Weeks: makeWeeks1,
      Trimester23Weeks: makeWeeks2,

      
    }
    this.makeTrimester1=this.makeTrimester1.bind(this);
     this.makeTrimester23=this.makeTrimester23.bind(this);
 this.getStartingWeight=this.getStartingWeight.bind(this);
  }


  //create goals for trimester 1
makeTrimester1(){
  var array=this.state.Trimester1Weeks.slice(0);
 
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
  var array=this.state.Trimester23Weeks.slice(0);
  
  var startingWeight= this.state.startingWeight;
   var trimester1Length=12;
   for (var i = 0; i < trimester1Length ; i++){
      array[i].goalWeight=(startingWeight+5+(1.3*(i))); 
 } 
return array;
}

getStartingWeight(bmiRange,startingWeight){
this.setState({
bmiRange: bmiRange,
startingWeight : startingWeight
})
}



 render() {


 

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pregnancy Fitness Tracker</h2>
        </div>
        <div className="PatientInfo">
          <PatientInfo getStartingWeight={this.getStartingWeight}/>
        </div>
        <div className="calendarClass">
          <Calendar Trimester1Weeks={this.state.Trimester1Weeks} Trimester23Weeks={this.state.Trimester23Weeks}/>
        </div>
        <div className="mommyFactsclass">
          <MommyFacts />
        </div>
      </div>
    );
  }
}


