import React from 'react'
import { assets } from '../assets/assets'


const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img    
                    src={assets.logo} 
                    alt="logo"
                    className='mb-5 w-32 ' 
                />
                <p className='w-full md:w-2/3 text-gary-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates ullam accusamus ipsam?
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5 '>COMPANY</p>
                <ul className='felx flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>

                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
                  <ul className='felx flex-col gap-1 text-gray-600' >
                    <li>+91 9373668746</li>
                    <li>adityachavan@giganxt.me</li>

                </ul>
            </div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All Right Reserved.</p>
        </div>

        
    </div>
  )
}

export default Footer