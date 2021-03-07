import React from 'react'
import Typed from 'react-typed'
// import skull from ''


const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            
            <div className="main-info">
                {/* <img src={skull} alt="skull img" className="skull" /> */}
                <h1>AB</h1>
                <Typed 
                    className="typed-text"
                    strings={["Creator", "Designer", "Developer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </div>
        </div>
    )
}

export default Header