import { Spin as Hamburger } from 'hamburger-react'
import { useState } from 'react'

const Nav = () => {
  const [isOpen, setOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    }
  }

  return (
    <nav className="fixed top-4 left-0 w-full z-50 px-4 sm:px-10">
      {/* 1. Main Container: สลับ Class ตามค่า isOpen */}
      <div 
        className={`max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 text-white shadow-2xl overflow-hidden
          ${isOpen ? "rounded-3xl" : "rounded-full"}
        `}
      >
        
        {/* 2. Top Bar (แถวบนสุด: โลโก้ + เมนูคอม + Hamburger) */}
        <div className="flex items-center justify-between px-6 sm:px-10 py-3 w-full">
          
          <button onClick={() => scrollToSection('home')} className="font-mono text-xl sm:text-2xl tracking-widest flex items-center hover:text-gray-400 duration-300 transition-colors bg-none border-none cursor-pointer">
            Kanokpong
          </button>

          {/* Desktop Menu */}
          <div className="gap-8 items-center text-base sm:flex hidden">
            <button onClick={() => scrollToSection('about')} className="inline-flex items-center hover:text-gray-400 duration-300 transition-colors bg-none border-none cursor-pointer">About</button>
            <button onClick={() => scrollToSection('projects')} className="inline-flex items-center hover:text-gray-400 duration-300 transition-colors bg-none border-none cursor-pointer">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="inline-flex items-center hover:text-gray-400 duration-300 transition-colors bg-none border-none cursor-pointer">Contact</button>
          </div>

          {/* Hamburger (ซ่อนบนคอม) */}
          <div className="sm:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} color="#fff" />
          </div>

        </div>

        {/* 3. Mobile Expanded Menu (อยู่ในกล่องเดียวกัน แต่จะถูกยืดออก/หดเข้า) */}
        <div 
          className={`sm:hidden flex flex-col gap-4 px-6 transition-all duration-250 ease-in-out
            ${isOpen ? "max-h-64 opacity-100 pb-5 pt-2" : "max-h-0 opacity-0 pb-0 pt-0"}
          `}
        >
          <button onClick={() => scrollToSection('about')} className="hover:text-gray-400 transition-colors bg-none border-none cursor-pointer text-left">About</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-gray-400 transition-colors bg-none border-none cursor-pointer text-left">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-gray-400 transition-colors bg-none border-none cursor-pointer text-left">Contact</button>
        </div>

      </div>
    </nav>
  )
}

export default Nav
