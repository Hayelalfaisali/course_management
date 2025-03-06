import React from "react";
import Hero from "./components/Hero";
import CourseMaterials from "./components/CourseMaterials";
import Comments from "./components/Comments";
import CourseTopics from "./components/CourseTopics";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-10 md:px-20">
        <h1 className="text-3xl font-bold mb-6">Starting SEO as your Home</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="lg:col-span-2">
            <Hero />
            <CourseMaterials />
            <Comments />
          </div>

          {/* Right column */}
          <CourseTopics />
        </div>
      </div>
    </div>
  );
}

export default App;
