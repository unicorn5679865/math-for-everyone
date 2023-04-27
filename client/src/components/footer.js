import React from "react"
import {FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

const SOCIAL = [
  {
    id:1,
    link: "https://twitter.com",
    icon: <FaTwitter />,
  }, 
  {
    id:2,
    link: "https://facebook.com",
    icon: <FaFacebook />,
  }, 
  {
    id:3,
    link: "https://linkedin.com",
    icon: <FaLinkedin />,
  },
]

export default function Footer() {

  return (
    <>
    <footer className="flex flex-row flex-wrap  items-center justify-between bg-gray-600  ">
        <div className="w-full mx-auto container md:p-5 p-5 md:flex items-center justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">© 2023 <a href="#" className="hover:underline">Math for everyone</a>. All Rights Reserved.
          </span>
          <p className="text-sm font-medium text-gray-500">Дерзай, ты справишься!</p>
          <div className="flex justify-end text-3xl w-full md:w-1/5">
            {SOCIAL.map(({id, link, icon}) => (
              <a href={link} 
              key={id}
              target='_blank'
              rel="noopener noreferrer"
              className="cursor-pointer duration-300 mx-3 hover:text-white">
              {icon}
              </a>
            ))}
          </div>
        </div>
    </footer>
    </>
)
}




/// темная тема


