import React from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";
import * as GiIcons from "react-icons/gi";
import * as GrIcons from "react-icons/gr";
import * as TiIcons from "react-icons/ti";
import * as SiIcons from "react-icons/si";
import * as ImIcons from "react-icons/im";

export const SidebarData = [{
    title: 'Strona główna',
    path: '/',
    icon: < AiIcons.AiFillHome />,
    cName: 'nav-text'
},
{
    title: 'O mnie',
    path: '/AboutMe',
    icon: <ImIcons.ImProfile />,
    cName: 'nav-text'
},
{
    title: 'Diety',
    path: '/diet',
    icon: < GiIcons.GiKnifeFork />,
    cName: 'nav-text'
},
{
    title: 'Kontakt',
    path: '/contact',
    icon: < ImIcons.ImBubble />,
    cName: 'nav-text'
}
]