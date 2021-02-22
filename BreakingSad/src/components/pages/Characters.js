import React, {useState} from 'react'
import '../../assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';


function Characters() {

    const dataCharacters =[
        {id:1, name:"Walter White", nickname:"Heisenberg", occupation:"Chemistry Teacher", appearence:"1,2,3,4,5", portrayed:"Brian Cranston"},
        {id:2, name:"Jesse Pinkman", nickname:"Cap n' Cook", occupation:"Meth Dealer", appearence:"1,2,3,4,5", portrayed:"Aaron Paul"},
        {id:3, name:"Henry Schrader", nickname:"Hank", occupation:"DEA Agent", appearence:"1,2,3,4,5", portrayed:"Dean Norris"},
        {id:4, name:"Skyler White", nickname:"Sky", occupation:"House wife", appearence:"1,2,3,4,5", portrayed:"Anna Gunn"},
        {id:5, name:"Walter White Jr.", nickname:"Flynn", occupation:"Teenager", appearence:"1,2,3,4,5", portrayed:"RJ Mitte"},
    ];
    
    const [data, setData] = useState(dataCharacters);
    const [modalEdit, setModalEdit] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [modalInsert, setModalInsert] = useState(false);

    const [selectedCharacter, setSelectedCharacter] = useState({
        id: '',
        name: '',
        nickname: '',
        occupation: '',
        appearence: ''
      });

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
            character.nickname=selectedCharacter.nickname;
            character.occupation=selectedCharacter.occupation;
            character.appearence=selectedCharacter.appearence;
          }
        });
        setData(dataNueva);
        setModalEdit(false);
      }

    return (
        <div className="Characters">
            <h2>Characters</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Nickname</th>
                        <th>Occupation</th>
                        <th>Appearence</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(elemento=>(
                        <tr>
                            <td>{elemento.id}</td>
                            <td>{elemento.name}</td>
                            <td>{elemento.nickname}</td>
                            <td>{elemento.occupation}</td>
                            <td>{elemento.appearence}</td>
                            <td>
                                <button className="btn btn-primary">Edit</button> {"   "}
                                <button className="btn btn-danger">Delete</button>
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
                        <label>ID</label>
                        <input
                        className="form-control"
                        readOnly
                        type="text"
                        name="id"
                        value={selectedCharacter && selectedCharacter.id}
                        />
                        <br />

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

                        <label>Appearence</label>
                        <input
                        className="form-control"
                        type="text"
                        name="appearence"
                        value={selectedCharacter && selectedCharacter.appearence}
                        onChange={handleChange}
                        />
                        <br />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onClick={()=>edit()}>
                        Actualizar
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={()=>setModalEdit(false)}
                    >
                        Cancel
                    </button>
                </ModalFooter>
            </Modal>

        </div>
    )
}

export default Characters;