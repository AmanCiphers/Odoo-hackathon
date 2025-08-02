
import './login-page.css'
import { Link } from 'react-router-dom';


const LoginPage = () => {
    return (
        <div className="container">
            {/* Left Side */}
            <div className="left-side">
                <h2>QuickDesk</h2>
                <p>Join us and explore the future of technology.</p>
            </div>

            {/* Right Side */}
            <div className="right-side">
                <h2>Login</h2>
                <form className="login-form">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />

                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />

                    <button type="submit">Login</button>
                    <Link to='/signUp'>New to QuickDesk? SignUp Now</Link>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
