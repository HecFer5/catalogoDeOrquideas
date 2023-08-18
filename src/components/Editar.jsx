import React from "react";

class Editar extends React.Component {
    constructor(props) {
        super(props);
         this.state = { }
    }
   
componentDidMount(){
    // eslint-disable-next-line react/prop-types
    console.log(this.props.match.params.id)
}

    render() { 
        return ( <div className="card">
            <div className="card-header">
                Editar Especies
            </div>
            <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Text</p>
            </div>
            <div className="card-footer text-muted">
                Footer
            </div>
        </div> );
    }
}
 
export default Editar;