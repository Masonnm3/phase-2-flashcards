import { RiMenuLine, RiHome4Line, RiBook2Line, RiInformationLine, RiPhoneLine } from "react-icons/ri";
import { GiMagnifyingGlass  } from "react-icons/gi";
import { Link } from 'react-router-dom'

const AboutPage = () =>{
    return(
    <>
    <div style={{marginLeft: "100px"}}>
    <h1>About us:</h1>
    <p1>Our names are Mason, Matthew and Iskander. This is our project for Phase 2. Some would say that routing is the best thing ever, we definitely agree. Our app is designed to help you study for any future coding endeavor you may have. We hope you find it helpful and love the rest of the cohort!</p1>
    </div>
    <div className="sidebar-icon-bar">
        <Link to='/'>
            <RiHome4Line className="sidebar-icon" />
        </Link>
            <RiMenuLine className="sidebar-icon" />
            <GiMagnifyingGlass className="sidebar-icon" />
            <RiBook2Line className="sidebar-icon" />
        <Link to="/AboutPage">
            <RiInformationLine className="sidebar-icon" />
        </Link>
        <Link to="/Contact">
            <RiPhoneLine className="sidebar-icon" />
        </Link>
      </div>
    </>
)}

export default AboutPage