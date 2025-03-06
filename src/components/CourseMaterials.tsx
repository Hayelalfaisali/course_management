import React from 'react'
import { FaBook, FaClock, FaGlobe, FaUsers } from 'react-icons/fa'

function CourseMaterials() {
    return (
        <>
            {/* Course Materials */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Course Materials</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    {/* Responsive grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-28">
                        {[1, 2].map((_, index) => (
                            <div
                                key={index}
                                className={`bg-white ${index === 1 ? "hidden md:block" : ""
                                    }`}
                            >
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between border-b pb-3">
                                        <div className="flex items-center">
                                            <FaClock className="w-5 h-5 mr-2 text-gray-600" />
                                            <span className="text-gray-600">Duration:</span>
                                        </div>
                                        <span className="ml-2 font-medium">3 weeks</span>
                                    </div>
                                    <div className="flex items-center justify-between border-b pb-3">
                                        <div className="flex items-center">
                                            <FaBook className="w-5 h-5 mr-2 text-gray-600" />
                                            <span className="text-gray-600">Lessons:</span>
                                        </div>
                                        <span className="ml-2 font-medium">8</span>
                                    </div>
                                    <div className="flex items-center justify-between border-b pb-3">
                                        <div className="flex items-center">
                                            <FaUsers className="w-5 h-5 mr-2 text-gray-600" />
                                            <span className="text-gray-600">Enrolled:</span>
                                        </div>
                                        <span className="ml-2 font-medium">65 students</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <FaGlobe className="w-5 h-5 mr-2 text-gray-600" />
                                            <span className="text-gray-600">Language:</span>
                                        </div>
                                        <span className="ml-2 font-medium">English</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseMaterials
