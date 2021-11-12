
import React from 'react'
import "./SplashPage.css"
// import Search from '../Search/SearchBar/index'
import Footer from "../Footer/index"


export default function SplashPage() {
    return (

        <>
            <div className="splashPicContainer">
                    <img
                    className="splashPic"
                    src="https://res.cloudinary.com/dis83syog/image/upload/v1636689739/SpeakEasy/nd9OHIj6_y7meju.jpg"
                    alt="Splash Page"
                    />
                    <div className="imageOverlay"></div>
                    <div className="splashText">
                        <h1 className="splashTitle">Booze For All The <span className="splashSpan">Speakeasy</span> Working Stiffs</h1>
                    </div>

            </div>
            <Footer />
       </>
    );
}
