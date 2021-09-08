import React from 'react';
import Features from './Features';
import Footer from './Footer';
import Logo from './img/logo.png';
import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';

const App = () => {

    const features = ['CHEMICALS & PROCESS','POWER','WATER & WASTE WATER','OILS & GAS','PHARMA','SUGARS & DISTILLERIES','PAPER & PULP','MARINE & DEFENCE','METAL & MINING','FOOD & BEVERAGE','PETROCHEMICAL & REFINERIES','SOLAR','BUILDING','HVAC','FIRE FIGHTING','AGRICULTURE & RESIDENTIAL'];

    return (
        <div className="main">
            <div className="container-1">
                <img alt="logo" src={Logo} />
            </div>


            <div className="container-2">
                <div className="container-2--1">
                    <img className="container-2--1" alt="trophy" src={img1} />
                </div>
                <div className="container-2--2">
                    <h3><b>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b></h3>
                    <ul>
                        <li>
                        C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                        </li>

                        <li>
                        C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.  
                        </li>
                    </ul>

                    <div className="container-2--2-3">
                        <img alt="award ceremony" src={img2} />
                    </div>

                    <p>
                    Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                    </p>
                    
                </div>

            </div>

            <p className="container-3 u-center-text">
                INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
            </p>

            <div className="container-4">
                <img alt="machines" src={img3} />
            </div>

            <p className="container-5 u-center-text">
                Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
            </p>

            <hr className="red-border" />

            <p className="container-7 u-center-text">
                <b>
                    C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
                </b>
            </p>

            <Features features={features} />

            <Footer />
        </div>
    );

}


export default App;