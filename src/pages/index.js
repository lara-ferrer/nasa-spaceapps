import * as React from 'react'
import "../styles/home.scss";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SolarRadiation from "../components/SolarRadiation";
import Benefits from "../components/Benefits";
import AppInfo from "../components/AppInfo";
import Footer from "../components/Footer";
import ButtonUp from "../components/ButtonUp";
import Helmet from 'react-helmet'
import favicon from "../images/favicon.png";

const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <title>Planting Tomatoes</title>
      <Header />
      <Hero />
      <SolarRadiation />
      <Benefits />
      <AppInfo />
      <Footer />
      <ButtonUp />
    </div>
  )
}

export default IndexPage
