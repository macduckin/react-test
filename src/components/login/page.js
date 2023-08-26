'use client'
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';
import { useState } from 'react';
export default function Login() {
    const [page, setPage] = useState(1)

    return (
        <div className="login container">
            {page === 1 && <div className='signup'>
                <div className="card primary">
                    <div className="intro">
                        <h1 className="insta">instagram</h1>
                        <p>Sign up to see photos and <br />
                            videos from your friends</p>
                        <button className="facebook"><FaFacebookF color='fff' fontSize={15} /> Login in with Facebook</button>
                    </div>
                    <div className="or">
                        <hr /> OR <hr />
                    </div>
                    <div className="inputs">
                        <input type="text" className="E-mail" placeholder="Mobile number or E-mail" />
                        <input type="text" className="full_name" placeholder="Full Name" />
                        <input type="text" className="user_name" placeholder="Username" />
                        <input type="password" className="password" placeholder="password" />
                    </div>
                    <div className="footer">
                        <p>People who user our device may have uploaded <br />
                            your contact information to Instagram <a className='blue' href="">Learn more</a></p>
                        <p>by signing up, you agree to our <a onClick={() => setPage(2)}>Terms, Privacy <br /> Policy and Cookies Policy</a></p>
                        <button className="btn signup">Sign up</button>
                    </div>
                </div>
                <div className="card secondary">
                    <p>Have an account?<a onClick={() => setPage(2)}> Log in</a></p>
                </div>
            </div>}

            {page === 2 && <div className='signin'>
                <div className="card login">
                    <div className="intro">
                        <h1 className="insta">instagram</h1>

                        <div className="inputs">
                            <input type="text" className="E-mail" placeholder="Phone number, username or E-mail" />
                            <input type="password" className="password" placeholder="password" />
                        </div>
                        <button className="btn login">  Log in </button>
                    </div>
                    <div className="or">
                        <hr /> OR <hr />
                    </div>
                    <div className="footer">
                        <button className="btn login"> <FaFacebookF color='fff' fontSize={15} /> Log in with Facebook</button>
                        <p><a>Forgot password?</a></p>
                    </div>
                </div>

                <div className="card secondary">
                    <p>Don't have an account?<a onClick={() => setPage(1)}> Sign up</a></p>
                </div>
            </div>}

        </div>
    )
}