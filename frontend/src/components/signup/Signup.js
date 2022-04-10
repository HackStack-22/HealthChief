import React from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate();

    function displayLoginForm() {
        document.querySelector(".signup-form").classList.toggle("display-form")
        document.querySelector(".signup-user-btn").classList.toggle("no-animation")
    }

    // function nextForm() {
    //     var username = document.getElementById('username').value;
    //     var email = document.getElementById('email').value;
    //     var password = document.getElementById('password').value;
    //     if (!email || !username || !password) {
    //         alert("Enter all the fields")
    //     } else {
    //         var elem1 = document.querySelector('.signup-form1')
    //         elem1.style.display = "none";
    //         var elem2 = document.querySelector('.signup-form2')
    //         elem2.style.display = "flex"
    //     }
    // }

    function signUpUser() {
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        // var gender = document.getElementById('gender').value;
        // var dob = document.getElementById('dob').value;
        // var weight = document.getElementById('weight').value;
        // var height = document.getElementById('height').value;

        var details = {
            email: email,
            password: password,
            username: username
        }
        fetch("https://healthchief.herokuapp.com/register", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(details)
        })
            .then(response => {
                console.log(response);
                if(response.status === 200) {
                    navigate("/login", { replace: true });
                }
            })
            .catch(err => {
                console.error(err);
            });

    }

    return (
        <div className='signup-page'>
            <div className='signup-container'>
                <button onClick={displayLoginForm} className='signup-user-btn'><img src={require('../../assets/login-page/user-login.png')} alt='' /><h2>SIGNUP</h2></button>
                <div className='signup-form signup-form1'>
                    <div>
                        <img src={require('../../assets/login-page/email.gif')} alt='' />
                        <input type='email' id='email' placeholder='example@gmail.com' required />
                    </div>
                    <div>
                        <img src={require('../../assets/login-page/user.gif')} alt='' />
                        <input type='text' id='username' placeholder='@Username' required />
                    </div>
                    <div>
                        <img src={require('../../assets/login-page/password.gif')} alt='' />
                        <input type='password' id='password' placeholder='Password' required />
                    </div>
                    {/* <button onClick={nextForm} className='signup-form-submit-btn'>Next<img src={require('../../assets/arrow-right.png')} alt='' /></button> */}
                    <button onClick={signUpUser} className='signup-form-submit-btn'>Next<img src={require('../../assets/arrow-right.png')} alt=''/></button>
                </div>
                {/* <div className='signup-form signup-form2' >
                    <div>
                        <img src={require('../../assets/login-page/user.gif')} alt='' />
                        <input type='text' id='gender' placeholder='Gender' required />
                    </div>
                    <div>
                        <img src={require('../../assets/login-page/user.gif')} alt='' />
                        <input type='date' id='dob' />
                    </div>
                    <div>
                        <img src={require('../../assets/login-page/password.gif')} alt='' />
                        <input type='number' id='weight' placeholder='Weight in kilograms' required />
                    </div>
                    <div>
                        <img src={require('../../assets/login-page/password.gif')} alt='' />
                        <input type='number' id='height' placeholder='Height in centimeters' required />
                    </div>
                
                    <button onClick={signUpUser} className='signup-form-submit-btn2'>Submit<img src={require('../../assets/arrow-right.png')} alt='' /></button>
                </div> */}
            </div>
        </div>
    )
}
