import React from 'react'
import {useHistory} from 'react-router-dom';
import './Navigation.css'
function NavigationComponent() {
    const history = useHistory();
    return (
        <nav className='navigation'>
            <button onClick={() => history.push('/home')} className='home'>Home</button>
            <button onClick={() => history.push('/projects')} className='projects'>Projects</button>
            <button onClick={() => history.push('/contact')} className='contact'>Contact</button>
            <button onClick={() => history.push('/resume')} className='resume'>Resume</button>
        </nav>

    )
}

export default NavigationComponent
