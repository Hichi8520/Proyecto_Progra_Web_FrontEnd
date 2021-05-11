import React, { Component } from 'react'
import '../../assets/css/Characters.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from "axios";

const url = 'http://ec2co-ecsel-1sdmja9tx78h6-1970409881.us-east-2.elb.amazonaws.com:9000/api/v1/characters/';

class Characters extends Component {

state = {
    data:[],
    modalInsert: false,
    modalDelete: false,
    form:{
        _id: '',
        name: '',
        nickname: '',
        occupation: '',
        portrayed: ''
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

    chooseCharacter=(elemento)=>{
        this.setState({
            modalType: 'edit',
            form: {
                _id: elemento._id,
                name: elemento.name,
                nickname: elemento.nickname,
                occupation: elemento.occupation,
                portrayed: elemento.portrayed,
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
        <div className="characters-container">
            <h2>Characters</h2>
            <button className="btn btn-success" onClick={() => {this.setState({form: null, modalType: 'insert'}); this.modalInsert()}}>Insert</button>
            <div className="table-container">
                <table className="table table-responsive table-dark table-striped table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>

                            <th>NAME</th>
                            <th>NICKNAME</th>
                            <th>OCCUPATION</th>
                            <th>PORTRAYED</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(elemento => {
                            return(
                            <tr>

                                <td><Link to={"/characters/" + elemento.name} className='disabled'>
                                    {elemento.name}
                                </Link></td>
                                <td>{elemento.nickname}</td>
                                <td>{elemento.occupation}</td>
                                <td>{elemento.portrayed}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => {this.chooseCharacter(elemento); this.modalInsert()}}><i className='far fa-edit' /></button> {"   "}
                                    <button className="btn btn-danger" onClick={() => {this.chooseCharacter(elemento); this.setState({modalDelete: true})}}><i className='far fa-trash-alt' /></button>
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
                    Are you sure you want to delete {form && form.name}?
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
                        <h3>Insert new Character</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">


                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            value={form?form.name: ''}
                            onChange={this.handleChange}
                        />
                        <br />

                        <label>Nickname</label>
                        <input
                            className="form-control"
                            type="text"
                            name="nickname"
                            value={form?form.nickname: ''}
                            onChange={this.handleChange}
                        />
                        <br />

                        <label>Occupation</label>
                        <input
                            className="form-control"
                            type="text"
                            name="occupation"
                            value={form?form.occupation: ''}
                            onChange={this.handleChange}
                        />
                        <br />

                        <label>Portrayed by</label>
                        <input
                            className="form-control"
                            type="text"
                            name="portrayed"
                            value={form?form.portrayed: ''}
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

export default Characters;