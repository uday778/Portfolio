

import {HERO_CONTENT} from "../constants/index.js"
import ProfilePic from "../assets/ProfilePic.jpg"
import { motion } from "framer-motion"
import ResumeButton from "./Resume.jsx";

const container=(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay},
    },
});

function Hero() {
    return (
        <div 
       
        className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap justify-center lg:p-8">
                <motion.div
                 whileInView={{opacity:1,x:0}}
                 initial={{x:-100,opacity:0}}
                 transition={{duration:1,delay:0.5}}
                className="w-full lg:w-1/2 px-4">
                    <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="lg:mt-36 text-6xl tracking-tight lg:text-8xl sm: mt-10 md:mt-16 font-thin pb-10">Uday Kumar</motion.h1>
                    <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    
                    className=" bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 tracking-tight text-transparent text-4xl bg-clip-text ">Full Stack Developer</motion.span>
                    <motion.p  
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tight">{HERO_CONTENT}</motion.p>
                    </div>
                    < motion.div
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    >
                    <ResumeButton/>
                    </motion.div>
                </motion.div>
                
                <motion.div
                whileInView={{opacity:1,y:0}}
                initial={{y:-100,opacity:0}}
                transition={{duration:1,delay:0.5}}
                className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center align-bottom md:justify-center ">
                    <motion.img
                    initial={{x:100,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:1,delay:0.8}}
                    src={ProfilePic} alt="" className="rounded-3xl w-96 mt-[-20px]sm:mt-18 md:mt-20 " />
                </div>
                </motion.div>
            </div>
        </div>
      
    )
}

export default Hero
