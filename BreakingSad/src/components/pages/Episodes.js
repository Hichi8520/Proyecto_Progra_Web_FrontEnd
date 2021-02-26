import React, { useState, useEffect } from 'react'
import '../../assets/css/Episodes.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import { Link } from 'react-router-dom';

function Episodes() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const readEpisodes = () => {
            if (localStorage.getItem('episodes')) {
                setData(JSON.parse(localStorage.getItem('episodes')))
            }
            
        }
        readEpisodes()
    }, []);

    const [modalEdit, setModalEdit] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [modalInsert, setModalInsert] = useState(false);

    const [selectedEpisode, setSelectedEpisode] = useState({
        id: '',
        title: '',
        season: '',
        episode: '',
        air_date: ''
    });

    const chooseEpisode=(elemento, caso)=>{
        setSelectedEpisode(elemento);
        (caso==='Edit')?setModalEdit(true):setModalDelete(true)
    }

    const handleChange=e=>{
        const {name, value}=e.target;
        setSelectedEpisode((prevState)=>({
        ...prevState,
        [name]: value
        }));
    }

    const edit=()=>{
        var dataNueva=data;
        dataNueva.map(episode=>{
          if(episode.id===selectedEpisode.id){
            episode.title=selectedEpisode.title;
            episode.season=selectedEpisode.season;
            episode.episode=selectedEpisode.episode;
            episode.air_date=selectedEpisode.air_date;
          }
        });
        localStorage.setItem('episodes', JSON.stringify(dataNueva))
        setData(dataNueva);
        setModalEdit(false);
    }

    const deleted =()=>{
        const filteredData = data.filter(episode=>episode.id!==selectedEpisode.id);
        localStorage.setItem('episodes', JSON.stringify(filteredData))
        setData(filteredData);
        setModalDelete(false);
    }

    const abrirModalInsertar=()=>{
        setSelectedEpisode(null);
        setModalInsert(true);
    }

    const insert =()=>{
        var valueInsert=selectedEpisode;
        if (data.length===0) {
            valueInsert.id=1;
        }
        else {
            valueInsert.id=data[data.length-1].id+1;
        }
        
        var newData = data;
        newData.push(valueInsert);
        localStorage.setItem('episodes', JSON.stringify(newData))
        setData(newData);
        setModalInsert(false);
    }

    return (
        <div className="episodes-container">
            <h2>Episodes</h2>
            <button className="btn btn-success" onClick={()=>abrirModalInsertar()}>Insert</button>
            <div className="table-container">
            <table className="table table-responsive table-dark table-striped table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>SEASON</th>
                        <th>EPISODE</th>
                        <th>AIR DATE</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(elemento=>(
                        <tr>
                            <td>{elemento.id}</td>
                            <td><Link to={"/episodes/"+elemento.title} className='disabled'>
                            {elemento.title}
                            </Link></td>
                            <td>{elemento.season}</td>
                            <td>{elemento.episode}</td>
                            <td>{elemento.air_date}</td>
                            <td>
                                <button className="btn btn-primary" onClick={()=>chooseEpisode(elemento, 'Edit')}><i className='far fa-edit'/></button> {"   "}
                                <button className="btn btn-danger" onClick={()=>chooseEpisode(elemento, 'Delete')}><i className='far fa-trash-alt'/></button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            </div>

            <Modal isOpen={modalEdit}>
                <ModalHeader>
                <div>
                    <h3>Edit Episode</h3>
                </div>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">

                        <label>Title</label>
                        <input
                        className="form-control"
                        type="text"
                        name="title"
                        value={selectedEpisode && selectedEpisode.title}
                        onChange={handleChange}
                        />
                        <br />

                        <label>Season</label>
                        <input
                        className="form-control"
                        type="text"
                        name="season"
                        value={selectedEpisode && selectedEpisode.season}
                        onChange={handleChange}
                        />
                        <br />

                        <label>Episode</label>
                        <input
                        className="form-control"
                        type="text"
                        name="episode"
                        value={selectedEpisode && selectedEpisode.episode}
                        onChange={handleChange}
                        />
                        <br />

                        <label>Air Date</label>
                        <input
                        className="form-control"
                        type="text"
                        name="air_date"
                        value={selectedEpisode && selectedEpisode.air_date}
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
                Are you sure you want to delete {selectedEpisode && selectedEpisode.title}?
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
                            value={selectedEpisode ? selectedEpisode.title: ''}
                            onChange={handleChange}
                            />
                        <br />

                        <label>Season</label>
                            <input
                            className="form-control"
                            type="text"
                            name="season"
                            value={selectedEpisode ? selectedEpisode.season: ''}
                            onChange={handleChange}
                            />
                        <br />

                        <label>Episode</label>
                            <input
                            className="form-control"
                            type="text"
                            name="episode"
                            value={selectedEpisode ? selectedEpisode.episode: ''}
                            onChange={handleChange}
                            />
                        <br />

                        <label>Air Date</label>
                            <input
                            className="form-control"
                            type="text"
                            name="air_date"
                            value={selectedEpisode ? selectedEpisode.air_date: ''}
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

export default Episodes;