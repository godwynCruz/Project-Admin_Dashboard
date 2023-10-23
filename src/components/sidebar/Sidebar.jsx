import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom"
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return(
    <div className="sidebar">
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">Godwinners</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/" style={{textDecoration:"none"}}>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Dashboard</span>
                </li>
                </Link>
                <p className="title">LISTS</p>
                <Link to="/users" style={{textDecoration:"none"}}>
                <li>
                    <PersonIcon className="icon" />
                    <span>Users</span>
                </li>
                </Link>
                <Link to="/products" style={{textDecoration:"none"}}>
                    <li>
                        <CategoryIcon className="icon" />
                        <span>Products</span>
                    </li>
                </Link>
                <li>
                    <RoomServiceIcon className="icon" />
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className="icon" />
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL LINKS</p>
                <li>
                    <SignalCellularAltIcon className="icon" />
                    <span>Statistics</span>
                </li>
                <li>
                    <NotificationsIcon className="icon" />
                    <span>Notification</span>
                </li>
                <p className="title">SERVICES</p>
                <li>
                    <MonitorHeartIcon className="icon" />
                    <span>System Health</span>
                </li>
                <li>
                    <DriveFileRenameOutlineIcon className="icon" />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className="icon" />
                    <span>Settings</span>
                </li>
                <p className="title">USERS</p>
                <li>
                    <AccountCircleIcon className="icon" />
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="icon" />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
        </div>
    </div>
    )
}

export default Sidebar;