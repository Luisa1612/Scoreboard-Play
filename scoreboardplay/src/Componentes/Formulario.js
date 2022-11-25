import React,{Fragment, useState} from "react";

export const Formulario = ()=>{

const [datos, setDatos] = useState({
        nombre:'',
        apellido:'',
        correo:'',
        contraseña:''
    })

    const cambioImputs = (event)=>{
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event)=>{
        event.preventDefault();
        console.log(datos.nombre + ' ' + datos.apellido + '' + datos.correo + '' + datos.contraseña)
    }

    return (
        <Fragment>        
        <h1>Formulario</h1>

        <form className="row" onSubmit={enviarDatos}>
            <div className="col-md-5">
                <input
                placeholder = "Ingrese Nombre"
                className="form-control"
                type="text"
                name="nombre"
                onChange={cambioImputs}
                ></input>
            </div>
            <div className="col-md-5">
                <input
                placeholder = "Ingrese Apellido"
                className="form-control"
                type="e-mail"
                name="apellido"
                onChange={cambioImputs}
                ></input>
            </div>
            <div className="col-md-5">
                <input
                placeholder = "Ingrese Correo"
                className="form-control"
                type="e-mail"
                name="correo"
                onChange={cambioImputs}
                ></input>
            </div>
            <div className="col-md-5">
                <input
                placeholder = "Ingrese Contraseña"
                className="form-control"
                type="password"
                name="contraseña"
                onChange={cambioImputs}
                ></input>
            </div>

            <div className="col-md-5">
                <button className="btn btn-primary" type="submit">Enviar</button>
            </div>

        </form>

        <h3>{datos.nombre} - {datos.apellido} - {datos.correo} - {datos.contraseña}</h3>

        </Fragment>
    )
}
//export default Formulario