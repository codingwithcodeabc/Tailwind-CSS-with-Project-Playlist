import React from 'react'
import logo from "../assets/codeabc_circle.png"
import search from "../assets/search.png"
import lock from "../assets/lock.png"

export default function Navbar() {
  return (
    <nav className="container mx-auto  flex flex-col md:flex-row gap-4 items-center py-2 ">
    <img src={logo} alt="code abc" className="w-[80px] h-[80px]" />
    <div className="w-full flex flex-col md:flex-row gap-4 justify-between items-center ">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <p>Home</p>
        <p>Channel</p>
        <p>Support</p>
        <p>About</p>
        <img src={search} alt="search" />
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex gap-2 items-center">
          <img src={lock} alt="lock" />
          <span>Login</span>
        </div>
        <button className="bg-primary px-8 py-3 rounded-md text-white">
          Donate Now
        </button>
      </div>
    </div>
  </nav >
  )
}
