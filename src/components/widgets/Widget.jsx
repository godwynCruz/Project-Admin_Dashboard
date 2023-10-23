import "./widget.scss"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Widget = ({ type }) => {
    let data;

    // temporary
    const amount = 100;
    const difference = 20;

    switch(type){
        case"user":
        data={
            title:"USERS",
            ismoney: false,
            link:"See all users",
            icon:<PersonIcon className="icon" style={{color: "crimson", backgroundColor:"rgba(255, 0, 0, 0.2"}}/>,
        };
        break;
        case"order":
        data={
            title:"ORDERS",
            ismoney: false,
            link:"view all orders",
            icon:<ShoppingCartIcon className="icon" style={{color: "golderod", backgroundColor:"rgba(218, 165, 32, 0.2"}}/>,
        };
        break;
        case"earning":
        data={
            title:"EARNINGS",
            ismoney: true,
            link:"View net earings",
            icon:<AttachMoneyIcon className="icon" style={{color: "green", backgroundColor:"rgba(0, 128, 0, 0.2"}}/>,
        };
        break;
        case"balance":
        data={
            title:"BALANCE",
            ismoney: true,
            link:"See details",
            icon:<AccountBalanceWalletIcon className="icon" style={{color: "purple", backgroundColor:"rgba(128, 0, 128, 0.2"}}/>,
        };
        break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.ismoney && "$"} {amount}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <TrendingUpIcon />
                    {difference} %
                </div>
            {data.icon}
            </div>
        </div>
    )
}

export default Widget