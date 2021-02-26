import React, { useState, useEffect } from 'react'
import '../../assets/css/Characters.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import { Link } from 'react-router-dom';

function Characters() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const readCharacters = () => {
            if (localStorage.getItem('characters')) {
                setData(JSON.parse(localStorage.getItem('characters')))
            }
            
        }
        readCharacters()
    }, []);

    const [modalEdit, setModalEdit] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [modalInsert, setModalInsert] = useState(false);

    const [selectedCharacter, setSelectedCharacter] = useState({
        id: '',
        name: '',
        nickname: '',
        occupation: '',
        portrayed: ''
    });

    const chooseCharacter=(elemento, caso)=>{
        setSelectedCharacter(elemento);
        (caso==='Edit')?setModalEdit(true):setModalDelete(true)
    }

    const handleChange=e=>{
        const {name, value}=e.target;
        setSelectedCharacter((prevState)=>({
        ...prevState,
        [name]: value
        }));
    }

    const edit=()=>{
        var dataNueva=data;
        dataNueva.map(character=>{
          if(character.id===selectedCharacter.id){
            character.name=selectedCharacter.name;
            character.nickname=selectedCharacter.nickname;
            character.occupation=selectedCharacter.occupation;
            character.portrayed=selectedCharacter.portrayed;
          }
        });
        localStorage.setItem('characters', JSON.stringify(dataNueva))
        setData(dataNueva);
        setModalEdit(false);
    }

    const deleted =()=>{
        const filteredData = data.filter(character=>character.id!==selectedCharacter.id);
        localStorage.setItem('characters', JSON.stringify(filteredData))
        setData(filteredData);
        setModalDelete(false);
    }

    const abrirModalInsertar=()=>{
        setSelectedCharacter(null);
        setModalInsert(true);
    }

    const insert =()=>{
        var valueInsert=selectedCharacter;
        if (data.length===0) {
            valueInsert.id=1;
        }
        else {
            valueInsert.id=data[data.length-1].id+1;
        }
        
        var newData = data;
        newData.push(valueInsert);
        localStorage.setItem('characters', JSON.stringify(newData))
        setData(newData);
        setModalInsert(false);
    }

    return (
        <div className="characters">
            <h2>Characters</h2>
            <br/>
            <button className="btn btn-success" onClick={()=>abrirModalInsertar()}>Insert</button>
            <br/><br/>
            <table className="table table-responsive-sm table-striped table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Nickname</th>
                        <th>Occupation</th>
                        <th>Portrayed</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(elemento=>(
                        <tr>
                            <td>{elemento.id}</td>
                            <td><Link to={"/characters/"+elemento.name} className='disabled'>
                            {elemento.name}
                            </Link></td>
                            <td>{elemento.nickname}</td>
                            <td>{elemento.occupation}</td>
                            <td>{elemento.portrayed}</td>
                            <td>
                                <button className="btn btn-primary" onClick={()=>chooseCharacter(elemento, 'Edit')}><i className='far fa-edit'/></button> {"   "}
                                <button className="btn btn-danger" onClick={()=>chooseCharacter(elemento, 'Delete')}><i className='far fa-trash-alt'/></button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

            <Modal isOpen={modalEdit}>
                <ModalHeader>
                <div>
                    <h3>Edit Character</h3>
                </div>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">

                        <label>Name</label>
                        <input
                        className="form-control"
                        type="text"
                        name="name"
                        value={selectedCharacter && selectedCharacter.name}
                        onChange={handleChange}
                        />
                        <br />

                        <label>Nickname</label>
                        <input
                        className="form-control"
                        type="text"
                        name="nickname"
                        value={selectedCharacter && selectedCharacter.nickname}
                        onChange={handleChange}
                        />
                        <br />

                        <label>Occupation</label>
                        <input
                        className="form-control"
                        type="text"
                        name="occupation"
                        value={selectedCharacter && selectedCharacter.occupation}
                        onChange={handleChange}
                        />
                        <br />

                        <label>Portrayed</label>
                        <input
                        className="form-control"
                        type="text"
                        name="portrayed"
                        value={selectedCharacter && selectedCharacter.portrayed}
                        onChange={handleChange}
                        />
                        <br />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onClick={()=>edit()}>
                        Save Changes
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={()=>setModalEdit(false)}
                    >
                        Cancel
                    </button>
                </ModalFooter>
            </Modal>


            <Modal isOpen={modalDelete}>
                <ModalBody>
                Are you sure you want to delete {selectedCharacter && selectedCharacter.name}?
                </ModalBody>
                <ModalFooter>
                <button className="btn btn-danger" onClick={()=>deleted()}>
                    Yes
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={()=>setModalDelete(false)}
                >
                    No
                </button>
                </ModalFooter>
            </Modal>


            <Modal isOpen={modalInsert}>
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
                            value={selectedCharacter ? selectedCharacter.name: ''}
                            onChange={handleChange}
                            />
                        <br />

                        <label>Nickname</label>
                            <input
                            className="form-control"
                            type="text"
                            name="nickname"
                            value={selectedCharacter ? selectedCharacter.nickname: ''}
                            onChange={handleChange}
                            />
                        <br />

                        <label>Occupation</label>
                            <input
                            className="form-control"
                            type="text"
                            name="occupation"
                            value={selectedCharacter ? selectedCharacter.occupation: ''}
                            onChange={handleChange}
                            />
                        <br />

                        <label>Portrayed by</label>
                            <input
                            className="form-control"
                            type="text"
                            name="portrayed"
                            value={selectedCharacter ? selectedCharacter.portrayed: ''}
                            onChange={handleChange}
                            />
                        <br />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary"
                    onClick={()=>insert()}>
                        Insert
                    </button>
                <button
                    className="btn btn-danger"
                    onClick={()=>setModalInsert(false)}
                >
                    Cancel
                </button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Characters;