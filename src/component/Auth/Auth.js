import React, { Component } from 'react';
import './auth.css';
import axios from 'axios';
import { connect } from 'react-redux';

class Auth extends Component {

    state = {
        usernameInput: '',
        passwordInput: ''
    }

    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log('Username', this.state.usernameInput)
        // console.log('Password', this.state.passwordInput)
    }

    newUser = () => {
        axios.post('http://localhost:8080/new_user', {username: this.state.usernameInput, password: this.state.passwordInput})
        .then(response => console.log (response))
        .then(this.setState({ usernameInput: '', passwordInput: ''}))
    }

    loginUser = () => {
        axios.post('http://localhost:8080/login', {username: this.state.usernameInput, password: this.state.passwordInput})
        .then((response) => {
            this.props.history.push('/dashboard')
            
        })
        .catch((error) => {
            console.log({error})
            this.setState({usernameInput:'', passwordInput: ''})
        })
    }
    

    render() {
        console.log(this.props)
        return (
            <div className="background-container">
                <div className="main-auth-container">
                    <div>Logo</div>
                    <div className="auth-container-inputs">
                        <label>Username:</label>
                        <input name="usernameInput" value={this.state.usernameInput} onChange={this.onInputChange} />
                        <label>Password:</label>
                        <input name="passwordInput" value={this.state.passwordInput} onChange={this.onInputChange} />
                    </div>
                    <div>
                        <button onClick={this.loginUser}>Login</button>
                        <button onClick={this.newUser} >Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth;