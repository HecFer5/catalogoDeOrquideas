import React from "react";
import { Link } from 'react-router-dom'

class Crear extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: '',
            cientifico: ''
        }
    }


    cambioValor = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value
        this.setState({ state })
    }

    enviarDatos = (e) => {
        e.preventDefault()
        console.log('Enviado')
        const { nombre, cientifico } = this.state
        console.log(nombre)
        console.log(cientifico)

        var datosEnviar = { nombre: nombre, cientifico: cientifico }

        fetch("http://localhost/nombres/?insertar=1", {
            method: 'POST',
            body: JSON.stringify(datosEnviar)
        })
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {

                console.log(datosRespuesta);
                this.props.history.push("/")

            })
            .catch(console.log)
    }
    render() {
        const { nombre, cientifico } = this.state


        return (<div className="card">
            <div className="card-header">
                Especies
            </div>
            <div className="card-body">
                <form onSubmit={this.enviarDatos}>
                    <div className="form-group">
                        <label htmlFor="">Nombre:</label>
                        <input type="text" name="nombre" id="nombre" value={nombre} onChange={this.cambioValor}
                            className="form-control" placeholder="" aria-describedby="helpId" />
                        <small id="helpId" className="text-muted">Ingrese el nombre común de la orquidea</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Nombre Científico:</label>
                        <input type="text" name="cientifico" value={cientifico} id="cientifico" onChange={this.cambioValor} className="form-control" placeholder="" aria-describedby="helpId" />
                        <small id="helpId" className="text-muted">Ingrese el nombre científico de la orquidea</small>
                    </div>

                    <div className="btn-group" role="group" aria-label="">
                        <button type="submit" className="btn btn-success">Dar ingreso</button>
                        <Link to={'/'} className="btn btn-danger">Cancelar</Link>
                    </div>
                </form>
            </div>
            <div className="card-footer text-muted">

            </div>
        </div>);
    }
}

export default Crear;