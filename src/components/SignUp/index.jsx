import { useEffect, useState } from 'react'
import './styles.scss'


const SignUp = () => {

    const [data, setData] = useState({})

    useEffect(() => {
        setData({
            first_name: '',
            last_name: '',
            username: '',
            password: '',
            p2:''
        })

    }, [])

    return (
            <form className="sign-up">
                <div className="title">Create an account.</div>
                
                <label>
                    <span className={data.first_name ? 'active' : ''}>First name</span>

                    <input
                        type="text"
                        className={data.first_name ? 'active' : ''}
                        value={data.first_name}
                        onChange={e=> setData({...data, first_name: e.target.value})}
                        required
                        />

                </label>

                <label>
                    <span className={data.last_name ? 'active' : ''}>Last name</span>

                    <input
                        type="text"
                        className={data.last_name ? 'active' : ''}
                        value={data.last_name}
                        onChange={e=> setData({...data, last_name: e.target.value})}
                        required
                        />

                </label>

                <label>
                    <span className={data.username ? 'active' : ''}>Choose a username</span>

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

                <label>
                    <span className={data.p2 ? 'active' : ''}>Re-enter password</span>
                    <input
                        type="password"
                        className={data.p2 ? 'active' : ''}
                        value={data.p2}
                        onChange={e=> setData({...data, p2: e.target.value})}
                        required
                        />
                </label>

                <button>Create account</button>

                <div className="footer">
                    Already have an account? 
                    <a href="/sign-in">Sign in.</a>
                </div>
            </form>
    )
}

export default SignUp;