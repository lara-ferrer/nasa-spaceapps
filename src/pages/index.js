import * as React from 'react'
import "../styles/home.scss";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SolarRadiation from "../components/SolarRadiation";
import Benefits from "../components/Benefits";
import AppInfo from "../components/AppInfo";

const IndexPage = () => {
  return (
    <div>
      <title>Planting Tomatoes</title>
      <Header />
      <Hero />
      <SolarRadiation />
      <Benefits />
      <AppInfo />
    </div>
  )
}

export default IndexPage
