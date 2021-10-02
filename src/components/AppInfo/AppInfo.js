import React from 'react'
import "./app-info.scss";
import map from "../../images/map.jpg";

export default function AppInfo() {
    return (
        <div className="o-app-info container" id="benefits">
            <h2 className="a-app__title" data-sal="slide-down" data-sal-delay="700" data-sal-easing="ease">How does Plant a Tomato work?</h2>
            <div className="grid-x2 m-map-section">
                <img src={map} className="a-map" />
            </div>
            <a className="a-button">Discover solar radiation in real time</a>
        </div>
    )
}