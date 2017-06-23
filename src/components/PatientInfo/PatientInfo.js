import React,{Component} from 'react';



export default class PatientInfo extends Component{
    constructor(){
        super();
        this.state={
         
            startingWeight2: 0,
            height: 20,
            calculatedBMI: 24,
            bmiRange2: "_______"
           
            
        }
        this.handleWeightChange=this.handleWeightChange.bind(this);
        this.handleHeightChange=this.handleHeightChange.bind(this);
        this.calculateBMI=this.calculateBMI.bind(this);

      
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
}

 calculateBMI(state){


      var convertedWeight= (this.state.startingWeight2*0.45);
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
        bmiRange2: range
      })
     
   this.props.getStartingWeightAndBMI(range,this.state.startingWeight2);
    }
   
/*componentDidMount(){
    this.calculateBMI();
}*/






    render(){
    
    
        return(
            <div>
                <h3>{this.state.openingMessage}</h3>
                <h3>Calculate your BMI</h3>
                 
                
                
              Pre-pregnancy weight in lbs. <input onChange={this.handleWeightChange}/>
               <br/>
               <br/>
               Height in inches <input onChange={this.handleHeightChange}/>
               <br/>
               <br/>
               <button id="addHeight" onClick={()=>this.calculateBMI(this.state)}>CalculateBMI</button>
             <br/>

             <h4>Your BMI is : {this.state.calculatedBMI}</h4>
             <h4>Your BMI is generally considered: {this.state.bmiRange2}</h4>
            </div>
        )
    }
  }  
