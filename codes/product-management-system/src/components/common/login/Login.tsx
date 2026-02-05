import React, { useState } from 'react'
import { useNavigate, useSearchParams } from "react-router-dom";
import { authenticate, saveToken } from '../../../auth/auth.service';
import { User } from '../../../models/user.model';

const Login = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [userState, setUserState] = useState<User>({ username: '', password: '' })
    const [errorState, setErrorState] = useState<string>('')
    let design = (
        <div className='container'>
            <form className="form-horizontal" name="loginForm">

                <div className="form-group">
                    <label htmlFor="userName" className="col-sm-2 control-label">User Naame:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="userName" name="userName" placeholder='enter user name' onChange={
                            (e) => {
                                console.log('user name')
                                setUserState(
                                    (prevState) => {
                                        return {
                                            ...prevState,
                                            username: e.target.value
                                        }
                                    }
                                )
                            }
                        } />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="col-sm-2 control-label">Password:</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="password" name="password" placeholder="enter password" onChange={
                            (e) => {
                                console.log('pass word')
                                setUserState(
                                    (prevState) => {
                                        return {
                                            ...prevState,
                                            password: e.target.value
                                        }
                                    }
                                )
                            }
                        } />
                    </div>
                </div>

                <div className="container-fluid" style={{ textAlign: 'center' }}>
                    <button type="submit" className="btn btn-primary" onClick={
                        (e) => {
                            console.log('clicked')
                            e.preventDefault()
                            authenticate(userState)
                                .then(
                                    (resp) => {
                                        if (resp.data.data !== null) {
                                            saveToken(resp.data.data)
                                            if (searchParams.get('returnUrl')) {
                                                navigate(`/${searchParams.get('returnUrl')}`)
                                            } else
                                                navigate('/home')
                                        } else {
                                            setErrorState(resp.data.message)
                                        }
                                    },
                                    (err) => setErrorState(err.message)
                                )
                        }
                    }>Submit</button>
                    <button type="submit" className="btn btn-alert" onClick={
                        (e) => {
                            e.preventDefault()
                            if (window.confirm('Want to cancel?')) {
                                setUserState({ username: '', password: '' })
                            }
                        }
                    }>Cancel</button>
                </div>
            </form>
            <br />
            {
                errorState !== '' &&
                (
                    <div className="alert alert-dismissible alert-primary">
                        <button type="button" className="btn-close" data-bs-dismiss="alert" title='error'></button>
                        <strong>Oh snap!</strong>
                        {errorState}
                    </div>
                )
            }
        </div>
    )
    return design
}

export default Login