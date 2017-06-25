import React,{Component} from 'react';
import $ from "jquery";


export default class Calendar extends Component{
    constructor(){
        super();
        this.state={
        showWeightGoals : true
        } 
        
    }



/*componentDidMount() {
jQuery(React.findDOMNode(this.refs.tooltip)).tooltip();
}*/



    render(){
    
        return(
      
            <div>
                      
                   <h4><span className="bmiInfo">Your BMI is :</span> {this.props.calculatedBMI}</h4>
             <h4 className="bmiMessage"><span className="bmiInfo">Your BMI is generally considered:</span> {this.props.bmiRange}</h4>
                <ul className="plan">
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