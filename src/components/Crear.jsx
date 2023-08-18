import React from "react";
import {Link} from 'react-router-dom'

class Crear extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (<div className="card">
            <div className="card-header">
                Especies
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="">Nombre:</label>
                        <input type="text" name="nombre" id="nombre" className="form-control" placeholder="" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted">Ingrese el nombre común de la orquidea</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Nombre Científico:</label>
                        <input type="text" name="cientifico" id="cientifico" className="form-control" placeholder="" aria-describedby="helpId" />
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