import { useEffect, useState } from 'react'
import './styles.scss'


const SignIn = () => {

    const [data, setData] = useState({})

    useEffect(() => {
        setData({
            username: '',
            password: ''
        })

    }, [])

    return (
            <form className="sign-in">
                <div className="title">Sign in to your account.</div>

                <label>
                    <span className={data.username ? 'active' : ''}>Username</span>

                    <input
                        type="text"
                        className={data.username ? 'active' : ''}
                        value={data.username}
                        onChange={e=> setData({...data, username: e.target.value})}
                        required
                        />

                </label>

                <label>
                    <span className={data.password ? 'active' : ''}>Password</span>
                    <input
                        type="password"
                        className={data.password ? 'active' : ''}
                        value={data.password}
                        onChange={e=> setData({...data, password: e.target.value})}
                        required
                        />
                </label>

                <button>Log in</button>

                <div className="footer">
                    Don't have an account? 
                    <a href="/sign-up">Create an account.</a>
                </div>
            </form>
    )
}

export default SignIn;