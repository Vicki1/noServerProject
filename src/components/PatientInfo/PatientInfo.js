import React,{Component} from 'react';

var calculatedBMI = 24;

export default class PatientInfo extends Component{
    constructor(){
        super();
        this.state={
            startingWeight: 100,
            height: 60
        }
        this.handleWeightChange=this.handleWeightChange.bind(this);
        this.handleHeightChange=this.handleHeightChange.bind(this);
    }


handleWeightChange(e){
    this.setState({
        startingWeight: e.target.value
    })
}
handleHeightChange(e){
    this.setState({
       height: e.target.value
    })
}


    render(){
       console.log(this.state.startingWeight)
        console.log(this.state.height)
        return(
            <div>
                <h3>What is your BMI?</h3>
                 I am female (or a pregnant seahorse)
                 <br/>
                 <br/>
              Weight in lbs.<input onChange={this.handleWeightChange}/>
              <button>Take Weight</button>
               <br/>
               <br/>
               Height in inches<input onChange={this.handleHeightChange}/>
               <button>Take Height</button>
               <br/>
               <h4>Your BMI is : {calculatedBMI}</h4>
            </div>
        )
    }
}