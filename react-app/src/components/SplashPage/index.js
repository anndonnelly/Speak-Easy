import React, {useState} from 'react'
import "./SplashPage.css"
import Search from '../Search/SearchBar/index'

export default function SplashPage() {



    return (
      <div>
          <img
            className="splashPic" src="https://res.cloudinary.com/dis83syog/image/upload/v1636293369/SpeakEasy/Screen_Shot_2021-11-07_at_8.55.48_AM_krw8hj.png"
            alt="Splash Page"/>
        <Search />
      </div>
    );
}
