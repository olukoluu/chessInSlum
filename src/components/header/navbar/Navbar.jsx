import './navbar.css';
import Button from "../../../UI/button/Button";
import { BiMenuAltLeft } from 'react-icons/bi';
import { FaCrown } from 'react-icons/fa';
import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuToggle = () =>{
    setIsOpen((prevState) => !prevState)
  }

  return (
    <nav>
      <img src="./images/chesslogo.png" alt="logo" className='logo' />
      <div className={`nav__link ${isOpen ? 'menu__active' : ''}`}>
        <a href="/"><FaCrown color='goldenrod' /> Home</a>
        <a href="/">About</a>
        <a href="/">Merchandise</a>
        <a href="/">Blog</a>
        <a href="/">Contact</a>
      </div>
      <Button text={'DONATE'} />

      <div className="menu__icon">
        <BiMenuAltLeft onClick={menuToggle} />
      </div>
    </nav>
  );
};

export default Navbar;
/*
Front-end developer here. I've been looking for an internship or junior position where I can pick the brains of motivating developers like you and get real-world work experience.
I don't mind not getting paid because gaining real-world experience is more important to me than finances.
Despite how unusual it may appear, can I obtain such a chance from your company in any way?

Certainly, here is a suggestion for a revised message:

Dear Victor,

As a frontend developer, I am reaching out to express my interest in any intern or junior positions that may be available at Raenest.

I am confident in my skills in HTML, CSS, and JavaScript, and am currently learning React JS. I also have experience using TailwindCSS to create visually appealing and user-friendly websites.

I don't mind not getting pain as I am eager to gain real-world work experience and work alongside motivating developers. and believe that my skills and experience align well with your needs. I am a hard worker and am always willing to learn and grow as a developer.

I look forward to hearing from you.

Best regards,
[Your Name]
 */