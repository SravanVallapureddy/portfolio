import './Register.css';
import { Link } from 'react-router-dom';

export default function Register(){
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
                            <input type="text" placeholder='Username' className='loginInput' />
                            <input type="text" placeholder='Email' className='loginInput' />
                            <input type="text" placeholder='Password' className='loginInput' />
                            <input type="text" placeholder='Password Again' className='loginInput' />
                            <button type='submit' className='loginButton'>Sign Up</button>
                            <button type='submit' className='loginRegisterButton'>
                                <Link to='/Login' style={{textDecoration: 'none', color: 'white'}}> Log into Account </Link>  
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}