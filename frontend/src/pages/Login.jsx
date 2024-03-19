import React from 'react'

export const Login = () => {
    return (
        <header className="content_header">
            <h1 className="content_title">Login</h1>
        </header>

       <div className="content_posts"
        <form className='form-login'>

            <div className='form-group'>
                <label hrmlFor="email">Correo electrónico</label>
                <input type="email" name="email" />
            </div>
            <div className='form-group'>
                <label hrmlFor="password">Contraseña</label>
                <input type="password" name="password" />
            </div>

        <input tupe="submit" value="Identifícate" class="btn btn-success" />
        </form> 
    </div>
    )
}