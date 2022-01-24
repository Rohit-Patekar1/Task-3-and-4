import React, { useState } from 'react';
import validator from 'validator';

const LoginScreen = ({ history }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const validPasswordRegex = new RegExp('^(?=.{30,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$')
    const submitHandler = (e) => {
        e.preventDefault()

        if (validator.isEmail(username)) {

        }
        else {
            setEmailError('Enter valid Email!')
        }

        if (!validPasswordRegex.test(password) && password == 'SmartServTest@123') {


            const redirect = '/admin/dashboard'
            history.push(redirect)
        }
        else {
            alert("Incorrect password")
        }
    }

    return <body className='body'>
        <span style={{
            fontWeight: 'bold',
            color: 'red',
        }}>{emailError}</span>
        <div>
            <div className='contain'>
                <img className="logos" src={require('../image/smartserv_logo.png')} />
                <form name="form1" onSubmit={submitHandler}>

                    <div className="form-controls">
                        <input name="text1" type="email" onChange={(e) => setUsername(e.target.value)} value={username} />
                        <label>Username</label>

                    </div>

                    <div className="form-controls">
                        <input type="password" name="text2" onChange={(e) => setPassword(e.target.value)} value={password} />
                        <label>Password</label>
                    </div>

                    <div className="check">
                        <input type="checkbox" />
                        <label  > Remember me</label><br />
                    </div>
                    <button className="btns ">Login</button>

                    <p className="text"> <a className="foot" href="mailto:support@smartserv.io">Forgot your password?</a> </p>
                </form>
            </div>
        </div>
    </body>;
};

export default LoginScreen;
