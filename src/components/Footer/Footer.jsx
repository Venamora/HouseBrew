import React from 'react'
import BgFooter from '../../assets/bg_kopi.jpg'




const BgImage = {
    backgroundImage: `url(${BgFooter})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight : '150px',
    width : '100%',
}

const Footer = () => {
  return (
    <div style={BgImage}className='text-white'>
        <div></div>
    </div>
  )
}

export default Footer