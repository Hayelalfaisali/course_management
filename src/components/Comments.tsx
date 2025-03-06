import React from 'react'
import { FaPaperPlane, FaUser } from 'react-icons/fa'

function Comments() {
    return (
        <>
            {/* Comments section */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Comments</h2>
                <div className="space-y-6">
                    {[1, 2, 3].map((_, index) => (
                        <div
                            key={index}
                            className="flex space-x-4 items-start p-4 border-b"
                        >
                            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                                <FaUser className="w-6 h-6 text-gray-500" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Student Name Goes Here</h3>
                                <p className="text-gray-500 text-sm">
                                    Oct {10 + index}, 2021
                                </p>
                                <p className="text-gray-600 mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Comment form */}
                <div className="mt-8">
                    <textarea
                        className="w-full p-4 border rounded-lg"
                        rows={4}
                        placeholder="Write a comment..."
                    ></textarea>
                    <button className="mt-4 flex items-center px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
                        <FaPaperPlane className="mr-2" />
                        Submit Review
                    </button>
                </div>
            </div>
        </>
    )
}

export default Comments
