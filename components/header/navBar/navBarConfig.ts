import { MdEvent } from "react-icons/md";

import { FiPackage } from "react-icons/fi";
import { GrTask } from "react-icons/gr";
import {IconType} from "react-icons";
import { GoOrganization } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
type natItemsType =
    {
        menuId:number,
        menuName:string,
        menuItemsType:number,
        menuItems:
            {
            name:string,
            href:string,
            src:string | '',
            description:string | '',
            logo:IconType  | undefined
        }[]

    }[]



export const navItems:natItemsType = [
    {
        menuId:1,
        menuName:'Services',
        menuItemsType:0,
        menuItems:[
            {
                name:'Events',
                href:'/',
                src:'',
                description:'',
                logo:MdEvent
            },
            {
                name:'Packages',
                href:'/',
                src:'',
                description:'',
                logo:FiPackage
            },
            {
                name:'Event Planner',
                href:'/',
                src:'',
                description:'',
                logo:GrTask
            }
        ]
    },
    {
        menuId:2,
        menuName:'Promotions',
        menuItemsType:1,
        menuItems:[
            {
            name:'CaterStation Main Menu',
            href:'/',
            src:'https://img.freepik.com/free-vector/beautiful-food-menu-design-template_23-2149061881.jpg',
            description:'Caterstation presents a wide range of exclusive promotions and special offers crafted to enhance your event experience.\n' +
                'Discover these offers so that you can elevate your event by saving more!',
                logo:undefined
            },

        ]


    },
    {
        menuId:3,
        menuName:'About',
        menuItemsType:0,
        menuItems:[
            {
                name:'About Us',
                href:'https://www.google.com',
                src:'',
                description:'',
                logo:GoOrganization
            },
            {
                name:'Contact Us',
                href: '/',
                src:'',
                description:'',
                logo:IoCallOutline
            }
        ]
    }
]

