import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from 'react-icons/gr';
import * as FcIcons from 'react-icons/fc';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        //icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Services',
        path: '/services',
        //icon: <GrIcons.GrServices />,
        cName: 'nav-text'
    },
    {
        title: 'FAQ',
        path: '/faqs',
        //icon: <FcIcons.FcFaq />,
        cName: 'nav-text'
    },
    {
        title: 'Education',
        path: '/educationforprofessionals',
        //icon: <FaIcons.FaBookReader />,
        cName: 'nav-text'
    },
]