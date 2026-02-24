import { Spin as Hamburger } from 'hamburger-react'
import { useState } from 'react'

const Nav = () => {
  const [isOpen, setOpen] = useState(false)

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
          
          <a href="#" className="font-mono text-xl sm:text-2xl tracking-widest flex items-center hover:text-gray-400 duration-300 transition-colors">
            Kanokpong
          </a>

          {/* Desktop Menu */}
          <div className="gap-8 items-center text-base sm:flex hidden">
            <a href="#" className="inline-flex items-center hover:text-gray-400 duration-300 transition-colors">About</a>
            <a href="#" className="inline-flex items-center hover:text-gray-400 duration-300 transition-colors">Projects</a>
            <a href="#" className="inline-flex items-center hover:text-gray-400 duration-300 transition-colors">Contact</a>
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
          <a href="#" onClick={() => setOpen(false)} className="hover:text-gray-400 transition-colors">About</a>
          <a href="#" onClick={() => setOpen(false)} className="hover:text-gray-400 transition-colors">Projects</a>
          <a href="#" onClick={() => setOpen(false)} className="hover:text-gray-400 transition-colors">Contact</a>
        </div>

      </div>
    </nav>
  )
}

export default Nav
