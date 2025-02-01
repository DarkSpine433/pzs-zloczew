import Logo from '@/app/components/Logo'
import React from 'react'

const BeforeLogin: React.FC = () => {
  return (
    <>
      <style>
        {`
  .login__brand {
    display:none !important;
    opacity:0 !important;
  }
  #Logo{
          display:flex !important;
          text-align:center !important;
          justify-content:center !important;
          align-items:center !important;
          color:#2563EB !important;
          Text-decoration:none !important;
          font-weight:bold !important;
          Text-transform:uppercase !important;
  }`}
      </style>
      <Logo />
      <div>
        <p></p>
      </div>
    </>
  )
}

export default BeforeLogin
