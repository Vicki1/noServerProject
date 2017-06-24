import React,{Component} from 'react';



export default class Calendar extends Component{
    constructor(){
        super();
        this.state={
        showWeightGoals : true
        } 
        
    }





    render(){
    
        return(
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
            <div>
                   <h4>Your BMI is : {this.props.calculatedBMI}</h4>
             <h4>Your BMI is generally considered: {this.props.bmiRange}</h4>
                <ul>
              {
                        this.props.Trimester1Weeks.map( (object, i) => {
                            
                            return <li key={i}>
                                <br/>
                                <br/>
                                Week {i+1}<br/><br/>
                                <span>Maximum Goal Weight: {object.maxGoalWeight}</span><br/><br/>
                                <span>Minimum Goal Weight: {object.minGoalWeight}</span><br/><br/>
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
                                <span>Maximum Goal Weight:{object.maxGoalWeight}</span><br/><br/>
                               <span>Minimum Goal Weight: {object.minGoalWeight}</span><br/><br/>
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