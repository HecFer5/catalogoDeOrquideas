import React from 'react';
import { Link } from 'react-router-dom';

class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { datosCargados: false }
        nombres: []
    }
    cargarDatos() {

        fetch("http://localhost/nombres/")
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {

                console.log(datosRespuesta);
                this.setState({ datosCargados: true, nombres: datosRespuesta })

            })
            .catch(console.log)

    }
    componentDidMount() {
        this.cargarDatos()
    }

    render() {
        const { datosCargados, nombres } = this.state

        if (!datosCargados) { return (<div>Cargando...</div>) }
        else {
            return (
                <div className="card">
                    <div className="card-header">
                    <Link className="btn btn-success" to={"/crear"}>Agregar nuevo</Link>
                    </div>
                    <div className="card-body">                            
                    <h4>Lista de Orquideas</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Nombre Científico</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    nombres.map(
                                        (nombre) => (
                                            <tr key={nombre.id}>
                                                <td>{nombre.id}</td>
                                                <td>{nombre.nombre}</td>
                                                <td>{nombre.cientifico}</td>
                                                <td>
                                                    <div className="btn-group" role="group" aria-label="">
                                                        <Link className="btn btn-warning" to={"/editar"}>Editar</Link>

                                                        <button type="button" className="btn btn-danger">Borrar</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    )}
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer text-muted">
                    </div>
                </div>


            )
        }
    }
}

export default Listar;
