import React from 'react'
import "./hero.scss"
import heroImage from "../../images/hero-vector.png";

export default function Hero() {
    return (
        <div className="grid-x2 o-hero">
            <div className="m-hero-info">
                <h1 className="a-hero__title">Discover the level of solar radiation in real time and how it can help you plant better tomatoes</h1>
                <a className="a-button">Show me how!</a>
            </div>
            <img src={heroImage} className="a-hero__image" />
        </div>
    )
}