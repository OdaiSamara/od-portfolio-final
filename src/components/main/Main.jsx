import React, { useState } from 'react'
import './main.css';
// @ts-ignore
import { myProjects } from "./myProjects.js"
import { AnimatePresence, motion } from "framer-motion";
const Main = () => {
    const [curentActive, setCurentActive] = useState("all");
    const [arr, setArr] = useState(myProjects)

    const handelClick = (btnCategorey) => {
        setCurentActive(btnCategorey)
        const newArr = myProjects.filter((items) => {
            const zzz = items.category.find((myitems) => {
                return myitems === btnCategorey
            })
            return zzz === btnCategorey
        })
        setArr(newArr)
    }

    return (
        <main className='flex' id="Projects">
            <section className=" flex left-section">
                <button className={curentActive === "all" ? "active" : null} onClick={() => {
                    setCurentActive("all")
                    setArr(myProjects)
                }
                }   >
                    all projects
                </button>

                <button className={curentActive === "css" ? "active" : null} onClick={() => { handelClick("css") }} >
                    HTML & CSS
                </button>

                <button className={curentActive === "js" ? "active" : null} onClick={() => { handelClick("js") }} >
                    JavaScript
                </button>
                <button className={curentActive === "react" ? "active" : null} onClick={() => { handelClick("react") }} >
                    React
                </button>
                <button className={curentActive === "next" ? "active" : null} onClick={() => { handelClick("next") }} >
                    NEXT & TAILWIND
                </button>
            </section>
            <section className=" flex right-section">
                <AnimatePresence>
                    {arr.map((items) => {
                        return (

                            <motion.article
                                layout
                                initial={{ transform: "scale(0.4)" }}
                                animate={{ transform: "scale(1)" }}
                                transition={{ type: "spring", damping: 8, stiffness: 30 }}
                                key={items.imgPath}
                                className="  card"
                            >

                                <img width={266} src={items.imgPath} alt="" />

                                <div style={{ width: "266px" }} className="box">
                                    <h1 className="title">{items.projectTitle}</h1>
                                    <p className="sub-title">
                                        {items.desc}
                                    </p>

                                    <div className="flex icons">
                                        <div style={{ gap: "11px" }} className="flex">
                                            <a href={items.linkPath} target='_blank' className="icon-link"></a>
                                            <a href={items.linkGit} target='_blank' className="icon-github"></a>
                                        </div>

                                        <a className="link flex" href="">
                                            more
                                            <span
                                                style={{ alignSelf: "end" }}
                                                className="icon-arrow-right"
                                            ></span>
                                        </a>
                                    </div>
                                </div>

                            </motion.article>
                        )
                    })}
                </AnimatePresence>
            </section>
        </main>
    )
}

export default Main
