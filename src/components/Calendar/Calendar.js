import React,{Component} from 'react';



export default class Calendar extends Component{
    render(){
        return(
            <div>
              <ol>  {
                        this.props.Trimester1Weeks.map( (object, i) => {
                            return <li key={i}>
                                Goal Weight:{object.goalWeight}<br/>
                                Actual Weight:{object.actualWeight}<br/>
                                Doctors Note:{object.doctorsNote}<br/>
                                Actual Note:{object.patientsNote}</li>
                              
                            
                        })
                    }
                    </ol>
            </div>
        )
    }
}