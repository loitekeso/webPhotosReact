import React, { Component } from 'react';
import "../css/login.css";
class Login extends Component {
    render() {
        return (
            <div className="App">
                <head className="App-header">
                    <title>Facebook Login JavaScript Example</title>
                    <h1>Our World is so Beautiful </h1>
                    <img src="https://meelisfotography.com/wp-content/uploads/2017/05/40.png" alt="Logo of Meeli Sonn" min-height="100" />
                    <h1>
                        <nav>
                            <h2>
                                <a href="index.html">Our World Is So Beautiful</a>
                            </h2>
                        </nav>
                    </h1>

                    <img src="https://1stwebdesigner.com/wp-content/uploads/2016/01/slideme-jQuery-slider.jpg" width="1700" height="300" />

                    <link rel="stylesheet" type="text/css" href="style.css" />
                    <link rel='stylesheet' href='/stylesheets/style.css' />
                    <form action="action_page.php" >
                        <div class="container">
                            <h1>Register</h1>
                            <p>Please fill in this form to create an account.</p>
                            <label for="email"><b>Email</b></label>
                            <input type="text" placeholder="Enter Email" name="email" />
                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" />
                            <label for="psw-repeat"><b>Repeat Password</b></label>
                            <input type="password" placeholder="Repeat Password" name="psw-repeat" />

                            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                            <button type="submit" class="registerbtn">Register</button>
                        </div>

                        <div class="container signin">
                            <p>Already have an account? <a href="#">Sign in</a>.</p>
                        </div>
                    </form>
                </head>

                <div id="spinner" style={
                    {
                        background: "#4267b2",
                        borderRadius: "5px",
                        color: "white",
                        height: "40px",
                        textAlign: "center",
                        width: "250px"
                    }}>
                    Facebook Loading
                    <div
                        class="fb-login-button"
                        data-max-rows="1"
                        data-size="large"
                        data-button-type="continue_with"
                        data-use-continue-as="true"
                    ></div>
                </div>
                <div class="container">
                    <form action="/action_page.php">
                        <div class="row">
                            <h2 style={{textAlign:"center"}}>Login with Social Media or Manually</h2>
                            <div class="vl">
                                <span class="vl-innertext">or</span>
                            </div>

                            <div class="col">
                                <a href="#" class="fb btn">
                                    <i class="fa fa-facebook fa-fw"></i> Login with Facebook
        </a>
                                <a href="#" class="twitter btn">
                                    <i class="fa fa-twitter fa-fw"></i> Login with Twitter
        </a>
                                <a href="#" class="google btn">
                                    <i class="fa fa-google fa-fw"></i> Login with Google+
        </a>
                            </div>

                            <div class="col">
                                <div class="hide-md-lg">
                                    <p>Or sign in manually:</p>
                                </div>

                                <input type="text" name="username" placeholder="Username" />
                                <input type="password" name="password" placeholder="Password" />
                                <input type="submit" value="Login" />
                            </div>

                        </div>
                    </form>
                </div>

                <div class="bottom-container">
                    <div class="row">
                        <div class="col">
                            <a href="#" style={{color:"white"}} class="btn">Sign up</a>
                        </div>
                        <div class="col">
                            <a href="#" style={{color:"white"}} class="btn">Forgot password?</a>
                        </div>
                    </div>
                </div>


            </div >
        );
    }
}

export default Login;