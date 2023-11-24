import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <h1>CryptoBase</h1>
      </Link>
    </div>
  )
}

export default Navbar