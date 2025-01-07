import React, { useState } from 'react'
import './Banner.css'
import Banana from '../../assets/Banana.png'
import Strawberry from '../../assets/Strawberry.png'
import Kiwi from '../../assets/Kiwi.png'
import Bluberry from '../../assets/Bluberry.png'

const Banner = () => {

    //    Customes Variables 


    const [foodrotate, setfoodrotate] = useState('rotate-[0deg]')

    const [bgcolor, setbgcolor] = useState({background:'bg-[#fff7cf]' , cardbg:'bg-[#F5DE6E]'})


  return (
    <div>
        <div className={`all_mina_Banner relative transition-all overflow-hidden duration-[1s]  ${bgcolor.background}`}>

            <div className="container">

           
            <div className="mina_banner">

                <div className="text_part">

                    <div className="heading">
                        <h1>Sip Your Way to
                        Bliss Taste</h1>
                    </div>
                    <p>We're dedicated to bringing you deliciously fresh smoothies, made with love, care, and the finest ingredients.</p>

                    <div className="buttons_bati">
                        <button onClick={()=>{setfoodrotate('rotate-[0deg]'),setbgcolor((prev)=>({...prev, background:'bg-[#fff7cf]', cardbg:'bg-[#F5DE6E]'}))}} className='Clic' ><img src={Banana} alt="btn_pic" /></button>
                        <button onClick={()=>{setfoodrotate('rotate-[55deg]'), setbgcolor((prev)=>({...prev, background:'bg-[#FFE1E2]', cardbg:'bg-[#FCB1B4]'}))}} className='Clic' ><img src={Strawberry} alt="btn_pic" /></button>
                        <button onClick={()=>{setfoodrotate('rotate-[150deg]'),setbgcolor((prev)=>({...prev, background:'bg-[#ECFFCC]', cardbg:'bg-[#8FB351]'})) }} className='Clic' ><img src={Kiwi} alt="btn_pic" /></button>
                        <button onClick={()=>{setfoodrotate('rotate-[233deg]'), setbgcolor((prev)=>({...prev, background:'bg-[#FFCBEA]', cardbg:'bg-[#C976A7]'}))}} className='Click' ><img src={Bluberry} alt="btn_pic" /></button>
                     </div>

                </div>

                <div className="animation_part">
                    <div className={`cercel_div ${bgcolor.cardbg}  ${foodrotate}`}>
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


//  Banana rotate-[0deg]

// Strawberry rotate-[55deg]

// Kiwi rotate-[150deg]

// Bluberry rotate-[233deg]