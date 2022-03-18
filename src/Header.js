import React from 'react'
import Nav from './component/Nav'

const Header = () => {
    return (
        <header>
            <Nav/>
            <div
                className="home"
                style={{
                    backgroundImage: 'url(img/img.png)',
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>
                <h2>Watch something incredible.</h2>
            </div>
        </header>
    )
}

export default Header