import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ViewListIcon from '@mui/icons-material/ViewList';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return(
    <div className="navbar">
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="Search..." />
                <SearchIcon />
            </div>
            <div className="items">
                <div className="item">
                    <LanguageIcon className="icon"/> English
                </div>
                <div className="item">
                    <DarkModeIcon className="icon" onClick={() => dispatch({type:"TOGGLE"})}/> 
                </div>
                <div className="item">
                    <FullscreenIcon className="icon"/> 
                </div>
                <div className="item">
                    <NotificationsIcon className="icon"/> 
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <ChatBubbleIcon className="icon"/>
                    <div className="counter">2</div> 
                </div>
                <div className="item">
                    <ViewListIcon className="icon"/> 
                </div>
                <div className="item">
                    <img 
                        src="https://images.pexels.com/photos/3824771/pexels-photo-3824771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="" 
                        className="avatar"/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Navbar;