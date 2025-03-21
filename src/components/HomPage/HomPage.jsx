import React from 'react';
import SectionText from '../SectionText/SectionText';
import StrategySection from '../StrategySection/StrategySection';
import GetStarted from '../Buttons/GetStarted/GetStarted';
import CartsAll from '../CartsAll/CartsAll';
import SortMenu from '../SortMenu/SortMenu';
import Slider from '../Slider/Slider';
import Workers from '../Workers/Workers';
import Resources from '../Resources/Resources';
import Informal from '../Informal/Informal';
import lineImg from "../../Images/vertical_line.png"


const HomePage = () => {
    return (
        <div className="HomePage">
            <SectionText />
            <CartsAll />
            <StrategySection />
            <div className="sec">
                <GetStarted />
            </div>
            <div className='strategy_center'>
              <img src={lineImg} alt="" />
            </div>
            <SortMenu />
            <Slider />
            <Workers />
            <div className='strategy_center'>
                    <img src={lineImg} alt="" />
                  </div>
            <Resources />
            <Informal /> 
        </div>
    );
};

export default HomePage;
