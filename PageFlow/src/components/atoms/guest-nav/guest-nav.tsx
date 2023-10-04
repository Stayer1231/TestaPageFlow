import { Link } from 'react-router-dom'

function GuestNav() {
    return (
        <>
            <ul>
                <Link to='/'><li><a href="/">Home</a></li></Link>
                <Link to='/about'><li><a href="/about">About</a></li></Link>
                <Link to='/contact'><li><a href="/contact">Contact</a></li></Link>
                <Link to='/login'><li><a href="/login">Login</a></li></Link>
            </ul>
        </>
    )
}

export default GuestNav
