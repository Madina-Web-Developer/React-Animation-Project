import React from 'react'
import './Banner.css'
import Banana from '../../assets/Banana.png'
import Strawberry from '../../assets/Strawberry.png'
import Kiwi from '../../assets/Kiwi.png'
import Bluberry from '../../assets/Bluberry.png'

const Banner = () => {
  return (
    <div>
        <div className="all_mina_Banner relative overflow-hidden">
            <div className="container">

           
            <div className="mina_banner">

                <div className="text_part">

                    <div className="heading">
                        <h1>Sip Your Way to
                        Bliss Taste</h1>
                    </div>
                    <p>We're dedicated to bringing you deliciously fresh smoothies, made with love, care, and the finest ingredients.</p>

                    <div className="buttons_bati">
                        <button className='Clic' ><img src={Banana} alt="btn_pic" /></button>
                        <button className='Clic' ><img src={Strawberry} alt="btn_pic" /></button>
                        <button className='Clic' ><img src={Kiwi} alt="btn_pic" /></button>
                        <button className='Click' ><img src={Bluberry} alt="btn_pic" /></button>
                       
                    </div>

                </div>

                <div className="animation_part">
                    <div className="cercel_div absolute">
                        <div className="bati bati_1"><img src={Banana} alt="bati_img" /></div>
                        <div className="bati bati_2"><img src={Strawberry} alt="bati_img" /></div>
                        <div className="bati bati_3"><img src={Kiwi} alt="bati_img" /></div>
                        <div className="bati bati_4"><img src={Bluberry} alt="bati_img" /></div>
                    </div>
                </div>

            </div>

            </div>
        </div>
    </div>
  )
}

export default Banner