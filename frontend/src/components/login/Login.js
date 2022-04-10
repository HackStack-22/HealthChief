import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';



export default function Login() {
    const navigate = useNavigate();

    function displayLoginForm() {
        document.querySelector(".login-form").classList.toggle("display-form")
        document.querySelector(".login-user-btn").classList.toggle("no-animation")
    }
    function loginUser() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        var details = {
            email: email,
            password: password
        }

        fetch("https://healthchief.herokuapp.com/login", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(details)
        })
            .then(response => response.json())
            .then(response => {
                if (response) {
                    const loggedInUser = response.response.user.username;
                    if (loggedInUser) {
                        localStorage.clear();
                    }
                    localStorage.setItem('username', loggedInUser)
                    navigate("/", { replace: true });
                } else {
                    alert("Enter the details correctly.")
                }
            })
            .catch(err => {
                console.error("error: " + err);
                alert("Enter the details correctly.")
            });
    }
    // function logout() {
    //     fetch("https://healthchief.herokuapp.com/logout", {
    //         "method": "GET",
    //         "headers": {
    //             "Content-Type": "application/json"
    //         },
    //     })
    //         .then(response => {
    //             console.log(response);
    //         })
    //         .catch(err => {
    //             console.error("error: " + err);
    //         });
    // }



    return (
        <div className='login-page'>
            <div className='login-container'>
                <button onClick={displayLoginForm} className='login-user-btn'><img src={require('../../assets/login-page/user-login.png')} alt='' /><h2>LOGIN</h2></button>
                <div className='login-form'>
                    <div>
                        <img src={require('../../assets/login-page/email.gif')} alt='' />
                        <input type='email' id='email' placeholder='example@gmail.com' />
                    </div>
                    <div>
                        <img src={require('../../assets/login-page/password.gif')} alt='' />
                        <input type='password' id='password' placeholder='Password' />
                    </div>
                    <button onClick={loginUser} className='login-form-submit-btn'>Login<img src={require('../../assets/arrow-right.png')} alt='' /></button>
                </div>
            </div>
        </div>
    )
}
