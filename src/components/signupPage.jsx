
import './login-page.css'



const signupPage = () => {
    return (
        <div className="container">
            {/* Left Side */}
            <div className="left-side">
                <h2>AssistLine</h2>
                <p>Join us and explore the future of technology.</p>
            </div>

            {/* Right Side */}
            <div className="right-side">
                <h2>SignUp</h2>
                <form className="login-form">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />

                    <label>username</label>
                    <input type="email" placeholder="Enter your username" />

                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />

                    <label>Confirm Password</label>
                    <input type="password" placeholder="Enter your password" />

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default signupPage;
