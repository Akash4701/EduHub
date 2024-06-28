import React, { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";


function Login() {
  
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [email, setEmail] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [_id, setId] = useState(''); // Define _id state
    const navigate = useNavigate();
    

    // useEffect(() => {

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, email]);

    
    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                   
                </section>
            ) : (
                
                <section>
                    <p ref={errRef} className={errMsg ? 'errMsg' : 'offscreen'} aria-live="assertive">
                        {errMsg}
                    </p>
                    <h1>Sign In</h1>
                    <form>
                        <label htmlFor='username'>Username:</label>
                        <input
                            type='text'
                            id="username"
                            placeholder='Enter your Username'
                            ref={userRef}
                            autoComplete='off'
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor='password'>Password:</label>
                        <input
                            type='password'
                            id="password"
                            placeholder='Enter your Password'
                            autoComplete='off'
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />

                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            id="email"
                            placeholder='Enter your Email'
                            autoComplete='off'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />

                        <button type="submit">Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className='line'>
                            <a href='/sign-up'>Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    );
}

export default Login;