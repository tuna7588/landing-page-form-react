import App from '../../../App'
import './Form.css';
export const Form = () => {
    return (

    <>
        <div className="container">
            <h1>Crear tu cuenta</h1>
            <p>Rellenar este formulario para crear una cuenta.</p>

            <hr></hr>
            <label for="email"><b>Correo eléctronico</b></label>
            <input type="text" placeholder="Correo" name="email" required />

            <label for="psw"><b>Contraseña</b></label>
            <input type="password" placeholder="Contraseña" name="psw" required />

            <label for="psw-repeat"><b>Repetir contraseña</b></label>
            <input type="password" placeholder="Repetir contraseña" name="psw-repeat" required />

            <label>
                <input type="checkbox" checked="checked" name="remember"  /> Remember me
            </label>

            <p>Al crear esta cuenta está de acuerdo con nuestro <a href="#" >Términos & Privacidad</a>.</p>

            <div className="clearfix">
                <button type="button" className="cancelbtn">Cancelar</button>
                <button type="submit" className="signupbtn">Crear cuenta</button>
            </div>
        </div>
       

        </>  
    )
};
