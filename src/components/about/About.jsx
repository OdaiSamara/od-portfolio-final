import React, { useState } from 'react'
import "./about.css"
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from 'react';
const About = () => {
    const [show, setShow] = useState(false)
    const [size, setSize] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 200) {
                setShow(true)
                setSize(true)

            } else {
                setShow(false)
                setSize(false)

            }
        }
        )

    }, [])

    return (
        <div className='about' id="Skills" >
            <h2 >About Us</h2>



            {/* skills */}
            <div className="skills">

                <div className="skill">
                    <h3>Html <span>95%</span></h3>
                    <div className="the-progress">
                        <span style={{ width: size ? "95%" : "0%", transition: "1s" }}></span>
                    </div>
                </div>
                <div className="skill">
                    <h3>Css <span>90%</span></h3>
                    <div className="the-progress">
                        <span style={{ width: size ? "90%" : "0%", transition: "1s" }}></span>
                    </div>
                </div>
                <div className="skill">
                    <h3>JavaScript <span>80%</span></h3>
                    <div className="the-progress">
                        <span style={{ width: size ? "80%" : "0%", transition: "1s" }}></span>
                    </div>
                </div>
                <div className="skill">
                    <h3>jQuery <span>80%</span></h3>
                    <div className="the-progress">
                        <span style={{ width: size ? "80%" : "0%", transition: "1s" }}></span>
                    </div>
                </div>
                <div className="skill">
                    <h3>Graphic Design <span>60%</span></h3>
                    <div className="the-progress">
                        <span style={{ width: size ? "60%" : "0%", transition: "1s" }}></span>
                    </div>
                </div>

            </div>
            {/* info */}
            <div className='info' style={{ transition: "1s" }} >

                <h4>Address : <span>Syria-Swida</span ></h4>
                <h4>Name : <span>Odai Samara</span ></h4>
                <h4 >Phone : <span>+963 935694650</span ></h4>
                <h4 >Email : <span>odesamara99@gmail.com</span ></h4>
                <h4 > Github : <span>https://github.com/OdaiSamara/</span ></h4>

            </div>

            <div className="skills">
                <div className="skill">
                    <h3>React <span>80%</span></h3>
                    <div className="the-progress">
                        <span style={{ width: size ? "80%" : "0%", transition: "1s" }}></span>
                    </div>
                </div>
                <div className="skill">
                    <h3>Redux <span>70%</span></h3>
                    <div className="the-progress">
                        <span style={{ width: size ? "70%" : "0%", transition: "1s" }}></span>
                    </div>
                </div>
                <div className="skill">
                    <h3>Bootstrap <span>90%</span></h3>
                    <div className="the-progress">
                        <span style={{ width: size ? "90%" : "0%", transition: "1s" }}></span>
                    </div>
                </div>
                <div className="skill">
                    <h3> Tailwind  <span>70%</span></h3>
                    <div className="the-progress">
                        <span style={{ width: size ? "70%" : "0%", transition: "1s" }}></span>
                    </div>
                </div>
                <div className="skill">
                    <h3>Meterial UI <span>70%</span></h3>
                    <div className="the-progress">
                        <span style={{ width: size ? "70%" : "0%", transition: "1s" }}></span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default About
