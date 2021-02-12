import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

// pass in currentUser from app.js state
const Header = ( { currentUser } ) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?  // if user is signed 

                <div className='option' onClick={ () => auth.signOut() } > SIGN OUT</div> 
                
                : // else if user signed out

                <Link className='option' to='/signin' > SIGN IN </Link>
            }
        </div>
    </div>
)


export default Header;