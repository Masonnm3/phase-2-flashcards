import { RiMenuLine, RiHome4Line, RiBook2Line, RiInformationLine, RiPhoneLine } from "react-icons/ri";
import { GiMagnifyingGlass  } from "react-icons/gi";
import { Link } from 'react-router-dom'


export default function IconBar({ setQuizMode, setAddQuestionsView }) {
  return (
    <div className="sidebar-icon-bar">
    <Link to='/'>
        <RiHome4Line className="sidebar-icon"  onClick={() => {
          setQuizMode(false);
          setAddQuestionsView(false);
        }}/>
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
  );
}
