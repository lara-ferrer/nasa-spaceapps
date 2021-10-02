import React from 'react'
import "./header.scss"
import logo from "../../images/logo.svg";

export default function Header() {
    return (
        <div className="container m-header grid-30-70">
            <img src={logo} alt="Plant a tomato" className="a-logo"/>
            <ul>
                <li className="a-menu__item">
                    <a>Solar radiation</a>
                </li>
                <li className="a-menu__item">
                    <a>Discover radiation levels</a>
                </li>
            </ul>
        </div>
    )
}