import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
      <>
        <Link to='/Home' style={{'textDecoration':'none','marginLeft':'15px','fontSize':'30px'}}>Home</Link>
        <Link to='/About' style={{'textDecoration':'none','marginLeft':'15px','fontSize':'30px'}}>About</Link>
        <Link to ='/Student'style={{'textDecoration':'none','marginLeft':'15px','fontSize':'30px'}}>Student</Link>
      </>
      
  )
}
export default Nav