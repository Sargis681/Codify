import React from 'react'
import "./About.scss"
import AboutContent from '../AboutContent/AboutContent'
import Slider from "../../components/Slider/Slider"
import Worker from "../../components/Workers/Workers"
import YandexMap from '../YandexMap/YandexMap'

const About = () => {
    return (
       <>
       <AboutContent/>
       <Slider/>
       <Worker/>
       <YandexMap/>
       </>
    )
}

export default About
