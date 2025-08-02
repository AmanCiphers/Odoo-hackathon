
import './login-page.css'
import { Link } from 'react-router-dom';


const Staff = () => {
    return (
        <div className="container">
            {/* Left Side */}
            <div className="left-side">
                <h2>AssistLine</h2>
                <p>Raise it. Track it. Resolve it</p>
            </div>

            {/* Right Side */}
            <div className="right-side">
                <h2>Staff Login</h2>
                <form className="login-form">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />

                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />

                    <button type="submit">Login</button>
                    <Link to='/admin' className='btn'>Login as Admin</Link>
                    <Link to='/loginPage' className='btn'>Login as User</Link>
                    <Link to='/signUp'>New to QuickDesk? SignUp Now</Link>  
                </form>
            </div>
        </div>
    );
};

export default Staff;
