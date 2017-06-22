import React,{Component} from 'react';



export default class Calendar extends Component{
    render(){
        return(
            <div>
                {
                        this.props.weeksArray.map( (object, i) => {
                            return <li key={i}>{object.goalWeight}</li>
                        })
                    }
            </div>
        )
    }
}