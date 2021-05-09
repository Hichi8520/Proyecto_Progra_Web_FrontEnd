import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import '../assets/css/Navbar.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // const logOut=()=>{
    //     cookies.remove('id', {path: "/"});
    //     cookies.remove('first_name', {path: "/"});
    //     cookies.remove('last_name', {path: "/"});
    //     cookies.remove('username', {path: "/"});
    //     window.location.href='./';
    // }

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Breaking Sad <i className='fas fa-flask'/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/search' className='nav-links' onClick={closeMobileMenu}>
                                Search
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/user' className='nav-links' onClick={closeMobileMenu}>
                                User
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Log Out</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
