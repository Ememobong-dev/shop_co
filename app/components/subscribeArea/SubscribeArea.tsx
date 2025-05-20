import React from 'react';
import mail_icon from "../../assets/svgs/mail_icon.svg";
import { Button } from '../Button';

export const SubscribeArea = () => {
  return (
    <div className='bg-black py-9 px-16 rounded-3xl flex justify-between'>
        <p className='text-3xl lg:text-5xl text-white font-integral-bold w-1/2'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
        <div  className='flex flex-col gap-3'>
            <div className='flex gap-3 py-2 px-3 rounded-full bg-white'>
                <span>
                    <img src={mail_icon} alt="mail_icon" />
                </span>
                <input className='bg-transparent focus:border-none focus:outline-0 placeholder-black/40 w-full text-sm' placeholder='Enter your email address' type="text" name="" id="" />
            </div>
            <div>
                <button className='py-2 px-3 text-sm w-full rounded-full bg-white'>Subscribe to Newsletter</button>
            </div>
        </div>
        
    </div>
  )
}
