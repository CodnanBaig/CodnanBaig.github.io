import React from 'react'
import Marquee from "react-fast-marquee";

export const Marqee = ({title}) => {
  return (
    <div>
        <Marquee speed={100} pauseOnHover={true} autoFill={true}>
            <h1 className='section-heading mx-5'>{title}</h1> 
        </Marquee>
        <hr style={{border: "0.5px solid white"}} />
    </div>
  )
}
