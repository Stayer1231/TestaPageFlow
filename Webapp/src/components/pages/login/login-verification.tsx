import { useNavigate } from 'react-router-dom'

function LoginVerification() {
    const navigate = useNavigate();
    const goback = (()=> {
        navigate(-1);
    })

    return (
        <div>
            <a href="#" onClick={goback}>Back</a>
            <h1>This is verification</h1>
        </div>
    )
}

export default LoginVerification