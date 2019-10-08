import React from 'react'
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = (props) => {
    //if a user is logged in show logout, else show login/signup
    let navMust =
        <>
        <header>NavBar: I am a NavBar!</header>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/admissionform'>Admission Form</Link>
        </>
    
    let navUser = props.user ?
      <>
        <Link to='' onClick={props.handleLogout}>
            Logout
        </Link>
        <span>WELCOME, {props.user.name}</span>
      </>
      :
      <>
        <Link to='/login'>
            Login
        </Link>

        <Link to='/signup'>
            Sign Up
        </Link>
      </>;
    
    return (
        <div className={`component ${styles.NavBar}`}>
            {navMust}
            {navUser}
        </div>
    );
};

export default NavBar;