import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <h1>My Gatsby Site</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
                <ul>
                    <li><Link to="about">About</Link></li>
                </ul>
                <ul>
                    <li><Link to="blog">Blog</Link></li>
                </ul>
                <ul>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header