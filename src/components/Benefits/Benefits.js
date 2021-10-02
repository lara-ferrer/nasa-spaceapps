import React from 'react'
import "./benefits.scss"
import radiation from "../../images/solar-radiation.svg";

export default function Benefits() {
    return (
        <div className="grid-x2 o-benefits container" id="benefits">
            <div>
                <h2 className="a-radiation__title" data-sal="slide-right" data-sal-delay="700" data-sal-easing="ease">Learn how to use sun radiation data to plant better tomatoes!</h2>
                <img src={radiation} className="a-farmer-image" />
            </div>
            <div className="a-paragraph">
                <p>Our main goal is that farmers and people who do not know well the qualities of their land, can look at our app and decide whether they should plant tomatoes or not <strong>depending on the solar radiation</strong> that their land receives in a particular month. Anyone interested in planting tomatoes can quickly recognise <strong>whether their land is suitable for it or not</strong> with the help of Plant a Tomato!</p>
                <p>If more resources were available, other cuantities could be added, such as the <strong>type of climate, rainfall or type of fertiliser</strong>, which would condition the planting of tomatoes and any other type of crop in general.</p>
            </div>
        </div>
    )
}