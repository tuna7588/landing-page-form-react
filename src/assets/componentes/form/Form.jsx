import App from '../../../App'
import './Form.css';
export const Form = () => {
    return (

    <>
        <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>

            <hr></hr>
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required />

            <label for="psw"><b>Password</b></label>
            <input type="passw" placeholder="En Password" name="psw" required />

            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="passw" placeholder="Repeat Password" name="psw-repeat" required />

            <label>
                <input type="checkbox"ecked="checked" name="remember"  /> Remember me
            </label>

            <p>By creating an acct you agree to our <a href="#" >Terms & Privacy</a>.</p>

            <div className="clearfix">
                <button type="button" className="cancelbtn">Cancel</button>
                <button type="submit" className="signupbtn">Sign Up</button>
            </div>
        </div>
       

        </>  
    )
};
