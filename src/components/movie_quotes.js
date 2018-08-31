import React, {Component} from 'react';
import auth from '../hoc/auth';



class MovieQuotes extends Component {
    render(){

        return (
            <div>
                <h1 className ="center">Movie Quote!</h1>
                <p className = "center">WHY SO SERIOUS</p> 
            </div>

        )
    }
}
export default auth(MovieQuotes);