import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContex } from '../Provider/AuthProvider';
import Button from 'react-bootstrap/esm/Button';

const Header = () => {
    const { user, logOut } = useContext(AuthContex)
    // console.log(user);

    const handleLogOut=()=>{
        logOut()
        .then(result=>{

        })
        .catch(error=>console.log(error))
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                <p>
                    {
                        user && <span className='text-warning'>user<Button onClick={handleLogOut}>Log Out</Button></span>
                    }
                </p>
            </div>
        </nav>
    );
};

export default Header;
