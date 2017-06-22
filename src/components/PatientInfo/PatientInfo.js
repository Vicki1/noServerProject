import React,{Component} from 'react';

var calculatedBMI = 24;

export default class PatientInfo extends Component{
    render(){
        return(
            <div>
                <h3>What is your BMI?</h3>
                 I am female
                 <br/>
                 <br/>
              I weigh <input/>lbs.
               <br/>
               <br/>
               I am <input/> inches tall
               <br/>
               <h4>Your BMI is : {calculatedBMI}</h4>
            </div>
        )
    }
}