import React, {useState} from 'react'
import Link from 'next/link';

function Navbar() {
    const [click, setClick] = useState(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link href="/" className="navbar-logo">
                        Prana
                    </Link>

                <div className="menu-icon">
                    <i className={click ? 'fas fa-times' : 'fa fa-bars' } />

                </div>

                </div>
            </nav>

        </>    
    )
}

export default Navbar
