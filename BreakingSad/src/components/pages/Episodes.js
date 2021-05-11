import React, { Component } from 'react'
import '../../assets/css/Episodes.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from "axios";

const url = 'http://ec2co-ecsel-1sdmja9tx78h6-1970409881.us-east-2.elb.amazonaws.com:9000/api/v1/episodes/';

class Episodes extends Component {

state = {
    data:[],
    modalInsert: false,
    modalDelete: false,
    form:{
        _id: '',
        title: '',
        season: '',
        episode: '',
        air_date: ''
    }
}

getPetition=()=>{
    axios.get(url).then(response=>{
        this.setState({data: response.data});
    }).catch(error=>{
        console.log(error.message);
    })
}

postPetition=async()=>{
    delete this.state.form._id;
    await axios.post(url,this.state.form).then(response=>{
        this.modalInsert();
        this.getPetition();
    }).catch(error=>{
        console.log(error.message);
    })
}

putPetition=()=>{
    axios.patch(url+this.state.form._id, this.state.form).then(response=>{
        this.modalInsert();
        this.getPetition();
    }).catch(error=>{
        console.log(error.message);
    })
}

deletePetition=()=>{
    axios.delete(url+this.state.form._id).then(response=>{
        this.setState({modalDelete: false});
        this.getPetition();
    }).catch(error=>{
        console.log(error.message);
    })
}

componentDidMount() {
    this.getPetition();
}

    chooseEpisode=(elemento)=>{
        this.setState({
            modalType: 'edit',
            form: {
                _id: elemento._id,
                title: elemento.title,
                season: elemento.season,
                episode: elemento.episode,
                air_date: elemento.air_date,
                modalType: ''
            }
        })
    }

    handleChange=async e=>{
        e.persist();
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    modalInsert=()=>{
        this.setState({modalInsert: !this.state.modalInsert});
    }

    render(){
        const {form}=this.state;
    return (
        <div className="episodes-container">
            <h2>Episodes</h2>
            <button className="btn btn-success" onClick={() => {this.setState({form: null, modalType: 'insert'}); this.modalInsert()}}>Insert</button>
            <div className="table-container">
                <table className="table table-responsive table-dark table-striped table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>

                            <th>TITLE</th>
                            <th>SEASON</th>
                            <th>EPISODE</th>
                            <th>AIR_DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(elemento => {
                            return(
                            <tr>

                                <td><Link to={"/episodes/" + elemento.title} className='disabled'>
                                    {elemento.title}
                                </Link></td>
                                <td>{elemento.season}</td>
                                <td>{elemento.episode}</td>
                                <td>{elemento.air_date}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => {this.chooseEpisode(elemento); this.modalInsert()}}><i className='far fa-edit' /></button> {"   "}
                                    <button className="btn btn-danger" onClick={() => {this.chooseEpisode(elemento); this.setState({modalDelete: true})}}><i className='far fa-trash-alt' /></button>
                                </td>
                            </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>


            <Modal isOpen={this.state.modalDelete}>
                <ModalBody>
                    Are you sure you want to delete {form && form.title}?
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-danger" onClick={() => this.deletePetition()}>
                        Yes
                </button>
                    <button className="btn btn-secondary" onClick={() => this.setState({modalDelete: false})}>
                        No
                </button>
                </ModalFooter>
            </Modal>


            <Modal isOpen={this.state.modalInsert}>
                <ModalHeader>
                    <div>
                        <h3>Insert new Episode</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">


                        <label>Title</label>
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            value={form?form.title: ''}
                            onChange={this.handleChange}
                        />
                        <br />

                        <label>Season</label>
                        <input
                            className="form-control"
                            type="text"
                            name="season"
                            value={form?form.season: ''}
                            onChange={this.handleChange}
                        />
                        <br />

                        <label>Episode</label>
                        <input
                            className="form-control"
                            type="text"
                            name="episode"
                            value={form?form.episode: ''}
                            onChange={this.handleChange}
                        />
                        <br />

                        <label>Air Date</label>
                        <input
                            className="form-control"
                            type="text"
                            name="air_date"
                            value={form?form.air_date: ''}
                            onChange={this.handleChange}
                        />
                        <br />
                    </div>
                </ModalBody>
                <ModalFooter>
                    {this.state.modalType == 'insert' ?
                        <button className="btn btn-primary" onClick={() => this.postPetition()}>
                            Insert
                    </button> : <button className="btn btn-primary" onClick={() => this.putPetition()}>
                            Edit
                    </button>
                    }
                    <button
                        className="btn btn-danger"
                        onClick={() => this.modalInsert()}
                    >
                        Cancel
                </button>
                </ModalFooter>
            </Modal>
        </div>
    );
    }
}

export default Episodes;