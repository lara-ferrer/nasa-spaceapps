import React from 'react'
import "./button-up.scss";
import arrow from "../../images/arrow-up.svg";
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function ButtonUp() {
    return (
        <div className="button-up">
            <a onClick={() => scrollTo('#top')}>
                <img src={arrow} />
            </a>
        </div>
    )
}