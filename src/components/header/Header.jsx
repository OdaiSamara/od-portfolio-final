import React, { useEffect, useState } from 'react'
import './header.css'
const Header = () => {
    const [showModal, setshowModal] = useState(false)

    const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "light")
    useEffect(() => {
        if (theme === "light") {
            document.body.classList.remove("light")
            document.body.classList.add("dark")
        } else {
            if (theme === "dark") {
                document.body.classList.remove("dark")
                document.body.classList.add("light")
            }
        }

    }, [theme])

    return (
        <header className='flex'>
            <button className='menu icon-menu flex' onClick={() => {
                setshowModal(true)
            }} />
            <div />

            <nav>
                <ul className="flex">
                    <li>
                        <a href="#">Home</a>
                    </li>

                    <li>
                        <a href="#Skills">About</a>
                    </li>

                    <li>
                        <a href="#Projects">Projects</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>
            </nav>
            <button className='mode' onClick={() => {
                // send to localstorge
                localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark")
                // save data in useState of localStorde
                setTheme(localStorage.getItem("currentMode"))
            }} >
                <span className={theme === "dark" ? 'icon-sun' : 'icon-moon-o'}></span>
            </button>

            {showModal && <div className=' fixed'>
                <ul className="modal ">
                    <li>
                        <button className='icon-close' onClick={() => {
                            setshowModal(false)
                        }} />
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Articles</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                    <li>
                        <a href="">Speaking</a>
                    </li>
                    <li>
                        <a href="">Uses</a>
                    </li>
                </ul>
            </div>}



        </header>
    )
}

export default Header
