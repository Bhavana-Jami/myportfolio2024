import React from 'react'
import { Link } from 'react-router-dom'


function SignIn() {
    return (
        <div>
            This is SignIn Page
            <Link to="/signup">Sign Up</Link>
        </div>
    )
}

export default SignIn