/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CgAdd } from 'react-icons/cg';
import { FcAbout } from 'react-icons/fc';
import { BiHomeCircle } from 'react-icons/bi';
import { UserButton, SignedIn, SignedOut, useUser } from '@clerk/clerk-react';
import './Header.css';

const Header = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const location = useLocation();
    const { user } = useUser(); // Get the authenticated user

    useEffect(() => {
        if (location.pathname === '/') {
            setActiveTab('Home');
        } else if (location.pathname === '/add') {
            setActiveTab('AddContact');
        } else if (location.pathname === '/about') {
            setActiveTab('About');
        }
    }, [location]);

    return (
        <div className='header' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#f8f9fa' }}>
            <div className='logo' style={{ display: 'flex', alignItems: 'center' }}>
                <img src='./logo.png' alt='logo' height={80} width={80} />
                <span className="bold" style={{ fontSize: '32px' }}>Contact App</span>
            </div>
            <div className='header-right' style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/">
                    <a className={`${activeTab === 'Home' ? 'active' : ''}`} onClick={() => setActiveTab('Home')}>
                        <BiHomeCircle className='w-7 h-7' /> Home
                    </a>
                </Link>

                <Link to="/add">
                    <a className={`${activeTab === 'AddContact' ? 'active' : ''}`} onClick={() => setActiveTab('AddContact')}>
                        <CgAdd className='w-7 h-7' /> Add Contact
                    </a>
                </Link>

                <Link to="/about">
                    <a className={`${activeTab === 'About' ? 'active' : ''}`} onClick={() => setActiveTab('About')}>
                        <FcAbout className='w-7 h-7' /> About Me
                    </a>
                </Link>

                {/* Signed in view - Shows Logout or UserButton */}
                <SignedIn>
                        <UserButton />
                </SignedIn>

                {/* Signed out view - Shows Login button */}
                <SignedOut>
                    <Link to="/sign-in">
                        <button 
                            style={{
                                backgroundColor:'#007bb5',
                                color: 'white',
                                border: '0.5px',
                                padding: '10px 15px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            
                            }}
                        >
                            Login
                        </button>
                    </Link>
                </SignedOut>
            </div>
        </div>
    );
};

export default Header;