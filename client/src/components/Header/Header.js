import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="header-inner">
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h1>2020 Election Polling</h1>
                </Link>
                <div className="nav">
                    <Link to="/polls" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <span>Polls</span>
                    </Link>
                    <Link to="/electoral-college" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <span>Electoral College</span>
                    </Link>
                    <Link to="/states" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <span>States</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
