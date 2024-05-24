import React from "react";

function Intro() {
    return (
        <div className="flex items-center 
        justify-center flex-col text-center pt-20
        pb-6">
            <h1 className="text-4xl md:text-7x1 dark:text-white
            mb-1 md:mb-3 font-bold">Jack Ning</h1>
            <p className="text-base md:text-x1 
            mb-3 font-medium">Software Engineer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
            My name is Jack Ning. I live in Fairfax, Virginia. I did my undergraduate at the University of Virginia, dual majoring in computer science and financial economics. Afterwards, I worked at a startup, Built Robotics, for over a year. I'm currently pursuing a Master's in Computer Science at John's Hopkin's University, focusing on AI.
            </p>
        </div>
    )
}

export default Intro; 