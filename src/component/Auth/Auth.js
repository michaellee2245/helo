import React, { Component } from 'react';
import './auth.css';
import axios from 'axios'

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
    }

    render() {
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
                        <button>Login</button>
                        <button onClick={this.newUser} >Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth;