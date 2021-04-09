import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {signInWithGoogle} from '../../firebase/firebase.util'

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);     

        this.state = {
            email:'',
            pwd:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', pwd:''})
    }

    handleChange = event => {
        const { value, name} = event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sing in with your email and password</span>
                <form>
                    <FormInput 
                        name='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label="email"  
                        required
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label="password" 
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type="submit" value="Submit form">SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>GOOGLE SIGN IN</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;