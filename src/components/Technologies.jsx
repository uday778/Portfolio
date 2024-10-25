

import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { FaGolang } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion";



const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        },
    }
});


function Technologies() {
    return (
        <div className="border-b border-neutral-800 pb-24 w-[60%] mx-auto">
            <motion.h1
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl">Technologies</motion.h1>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 ">  <RiReactjsLine className="text-5xl text-cyan-400" /></motion.div>

                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 "> <TbBrandNextjs className="text-5xl " /></motion.div>

                <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 "> <FaGolang  className="text-5xl text-cyan-400" /></motion.div>


                <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">   <FaNodeJs className="text-5xl text-green-400" /></motion.div>

                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">     <SiMongodb className="text-5xl text-green-500" /></motion.div>

                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">  <BiLogoPostgresql className="text-5xl text-sky-600" /></motion.div>

                <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">  <SiExpress className="text-5xl" /></motion.div>
                
            </motion.div>
        </div>


    )
}

export default Technologies
