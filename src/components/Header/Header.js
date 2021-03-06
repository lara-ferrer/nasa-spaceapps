import React from 'react'
import "./header.scss"
import logo from "../../images/logo.svg";
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function Header() {
    return (
        <div className="container m-header grid-30-70" id="top">
            <img src={logo} alt="Plant a tomato" className="a-logo"/>
            <ul>
                <li className="a-menu__item">
                    <a onClick={() => scrollTo('#solar-radiation')}>Solar radiation</a>
                </li>
                <li className="a-menu__item">
                    <a onClick={() => scrollTo('#benefits')}>Discover radiation levels</a>
                </li>
                <li className="a-menu__item">
                    <a className="a-button" href="https://www.figma.com/proto/I1VlkEpCCYsqbjJ9qWzZXk/Plant-a-Tomato?page-id=0%3A1&node-id=2%3A3&starting-point-node-id=2%3A3&scaling=scale-down" target="_blank">Get our app</a>
                </li>
            </ul>
        </div>
    )
}