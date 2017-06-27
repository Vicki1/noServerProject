import React,{Component} from 'react';
import { Button } from 'react-bootstrap';

//file should be good


export default class PatientInfo extends Component{
    constructor(){
        super();
        this.state={
         
            startingWeight2: 0,
            height: 20,
}
        this.handleWeightChange=this.handleWeightChange.bind(this);
        this.handleHeightChange=this.handleHeightChange.bind(this);
        this.recordInput=this.recordInput.bind(this);
     }
handleWeightChange(e){
    this.setState(
        
        Object.assign({}, this.state,{startingWeight2: e.target.value} ) 
    )
}
handleHeightChange(e){
    this.setState(
        Object.assign({}, this.state,{height: e.target.value} )
    )
};

recordInput(){
this.props.calculateBMI(this.state.startingWeight2,this.state.height)
}



    render(){
    
    
        return(
            <div>
                    
                <h4 className="calculationHeader">Calculate your BMI</h4>
                <br/>
                Pre-pregnancy weight in lbs.<br/> 
                <input onChange={this.handleWeightChange}/>
               <br/>
               <br/>
               Height in inches<br/>
                <input onChange={this.handleHeightChange}/> 
               <br/>
               <br/>
               <button id="addHeight" className="btn btn-info" onClick={()=>this.recordInput(this.state)}>CalculateBMI</button>
             <br/>

          
            </div>
        )
    }
  }  
