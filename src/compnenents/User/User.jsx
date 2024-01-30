import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userId} = useParams()
    return (
        <h1 className='p-3 text-center'>Username <strong>{userId}</strong></h1>
    )
}

export default User
