import React from 'react'

import './sign-in.styles.scss'

import {signInwithGoogle} from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'

class SignIn extends React.Component{

    constructor(){
        super()
        this.state = {
            email:'',
            password:''
        }
    }

    /**handleEmail = event => {
        this.setState({email: event.target.value})
    }
    handlePassword = event => {
        this.setState({password: event.target.value})
    }*/

    handleChange = event => {
        //prevents any default action to take place
        //event.preventDefault()
        const {name,value}= event.target
        this.setState({[name]:value})
    }
    handleSubmit = event => {
        event.preventDefault()
        this.setState({email:'',password:''})
    }



    render(){
        console.log(this.state.email)
        console.log(this.state.password)
        return(
            <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>sign in with your email and password</span>
            <form onSubmit = {this.handleSubmit}>
                {/**<input onChange={this.handleChange} name='email' type='email' value={this.state.email} required/>
                <label>EMail</label>
                <input onChange={this.handleChange} name='password' type='password' value={this.state.password} required/>
        <label>password</label>*/}
                <FormInput 
                    name='email' 
                    type='email' 
                    label='Email' 
                    handleChange={this.handleChange} 
                    values={this.state.email} required/>

                <FormInput 
                    name='password' 
                    type='password' 
                    label='password' 
                    handleChange={this.handleChange} 
                    values={this.state.password} required/>

               <CustomButton type = 'submit'>
                   SIGN IN
               </CustomButton>
               <CustomButton onClick = {signInwithGoogle} isGoogleSignIn='true' >
                    SIGN IN WITH GOOGLE

               </CustomButton>
            </form>
            </div>
        )
    }
}

export default SignIn;