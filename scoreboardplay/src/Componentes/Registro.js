//import React, { Component } from 'react';
i//mport './CSS/estiloRegistro.css';
//import './app.js' 


export const Registro = ()=>{

    return (
        <div className='row'>
        <div className='col-md-4'>
        <div className="respmenu"> <h1 className="titulo">ScoreBoardPlay</h1>
            <div className="container mb-3" id="container">
                <div className="form-container sign-up-container">
                <form action="/app.js">
                    <h1>Crear una Cuenta</h1>
                        <div class="social-container">
                            <a href="#" className="social"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#" className="social"><i className="fa-brands fa-google"></i></a>
                            <a href="#" className="social"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#" className="social"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#" className="social"><i className="fa-brands fa-tiktok"></i></a>
                         </div>
                    <span>o usa tu correo para registrarte</span>
                    <input type="text" placeholder="Nombre" />
                    <input type="email" placeholder="Correo" />
                    <input type="password" placeholder="Contraseña" />
                    <button>Registrar</button>
                </form>
                </div>
            </div>

            <div className="form-container log-in-container">
                <form action="/app.js">
                    <h1>Ingresar</h1>
                    <div className="social-container">
                    <a href="#"className="social"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#" className="social"><i className="fa-brands fa-google"></i></a>
                    <a href="#" className="social"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#" className="social"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#" className="social"><i className="fa-brands fa-tiktok"></i></a>
                    </div>
                    <span>Ingresa con tu cuenta</span>
                    <input type="email" placeholder="Correo" />
                    <input type="password" placeholder="Contraseña" />
                    <a href="#">Olvidaste la Contraseña?</a>
                    <button>Log In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Bienvenido ScoreBoardPlay!</h1>
                        <p>Ya tienes una cuenta? Log In</p>
                        <button className="ghost" id="logIn">Registrar</button>
                    </div>
                <div className="overlay-panel overlay-right">
                    <h1>ScoreBoardPlay!</h1>
                    <p>No tienes una cuenta? Registrate gratis aqui</p>
                    <button className="ghost" id="signUp">Registrar</button>
                </div>
            </div>
            </div>
        </div>
        </div> 
        </div>
        
    )
    

}


export default Registro
