import React, { Component } from 'react'
import '../../assets/css/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from '../LoginComponent';
import { Link } from 'react-router-dom';

class Login extends Component {

    render() {

        return (
            <div className="login-container">
                <div className="containerPrincipal">
                    <div className="containerSecundario">
                        <div className="form-group">
                            <label className="lbUser">User </label>
                            <br />
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                            />
                            <br />
                            <label className="lbPass">Password </label>
                            <br />
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                            />
                            <br />
                            <Link to='/home'>
                                <LoginComponent />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Login;