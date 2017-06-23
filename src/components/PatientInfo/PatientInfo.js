import React,{Component} from 'react';



export default class PatientInfo extends Component{
    constructor(){
        super();
        this.state={
            startingWeight: 40,
            height: 20,
            calculatedBMI: 0,
            bmiRange: '_________'
        }
        this.handleWeightChange=this.handleWeightChange.bind(this);
        this.handleHeightChange=this.handleHeightChange.bind(this);
        this.calculatBMI=this.calculatBMI.bind(this);
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

combineClearWeight(state){
       this.props.addTodo(state);
       this.clearInput();
   }
   combineClearhHeight(state){
       this.props.addTodo(state);
       this.clearInput();
   }

   calculatBMI(state){
      var convertedWeight= (this.state.startingWeight*0.45);
      var convertedHeight= (this.state.height*0.025);
      var heightSquared=Math.pow(convertedHeight,2);
      var myCalculatedBMI= (convertedWeight/heightSquared);
      this.setState({
          calculatedBMI: myCalculatedBMI
      })
      var range= "HEALTHY";
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
    this.setState({
      bmiRange: range  
    })
   }

    render(){
       console.log(this.state)
      
        return(
            <div>
                <h3>What is your BMI?</h3>
                 I am female (or a pregnant seahorse)
                 <br/>
                 <br/>
              Pre-pregnancy weight in lbs. <input onChange={this.handleWeightChange}/>
               <br/>
               <br/>
               Height in inches <input onChange={this.handleHeightChange}/>
               <br/>
               <br/>
               <button id="addHeight" onClick={()=>this.calculatBMI()}>CalculateBMI</button>
             <br/>

             <h4>Your BMI is : {this.state.calculatedBMI}</h4>
             <h4>Your BMI is generally considered: {this.state.bmiRange}</h4>
            </div>
        )
    }
}