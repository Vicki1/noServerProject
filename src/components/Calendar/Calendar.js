import React,{Component} from 'react';



export default class Calendar extends Component{
    render(){
        return(
            <div>
              <ol>  {
                        this.props.Trimester1Weeks.map( (object, i) => {
                            return <li key={i}>
                                Goal Weight:{object.goalWeight}<br/><br/>
                                Actual Weight:{object.actualWeight}<br/><br/>
                                Doctors Note:{object.doctorsNote}<br/><br/>
                                Actual Note:{object.patientsNote}</li>
                              
                            
                        })
                    }
                     {
                        this.props.Trimester23Weeks.map( (object, i) => {
                            return <li key={i}>
                                Goal Weight:{object.goalWeight}<br/><br/>
                                Actual Weight:{object.actualWeight}<br/><br/>
                                Doctors Note:{object.doctorsNote}<br/><br/>
                                Actual Note:{object.patientsNote}</li>
                              
                            
                        })
                    }
                    </ol>
            </div>
        )
    }
}