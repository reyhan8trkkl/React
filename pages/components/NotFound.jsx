import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>Error 404! Page Not Found
        <Link to='/'>Home Page</Link>
    </div>
  )
}
