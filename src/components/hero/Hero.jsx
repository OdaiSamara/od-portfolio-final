import React, { useRef } from 'react'
import "./hero.css"
import Lottie from "lottie-react";
import devAnimation from "../../animation/dev.json"
import { motion, spring } from 'framer-motion';
const Hero = () => {
    // @ts-ignore
    const lottieRef = useRef()
    return (
        <section className='hero flex'>
            <div className='left-section '>
                <div className="  parent-avatar flex">
                    <motion.img src="./me-modified.png" className='avatar' alt="avatar" initial={{ transform: "scale(0)" }} animate={{ transform: "scale(1.1)" }} transition={{ damping: 6, type: "spring", stiffness: 100 }} />
                    <div className='icon-verified'></div>
                </div>
                <h1 className='title'> Front-End Developer for Websites.</h1>
                <p className="sub-title">I'm Odai Samara, a front-end web developer based in Syria. I currently work as a freelancer in web development and am looking for a job with a software company to gain and develop my skills in this field.
                </p>
                <div className="all-icons flex">
                    <div className="icon icon-twitter"></div>
                    <div className="icon icon-instagram"></div>
                    <div className="icon icon-github"></div>
                    <div className="icon icon-linkedin"></div>
                </div>
            </div>
            <div className='right-section animation '>
                <Lottie
                    animationData={devAnimation}
                    // https://lottiereact.com/
                    lottieRef={lottieRef}
                    onLoadedImages={() => {
                        // @ts-ignore
                        lottieRef.current.setSpeed(0.5);
                    }
                    }
                />
            </div>
        </section>
    )
}

export default Hero
