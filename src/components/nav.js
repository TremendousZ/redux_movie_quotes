import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn, signOut} from '../actions';

class Nav extends Component {

    renderAuthButtons(){
        const { auth, signIn, signOut } = this.props;
        
        if( auth ){
            return  <button className = 'btn yellow darken-2' onClick={signOut} > Sign Out </button>
        } 
        return <button className = 'btn green darken-2' onClick={signIn} > Sign In </button>
    }

    render (){ 
        return (
            <nav>
                <div className = 'navWrapper red'>
                    <Link to ='/' className = 'brand-logo'> Guess that Movie Quote!</Link>
                    <ul className = 'right'>
                        <li>
                        <Link to='/'> Home </Link>
                        </li>
                        <li>
                        <Link to='/about'> About</Link>
                        </li>
                        <li>
                        <Link to = "/secret-list"> Secret List</Link>
                        </li>
                        <li>
                            <Link to='/movie-quote'>Movie Quote</Link>
                        </li>
                        <li>
                            <Link to='/sign-up'>Sign Up</Link>
                        </li>
                        <li>
                            {this.renderAuthButtons()}
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state){
    return {
        auth: state.user.auth,
    }
}

export default connect(mapStateToProps, {
    signIn,
    signOut
    })(Nav);