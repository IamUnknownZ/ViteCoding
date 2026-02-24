const Hero = () => {
  return (
    // ใช้ min-h-screen เพื่อให้กล่องนี้สูงเต็มหน้าจอ และ pt-24 เผื่อที่ให้ Navbar
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24">
      
      {/* เอฟเฟกต์ตกแต่งเล็กน้อย (ตัวอักษรเล็กๆ ด้านบนหัวข้อ) */}
      <p className="text-sm md:text-base text-gray-400 tracking-widest uppercase mb-4">
        Welcome to my portfolio
      </p>

      {/* Headline (หัวข้อหลัก) - ใช้ตัวหนาและขนาดใหญ่ */}
      <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
        Crafting Digital <br className="hidden md:block" /> 
        <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-blue-500">
          Experiences.
        </span>
      </h1>

      {/* Subheadline (คำอธิบาย) - สีเทาอ่อนเพื่อไม่ให้แย่งซีนหัวข้อ */}
      <p className="max-w-2xl text-base md:text-lg text-gray-300 mb-10 leading-relaxed">
        สวัสดีครับ ผมกนกพงศ์ หลงใหลในการพัฒนาเว็บไซต์และเทคโนโลยีสมัยใหม่ 
        มุ่งมั่นที่จะสร้างสรรค์ผลงานที่ใช้งานง่ายและมีประสิทธิภาพ
      </p>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#projects" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-300">
          View Projects
        </a>
        <a href="#contact" className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-colors duration-300">
          Contact Me
        </a>
      </div>

    </section>
  )
}

export default Hero