import React, { useState } from 'react';

function Navbar() {
    const [activeLink, setActiveLink] = useState('linkedin');

    const handleClick = (linkName: React.SetStateAction<string>) => {
        setActiveLink(linkName);
    }

    return (
        <>
            <nav>
                <div className='logo'><p>Dariya Dalabayeva</p></div>
                <div id="basic-navbar-nav" className="links">
                    <div className='social'><a href="#" target="_blank" rel="noopener noreferrer" onClick={() => handleClick('linkedin')} className={activeLink === 'linkedin' ? 'active' : ''}>linkedin</a></div>
                    <div className='social'>/</div>
                    <div className='social'><a href="#" target="_blank" rel="noopener noreferrer" onClick={() => handleClick('email')} className={activeLink === 'email' ? 'active' : ''}>instagram</a></div>
                    <div className='social'>/</div>
                    <div className='social'><a href="#" target="_blank" rel="noopener noreferrer" onClick={() => handleClick('resume')} className={activeLink === 'resume' ? 'active' : ''}>resume</a></div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;