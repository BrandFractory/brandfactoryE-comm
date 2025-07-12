import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img 
            className='w-ful md:max-w-[450px]'
            src={assets.about_img}
            alt="about_img" 
          />
          <div className='flex flex-col gap-6 justify-center md:w-2/4 text-gary-600'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui accusantium deserunt voluptates?Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam atque libero incidunt dolorem, odio cupiditate temporibus doloremque obcaecati illum autem ipsa labore. Blanditiis. elit. Cum minima ad ducimus.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vitae delectus, odit pariatur impedit cumque perspiciatis molestiae soluta provident asperiores eum fugiat similique consequatur deleniti odio ut unde nostrum repellendus vero voluptates.</p>
              <b className='text-gary-800 mb-[-10px]'>Our Mission</b>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quisquam minus repellendus aut itaque eos eveniet amet inventore, id expedita quia atque mollitia!</p>
          </div>
      </div>

      <div className='text-xl py-4 '>
        <Title text1={'WHY '} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, cupiditate.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, cupiditate.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, cupiditate.</p>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default About