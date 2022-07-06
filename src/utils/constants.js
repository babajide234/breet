// import' Property 1=Bulk, Property 2=Category'

import { 
    BsFillGridFill,
    BsFillCreditCard2BackFill,
    BsGraphUp,
    BsFillFileEarmarkTextFill,
    BsClockHistory,
    BsFillQuestionCircleFill,
    BsFillGearFill
} from 'react-icons/bs';
import { RiBitCoinLine } from "react-icons/ri";
import { FaEthereum } from "react-icons/fa";
import { SiLitecoin } from "react-icons/si";
export const menu = [
    {
        name: 'Dashboard',
        path: '/',
        icon: <BsFillGridFill/>,
    },
    {
        name: 'Withdrawal',
        path: '/',
        icon: <BsFillCreditCard2BackFill/>,
    },
    {
        name: 'Rate Calculator',
        path: '/',
        icon: <BsGraphUp/>,
    },
    {
        name: 'Cryto trade History',
        path: '/',
        icon: <BsFillFileEarmarkTextFill/>,
    },
    {
        name: 'Withdrawal History',
        path: '/',
        icon: <BsClockHistory/>,
    },
    {
        submenu: [
            {
                name: 'Support',
                path: '/',
                icon: <BsFillQuestionCircleFill/>,
            },
            {
                name: 'Settings',
                path: '/settings',
                icon: <BsFillGearFill/>,
            }
        ]
    }
]

export const coins =[
    {
        name: 'Bitcoin',
        symbol: 'BTC',
        amount: '26,452.00',
        currency: 'ngn | ghs',
        currencySymbol: '$',
        icon:<RiBitCoinLine/>
    },
    {
        name: 'Ethereum',
        symbol: 'ETH',
        amount: '19,093.93',
        currency: 'ngn | ghs',
        currencySymbol: '$',
        icon:<FaEthereum/>
    },
    {
        name: 'Litecoin',
        symbol: 'LTC',
        amount: '773',
        currency: 'ngn | ghs',
        currencySymbol: '$',
        icon:<SiLitecoin/>
    },
]