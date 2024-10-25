import { motion } from "framer-motion"



function About() {
  return (
    <div className='border-b border-neutral-900 pb-4 '>
      <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{y:-100,opacity:0}}
        transition={{duration:1,delay:0.5}}
      className='my-20 text-center text-4xl  '>About <span className='text-neutral-500 '>Me</span></motion.h1>
      <div className='w-[60%] flex flex-wrap  items-center justify-center mx-auto'>
          <div className=''>
            <motion.p
             whileInView={{opacity:1,y:0}}
            initial={{y:-100,opacity:0}}
            transition={{duration:1,delay:0.5}}
             className="font-light">Hi! I’m a passionate developer with a knack for building innovative web applications and exploring the latest technologies. I enjoy working on both frontend and backend projects, with experience in React.js, Express.js, and PostgreSQL. Currently diving deeper into Docker and Golang, I’m always eager to learn and tackle new challenges.</motion.p>
          </div>
      </div>
    </div>
  )
}

export default About
