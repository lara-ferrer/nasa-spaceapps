import React from 'react'
import "./solar-radiation.scss"
import circleBG from "../../images/orange-circle-left.svg";
import radiation from "../../images/solar-radiation.svg";

export default function SolarRadiation() {
    return (
        <div className="grid-x2 o-radiation" id="solar-radiation">
            <div className="a-radiation-info">
                <img src={circleBG} className="a-radiation__image" />
                <div className="grid-x2">
                    <div className="m-card">
                        <strong>CROP GROWTH</strong>
                        <p data-sal="slide-down" data-sal-delay="700" data-sal-easing="ease">Solar radiation can be considered one of the most important environmental factors in crops, as it influences processes related to water and energy balances, as well as crop growth and development. </p>
                    </div>
                    <div className="m-card">
                        <strong>SOURCE OF ENERGY</strong>
                        <p data-sal="slide-down" data-sal-delay="800" data-sal-easing="ease">Solar radiation is the source of energy used by plants in the photosynthesis process, and the efficiency of its use by plants depends on the wavelength of the radiation.</p>
                    </div>
                </div>
                <div className="grid-x2 p-top">
                    <div className="m-card">
                        <strong>DIFFERENT TYPES OF RADIATION</strong>
                        <p data-sal="slide-down" data-sal-delay="900" data-sal-easing="ease">The management of solar radiation is very diverse and depends mainly on the quantity and quality of solar radiation present in the production area. </p>
                    </div>
                    <div className="m-card">
                        <strong>PHOTOSYNTHESIS AND RADIATION</strong>
                        <p data-sal="slide-down" data-sal-delay="1000" data-sal-easing="ease">In particular, the radiation which plays an important role in the photosynthesis of the tomatoes are the ones with a wavelength of 100-400 nm UV.</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="a-radiation__title" data-sal="slide-left" data-sal-delay="700" data-sal-easing="ease">How does the sun affect your lands?</h2>
                <img src={radiation} className="a-farmer-image" />
            </div>
        </div>
    )
}