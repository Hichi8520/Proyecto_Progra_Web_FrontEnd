import React, { Component } from 'react'
import '../../assets/css/Quotes.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const url = 'http://ec2co-ecsel-1sdmja9tx78h6-1970409881.us-east-2.elb.amazonaws.com:9000/api/v1/quotes/';

class Quotes extends Component {

    state = {
        data: [],
        form: {
            _id: '',
            quote: '',
            author: ''
        }
    }

    getPetition = () => {
        axios.get(url).then(response => {
            this.setState({ data: response.data });
        }).catch(error => {
            console.log(error.message);
        })
    }

    componentDidMount() {
        this.getPetition();
    }

    render() {
        return (
            <div className='quotes-container'>
                <h2>Quotes</h2>
                <div className="table-container">
                <table className="table table-responsive table-dark table-striped table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>QUOTE</th>
                            <th>AUTHOR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(elemento => {
                            return(
                            <tr>
                                <td>"{elemento.quote}"</td>
                                <td>- {elemento.author}</td>
                            </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}

export default Quotes;