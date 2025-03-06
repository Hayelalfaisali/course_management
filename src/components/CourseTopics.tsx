import React from 'react'
import { FaLock } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';
const ProgressBar = ({ progress }) => {
    return (
        <div className="relative w-full mt-6">
            <div className="flex justify-between items-center mb-1">
                <h2 className="text-lg font-semibold">Topics for This Course</h2>
            </div>
            <div className="relative w-full h-2 bg-gray-200 rounded-full">
                <div
                    className="absolute top-0 left-0 h-2 bg-green-500 rounded-full"
                    style={{ width: `${progress}%` }}
                ></div>
                <div
                    className="absolute -top-5 left-[calc(63%-12px)] transform translate-x-[-50%] flex flex-col items-center"
                >
                    <div className="w-6 h-6 bg-white border border-gray-300 rounded-full flex items-center justify-center text-xs text-gray-700 shadow-md">
                        You
                    </div>
                    <span className="text-xs text-blue-600 mt-1">{progress}%</span>
                </div>
            </div>
        </div>
    );
};
function CourseTopics() {
    const weeks = [
        {
            title: "Week 5-8",
            description:
                "Advanced story telling techniques for writers: Personas, Characters & Plots",
            items: [
                { title: "Defining Functions", locked: true },
                { title: "Function Parameters", locked: true },
                {
                    title: "Return Values From Functions",
                    special: true,
                    questions: "2 QUESTION",
                    duration: "15 MINUTES",
                },
                { title: "Global Variable and Scope", locked: true },
                { title: "Newer Way of creating a Constant", locked: true },
                { title: "Constants", locked: true },
            ],
        },
    ];
    return (
        <>
            <div className="space-y-14">
                <ProgressBar progress={63} />

                {Array(3)
                    .fill(null)
                    .map((_, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 md:mx-8 rounded-lg shadow-sm"
                        >
                            {weeks.map((week, weekIndex) => (
                                <div key={weekIndex}>
                                    <h3 className="font-semibold text-lg mb-2">
                                        {week.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {week.description}
                                    </p>
                                    <div className="space-y-3">
                                        {week.items.map((item, itemIndex) => (
                                            <div
                                                key={itemIndex}
                                                className="flex items-center justify-between text-sm py-2 border-b"
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <HiDocumentText className="w-4 h-4 text-gray-400" />
                                                    <span className="text-gray-700">
                                                        {item.title}
                                                    </span>
                                                </div>
                                                {item.special ? (
                                                    <div className="flex items-center space-x-3 text-xs">
                                                        <span className="text-emerald-500">
                                                            {item.questions}
                                                        </span>
                                                        <span className="text-red-500">
                                                            {item.duration}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <FaLock className="text-gray-400" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
        </>
    )
}

export default CourseTopics
