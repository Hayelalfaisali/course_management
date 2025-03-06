import React from 'react'

function Header() {
    return (
        <>       <div className="container mx-auto px-10 md:px-20 py-4">
            <div className="flex items-center text-gray-500 text-sm">
                <span>Home</span>
                <span className="mx-2">›</span>
                <span>Courses</span>
                <span className="mx-2">›</span>
                <span>Course Details</span>
            </div>
        </div>
        </>
    )
}

export default Header
