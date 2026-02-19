import GlareHover from './GlareHover'

const Nav = () => {
  return (
    <nav className="fixed top-4 left-0 w-full z-50 px-4">
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border text-white border-white/10 rounded-full px-10 py-3 flex items-center justify-between shadow-2xl">
        
        <a href="#" className="font-mono text-2xl tracking-wider flex items-center hover:text-gray-300  transition-colors">
            Kanokpong
        </a>

        <div className="flex items-center gap-10 text-base">
          <a href="#" className="inline-flex items-center hover:text-gray-300 transition-colors">
              About
          </a>
          <a href="#" className="inline-flex items-center hover:text-gray-300  transition-colors">
              Projects
          </a>
          <a href="#" className="inline-flex items-center hover:text-gray-300 transition-colors">
              Contact
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Nav