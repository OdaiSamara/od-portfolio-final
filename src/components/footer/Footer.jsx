import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className="flex">
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

      <p>© 2025 All rights reserved.</p>
    </footer>
  )
}

export default Footer
