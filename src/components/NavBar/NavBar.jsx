import React from 'react'
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = props => {
    return (
        <div className={`component ${styles.NavBar}`}>
            <header>NavBar: I am a NavBar!</header>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/admissionform'>Admission Form</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Login</Link>
            <Link to='/logout'>Logout</Link>
        </div>
    );
};

export default NavBar;