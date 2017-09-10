import React from 'react';

const Login = () => (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-12">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ejemplo@zeruanbelleza.es" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Escribe aquí tu contraseña" />
                    </div>
                    <button type="submit" className="btn btn-primary">Entrar</button>
                </form>
            </div>
        </div>
    </div>
)

export default Login;