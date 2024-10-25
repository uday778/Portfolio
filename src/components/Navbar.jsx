
import Logo from '../assets/logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";

function Navbar() {
  return (
    <div>
      <nav className=" flex items-center justify-between  h-20  ">
        <div className="flex flex-shrink-0 justify-between items-center ">
          <img src={Logo} alt="" className='w-40' />

        </div>
        <div className='flex items-center justify-center  gap-4 text-2xl cursor-pointer z-10 no-underlinee'>
          <a href="https://www.linkedin.com/in/uday778/" target='_blank'><FaLinkedin /></a>
          <a href="https://github.com/uday778" target='_blank'><FaGithub /></a>
          <a href="https://x.com/udaykumar7771" target='_blank'><FaSquareXTwitter /></a>
          <a href="mailto:uday33379@gmail.com" className="my-4 border-b"><MdAttachEmail />
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
