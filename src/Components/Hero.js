import React from 'react'

const Hero = ({children,hero}) => {
    return (
        <div>
              <header className={hero}>
                  {children}
              </header>
        </div>
    )
}

Hero.defaultProps = {
    hero:"defaultHero"
}
export default Hero
