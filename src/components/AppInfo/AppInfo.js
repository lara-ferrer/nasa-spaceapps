import React from 'react'
import "./app-info.scss";
import phone from "../../images/phone.png";
import one from "../../images/1.svg";
import two from "../../images/2.svg";
import three from "../../images/3.svg";

export default function AppInfo() {
    return (
        <div className="o-app-info container" id="benefits">
            <h2 className="a-app__title" data-sal="slide-down" data-sal-delay="700" data-sal-easing="ease">How does Plant a Tomato work?</h2>
            <div className="grid-x2 m-map-section">
                <img src={phone} className="a-phone" />
                <div>
                    <div className="m-benefit">
                        <img src={one} className="a-icon" data-sal="slide-right" data-sal-delay="700" data-sal-easing="ease" />
                        <p>Get into the app and search the location where your lands are in the map</p>
                    </div>
                    <div className="m-benefit">
                        <img src={two} className="a-icon" data-sal="slide-right" data-sal-delay="700" data-sal-easing="ease" />
                        <p>You'll get information about the solar radiation that are currently affecting your lands, in real time!</p>
                    </div>
                    <div className="m-benefit">
                        <img src={three} className="a-icon" data-sal="slide-right" data-sal-delay="700" data-sal-easing="ease" />
                        <p>Check-out the levels of the radiation and determine whether it's secure or not to plant your tomatoes.</p>
                    </div>
                </div>
            </div>
            <a className="a-button" href="https://www.figma.com/proto/I1VlkEpCCYsqbjJ9qWzZXk/Plant-a-Tomato?page-id=0%3A1&node-id=2%3A3&starting-point-node-id=2%3A3&scaling=scale-down" target="_blank">Discover solar radiation in real time</a>
        </div>
    )
}