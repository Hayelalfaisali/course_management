import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import YouTube from 'react-youtube'

function Hero() {
    return (
        <>
            <div className="relative aspect-video bg-black rounded-lg mb-8 overflow-hidden">
                <YouTube
                    videoId="dQw4w9WgXcQ"
                    opts={{
                        width: "100%",
                        height: "100%",
                        playerVars: {
                            autoplay: 0,
                        },
                    }}
                    className="absolute inset-0"
                />
            </div>

            {/* Social share */}
            <div className="flex space-x-4 mb-8">
                <button className="p-2 text-gray-600 hover:text-blue-600">
                    <FaFacebookF />
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-400">
                    <FaTwitter />
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-700">
                    <FaLinkedinIn />
                </button>
                <button className="p-2 text-gray-600 hover:text-red-600">
                    <FaYoutube />
                </button>
            </div>
        </>
    )
}

export default Hero
