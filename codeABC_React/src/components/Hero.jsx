import React from 'react'
import play from "../assets/play.png"
import rafi from "../assets/ShahjalalRafi.png"

export default function Hero() {
  return (
    <section className="container mx-auto px-16 py-20 flex flex-col md:flex-row gap-6 justify-between items-center">
    <div>
        <h1 className="text-5xl font-bold pb-6"><span className="text-primary">Tailwind CSS</span> Course Instructor</h1>
        <h2 className="text-7xl font-bold text-secondary pb-6">Shahjalal Rafi</h2>
        <p className="font-bold">Founder, Code ABC</p>
        <div className="flex gap-6 items-center pt-8">
            <button className="bg-secondary px-8 py-3 rounded-md text-white font-bold">Get Token</button>
            <div className="flex gap-2 items-center">
                <span>White paper</span>
                <img src={play} alt="play" />
            </div>
        </div>
    </div>
    <div>
        <img src={rafi} alt="shahjala Rafi" />
    </div>
</section>
  )
}
