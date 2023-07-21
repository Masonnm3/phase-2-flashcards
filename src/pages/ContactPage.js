import { RiMenuLine, RiHome4Line, RiBook2Line, RiInformationLine, RiPhoneLine } from "react-icons/ri";
import { GiMagnifyingGlass  } from "react-icons/gi";
import { Link } from 'react-router-dom'

const ContactPage = () =>{
    return(
        <>
        <div style={{marginLeft: "100px"}}>
        <h1>Contact Us</h1>
        <p1>There are many ways to conact us, don't fret</p1>
        <p2>Iskander 
            Discord: iskandervulto
            Phone: 911
            Email: AntonioReid@gmail.com
        </p2>
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
    )
}
export default ContactPage