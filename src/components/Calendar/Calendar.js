import React,{Component} from 'react';



export default class Calendar extends Component{
    constructor(){
        super();
        this.state={
     
        } 
    }

    render(){
      
        return(
            <div>
                   <h4>Your BMI is : {this.props.calculatedBMI}</h4>
             <h4>Your BMI is generally considered: {this.props.bmiRange2}</h4>
                <ul>
              {
                        this.props.Trimester1Weeks.map( (object, i) => {
                            
                            return <li key={i}>
                                <br/>
                                <br/>
                                Week {i+1}<br/><br/>
                                Goal Weight:  {object.goalWeight}<br/><br/>
                                Actual Weight: {object.actualWeight}<br/><br/>
                                Doctor's Note: {object.doctorsNote}<br/><br/>
                                Personal Note: {object.patientsNote}</li>
                              
                            
                        })
                    }
                    <br/>
                     {
                        this.props.Trimester23Weeks.map( (object, i) => {
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