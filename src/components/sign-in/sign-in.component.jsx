import React, { Component } from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ email:'', password: ''})
    } 

    handleChange = event => {
        const { value , name } = event.target
        
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with you email and password</span>
                 
                <form onSubmit={this.handleSubmit}>
                    <FormInput required 
                        label='email'
                        name='email' 
                        type='email' 
                        value={this.state.email}
                        handleChange={this.handleChange}
                    />
                
                    <FormInput required 
                        label='password'
                        name='password' 
                        type='password' 
                        value={this.state.password}
                        handleChange={this.handleChange}/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
