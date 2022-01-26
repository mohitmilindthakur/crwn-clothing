import React from "react";
import './sign-in.styles.scss';
import FormInput from './../form-input/form-input.component'
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from './../../firebase/firebase.utils';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.resetForm();
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    resetForm() {
        this.setState({ email: '', password: '' })
    }

    render() {
        console.log('rendering')
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput value={this.state.email} handleChange={this.handleChange} label="Email" type="email" name="email" required />
                    <FormInput value={this.state.password} onChange={this.handleChange} label="Password" type="password" name="password" required />

                    <div className="buttons">
                        <CustomButton type="submit">Submit</CustomButton>
                        <CustomButton onClick={signInWithGoogle} color="google">Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignIn;