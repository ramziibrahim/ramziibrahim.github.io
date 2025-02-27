import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const resumeUrl = "https://drive.google.com/file/d/1feeWHq8mnAH-G5chBXQ5TjMbvRfC_2xU/view?usp=sharing"; // Replace with your actual Google Drive link

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Resume".split("")}
                        idx={15}
                    />
                </h1>
                <div className="resume-container">
                    <iframe
                        src={resumeUrl.replace("/view?usp=sharing", "/preview")}
                        title="Resume"
                        className="resume-frame"
                    />
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;