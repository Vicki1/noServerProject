import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './components/Calendar/Calendar';
import PatientInfo from './components/PatientInfo/PatientInfo';


//THIS IS THE FIRST PROJECT!!
class weekObjectMaker{
  constructor(maxGoalWeight, minGoalWeight,actualWeight, doctorsNote, patientsNote){
    this.maxGoalWeight = maxGoalWeight;
    this.minGoalWeight = minGoalWeight;
    this.actualWeight = actualWeight;
    this.doctorsNote=doctorsNote;
    this.patientsNote=patientsNote;
  }
}
function makeNumberWeeks(weeks){
  var array=[];
for (var i = 0; i < weeks; i++){
   array.push( new weekObjectMaker('____','____',<input className="actualWeightInput"/>,<input className="doctorsNoteInput"/>,<input className="patientsNoteInput"/>));
}
return array;
}

var makeWeeks1 = makeNumberWeeks(12);

var makeWeeks2 = makeNumberWeeks(28);

export default class App extends Component {
  constructor(){
    super();
    this.state={
        startingWeight: "",
        theirHeight: "",
        calculatedBMI:'______' ,
        bmiRange: '______',
        Trimester1Weeks: makeWeeks1,//should be good
        Trimester23Weeks: makeWeeks2,//should be good
       }
   

this.calculateBMI=this.calculateBMI.bind(this);
 
  }


// get bmiRange and startingWeight input from PatentInfo.js

 calculateBMI(weight,height){


      var convertedWeight= (weight*0.45);
      var convertedHeight= (height*0.025);
      var heightSquared=Math.pow(convertedHeight,2);
      var myCalculatedBMI= (convertedWeight/heightSquared);
    
      var range= "";
      if (18.5 <= myCalculatedBMI && myCalculatedBMI<= 24.9){
       range = "HEALTHY";
      }
      else if (myCalculatedBMI < 18.5){
         range = "TOO LOW, Please consult a doctor for special suggestions concerning your weight gain during pregnancy." ;
      }
      else if (myCalculatedBMI > 24.9){
          range= "TOO HIGH, Please consult a doctor for special suggestions concerning your weight gain during pregnancy.";
      }
      else {
          range="INVALID INPUT, Please input numeric values for height and weight"
      }

  var array1=this.state.Trimester1Weeks.slice(0);
  var trimesterLength1=12;
  for (var i = 0; i < trimesterLength1 ; i++){
     if(range==="HEALTHY"){array1[i].maxGoalWeight = (Number(weight)+4); 
     array1[i].minGoalWeight = (Number(weight))
    }
    else{ 
  array1[i].maxGoalWeight = <input className="doctorMaxGoalInput"/>;
  array1[i].minGoalWeight = <input className="doctorMinGoalInput"/>;
    }
} 
  var array23=this.state.Trimester23Weeks.slice(0);
  var trimesterLength23=28;
  for (var j = 0; j < trimesterLength23 ; j++){
    if (range==="HEALTHY"){
     array23[j].maxGoalWeight = (Number(weight)+5+(1.107*(j)));
      array23[j].minGoalWeight = (Number(weight)+5+(0.7449*(j)))
    }
    else{
    array23[j].maxGoalWeight = <input className="doctorMaxGoalInput"/>;
    array23[j].minGoalWeight = <input className="doctorMinGoalInput" />
    }
 } 
 this.setState({
 Trimester1Weeks: array1,//should be good
        Trimester23Weeks: array23,
        bmiRange: range,
        startingWeight: weight,
        theirHeight: height,
        calculatedBMI: myCalculatedBMI,
 })
  
 
//(Number(weight)+5+(1.3*(j)))
  
  
 } 
 
 

   

//create goals for trimester 2-3

 




render() {
  console.log(this.state.calculatedBMI)
  console.log(this.state.bmiRange)
console.log(this.state.startingWeight)
console.log(this.state.theirHeight)
console.log(this.state.Trimester23Weeks);

 return (
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pregnancy Fitness Tracker</h2>
        </div>
        <div className="PatientInfo">
          <PatientInfo calculateBMI={this.calculateBMI}/>
        </div>
        <div className="calendarClass">
          <Calendar bmiRange={this.state.bmiRange} calculatedBMI={this.state.calculatedBMI}Trimester1Weeks={this.state.Trimester1Weeks}  Trimester23Weeks={this.state.Trimester23Weeks}/>
        </div>
       
      </div>
    );
  }
}


