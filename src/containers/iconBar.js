import { RiMenuLine, RiHome4Line, RiBook2Line } from "react-icons/ri";
import { GiMagnifyingGlass,  } from "react-icons/gi";


export default function IconBar() {
  return (
    <div className="sidebar-icon-bar">
      <RiHome4Line className="sidebar-icon"/>
      <RiMenuLine className="sidebar-icon" />
      <GiMagnifyingGlass className="sidebar-icon" />
      <RiBook2Line className="sidebar-icon" />
     
    </div>
  );
}
