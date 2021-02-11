import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomBtn from '../custom-btn/custom-btn.component';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor (props) {
        super(props) 

        this.state = {
            email:'',
            password: ''
        };

        console.log(this.state)
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value }) //dynamically set value
    }

    render () {
        return (
            <div className='signIn'>

                <h2>I already have an account!</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput 
                        name='email' 
                        type='email' 
                        handleChange={this.handleChange}
                        value={this.state.email} 
                        label='email'
                        required />

                    <FormInput 
                        name='password' 
                        type='password' 
                        handleChange={this.handleChange}
                        value={this.state.password} 
                        label='password'
                        required />

                    <CustomBtn type="submit" > Sign In </CustomBtn>

                </form>

            </div>
        )
    }
}

export default SignIn;