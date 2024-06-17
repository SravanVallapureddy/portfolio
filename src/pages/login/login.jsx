import './login.css';
import { Link } from 'react-router-dom';

export default function Login(){
    return(
        <>
            <div className='login'>
                <div className='loginWrapper'>
                    <div className='loginLeft'>
                        <h3 className='loginLogo'>SravanMedia</h3>
                        <span className='loginDesc'>
                            Connect with friends and the world around you on SravanMedia
                        </span>
                    </div>
                    <div className='loginRight'>
                        <div className='loginBox'>
                            <input type="text" placeholder='Email' className='loginInput' />
                            <input type="text" placeholder='Password' className='loginInput' />
                            <button type='submit' className='loginButton'>
                                <Link to='/' style={{textDecoration: 'none', color: 'white'}}> Login</Link>
                            </button>
                            <span className='loginForgot'>Forgot Password?</span>
                            <button type='submit' className='loginRegisterButton'>
                               <Link to='/Register' style={{textDecoration: 'none', color: 'white'}}> Create a New Account </Link>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}