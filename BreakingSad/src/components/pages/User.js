import React, { Component } from 'react'
import '../../assets/css/User.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginComponent from '../LoginComponent'
import { Link } from 'react-router-dom';

class Quotes extends Component {

    render() {
        return (
            <div className='quotes-container'>
                <h2>User</h2>
                <div className="table-container">
                    <Link to='/'>
                        <LoginComponent />
                    </Link>
                </div>
            </div>
        )
    }
}

export default Quotes;