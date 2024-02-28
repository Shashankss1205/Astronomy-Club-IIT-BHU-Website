"use client"
import '../../globals.css'
import React from 'react'
import { Roboto } from 'next/font/google'
import Image from 'next/image';
import Hero from '../../../../public/Hero.png'
import ParticleEffect from '@/app/Animations/ParticleEffect';
import { motion } from "framer-motion"
import Link from 'next/link'


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const heroVariants ={
    visible: {
      x:[-30,30,-30],
      y:[-30,30,-30],
      transition: {
        repeat: Infinity,
        delay:0.1,
        duration:5,
      }
    }
}

const Home = () => {
  return (
    <>
      <div className='h-screen mt-[50px] bg-black flex flex-row justify-between'>
            <div className='flex ml-[100px] mt-[50px] flex-col grow'>
                 <h1 className='text-white  mt-[80px] text-gradient text-[30px] lg:text-[50px] md:text-[30px]'><span className={roboto.className} >Explore the Cosmos. </span></h1>
                 <div className='mt-[20px]'>
                    <p className='text-white text-[10px] lg:text-[25px] md:text-[20px] '><span className={roboto.className}>Unveiling the Mysteries of the Universe,</span></p>
                    <p className='text-white text-[10px] lg:text-[25px] md:text-[20px]'><span className={roboto.className}>we are <span className='text-gradient font-bold'>Astronomy</span> club of IIT BHU.</span></p>
                 </div>
                 <Link href='/pages/Activities'>
                 <button className='bg-gradient-to-r from-white to-slate-400 rounded-[5px] w-[130px] mt-[40px] px-[3px] py-[5px] '> <span className={roboto.className}><span className='font-bold text-[20px]'>explore</span></span></button>
                 </Link>
            </div>
            <div className='flex items-center justify-center h-screen container w-[45vw] mr-[70px]'>
                
                <div className='bg-particle'>
                    <ParticleEffect />
                </div>
                <motion.div 
                  className='image-hero'
                  variants={heroVariants}
                  animate="visible"
                  
                >
                    <Image src={Hero} height={300} width={300} alt="hero" />
                </motion.div>     
            </div>
      </div>
    </>
  )
}

export default Home