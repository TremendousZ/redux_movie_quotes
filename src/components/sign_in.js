import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from './input';
import { connect } from 'react-redux';
import { signIn} from '../actions';


class SignIn extends Component {
    logIn =(values)=>{
        this.props.signIn(values);
    }

    render(){
        const {handleSubmit, authError} = this.props;
        return (
            <div>
                <h1 className = 'center'>Sign In</h1>
                <form onSubmit = {handleSubmit(this.logIn)}>
                    <div className="col s12 m8 offset-m2">
                        <Field name ='email' label = 'Email' component = {Input} />
                        <Field type = 'password' name ='password' label = 'Password' component = {Input} />
                    </div>

                    <div className="row">
                        <div className="col s12 right-align">
                            <button className="btn blue">Sign In</button>
                            <p className = 'red-text darken-2' >{authError}</p>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

function validate({email, password}){
    const errors = {};
    if(!email) errors.email = 'Please enter your email address';
    
    if(!password) errors.password = 'Please choose a password';

    return errors;
}

SignIn = reduxForm({
    form: 'sign-in',
    validate
})(SignIn);

function mapStateToProps(state){
    return {
        authError: state.user.error
    }
}

export default connect(mapStateToProps, {signIn})(SignIn);