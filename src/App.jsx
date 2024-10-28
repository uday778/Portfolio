
import About from "./components/About"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

import Technologies from "./components/Technologies"

function App() {
  return (
    <div className="overflow-x-hidden antialiased text-neutral-300 selection:bg-cyan-300 selection:text-cyan-950 ">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,18,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto sm:px-10 lg:px-20">
        <Navbar />
        <Hero />
        <About />
        <Education/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>


    </div>
  )
}

export default App
