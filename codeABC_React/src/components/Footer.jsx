import React from 'react'
import circle from "../assets/codeabc_circle.png"
import facebook from "../assets/facebook.png"
import dribble from "../assets/dribble.png"
import github from "../assets/github.png"
import twitter from "../assets/twitter.png"

export default function Footer() {
  return (
    <footer className="bg-[#EEF5FF] p-16">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            <div>
                <div className="flex gap-2 items-center pb-6">
                    <img src={circle} alt="code abc" className="w-[20px] h-[20px]" />
                    <h1 className="font-bold">Code ABC</h1>
                </div>
                <div>
                    <p>Terms of use | Privacy</p>
                    <p>Terms of use | Privacy</p>
                </div>
            </div>
            <div>
                <div className="pb-6">
                    <h1 className="font-bold">About Us</h1>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Support Center</p>
                    <p>Customer Support</p>
                    <p>About Us</p>
                    <p>About Us</p>
                </div>
            </div>
            <div>
                <div className="pb-6">
                    <h1 className="font-bold">Our Information</h1>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Support Center</p>
                    <p>Customer Support</p>
                    <p>About Us</p>
                    <p>About Us</p>
                </div>
            </div>
            <div>
                <div className="pb-6">
                    <h1 className="font-bold">My Account</h1>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Support Center</p>
                    <p>Customer Support</p>
                    <p>About Us</p>
                    <p>About Us</p>
                </div>
            </div>
            <div>
                <div className="pb-6">
                    <h1 className="font-bold">Connect</h1>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <img src={facebook} alt="" />
                        <p>Facebook</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={dribble} alt="" />
                        <p>Dribble</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={github} alt="" />
                        <p>Github</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={twitter} alt="" />
                        <p>Twitter</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
