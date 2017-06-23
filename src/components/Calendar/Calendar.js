import React,{Component} from 'react';

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
   array.push( new weekObjectMaker('____',<input className="actualWeightInput"/>,<input className="doctorsNoteInput"/>,<input className="patientsNoteInput"/>));
}
return array;
}

var makeWeeks1 = makeNumberWeeks(12);

var makeWeeks2 = makeNumberWeeks(24);

export default class Calendar extends Component{
    constructor(){
        super();
        this.state={
               Trimester1Weeks: makeWeeks1,
              Trimester23Weeks: makeWeeks2,
           
        }
        this.makeTrimester1=this.makeTrimester1.bind(this);
        this.makeTrimester23=this.makeTrimester23.bind(this);
        
        //this.calculate=this.calculate.bind(this);
    }

    //create goals for trimester 1
makeTrimester1(){
  var array=this.state.Trimester1Weeks.slice(0);
 
  var startingWeight=this.props.startingWeight;
   var trimester1Length=12;

 
   for (var i = 0; i < trimester1Length ; i++){
     
    array[i].goalWeight = (startingWeight+4); 
} 
this.setState({
  Trimester1Weeks: array
})

}

//create goals for trimester 2-3
makeTrimester23(){
  var array=this.state.Trimester23Weeks.slice(0);
  
  var startingWeight= this.props.startingWeight;
   var trimester1Length=24;
   for (var i = 0; i < trimester1Length ; i++){
      array[i].goalWeight=(startingWeight+5+(1.3*(i))); 
 } 

this.setState({
   Trimester23Weeks: array
})
}



componentDidMount(){
    this.makeTrimester1();
    this.makeTrimester23();
}

    render(){
       console.log(this.props)
        return(
            <div>
                <ul>
              {
                        this.state.Trimester1Weeks.map( (object, i) => {
                            
                            return <li key={i}>
                                <br/>
                                <br/>
                                Week {i+1}<br/><br/>
                                Goal Weight: {object.goalWeight}<br/><br/>
                                Actual Weight: {object.actualWeight}<br/><br/>
                                Doctor's Note: {object.doctorsNote}<br/><br/>
                                Personal Note: {object.patientsNote}</li>
                              
                            
                        })
                    }
                    <br/>
                     {
                        this.state.Trimester23Weeks.map( (object, i) => {
                            return <li key={i}>
                                <br/>
                                <br/>
                                 Week {i+13}<br/><br/>
                                Goal Weight:{object.goalWeight}<br/><br/>
                                Actual Weight:{object.actualWeight}<br/><br/>
                                Doctor's Note:{object.doctorsNote}<br/><br/>
                                Personal Note:{object.patientsNote}</li>
                              
                            
                        })
                    }
                    </ul>
            </div>
        )
    }
}