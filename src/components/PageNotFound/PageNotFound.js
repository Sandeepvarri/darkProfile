import React from 'react'
import { useLocation, useHistory, Link } from 'react-router-dom'

function PageNotFound() {
    let location = useLocation();
    let history = useHistory();
    return (
        <div>
            Sorry, {location.pathname} is not found
            Go to <button onClick={() => history.push('/home')}> Home </button> page
            <Link to='/home'>Home</Link> 
            <button onClick={() => history.push('/home')} className='home'>Home</button>
          <button onClick={() => history.push('/projects')} className='projects'>Projects</button>
          <button onClick={() => history.push('/contact')} className='contact'>Contact</button>
          <button onClick={() => history.push('/resume')} className='resume'>Resume</button>
        </div>
    )
}

export default PageNotFound
