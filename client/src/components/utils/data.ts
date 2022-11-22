// images
import projectOneImg from '../../assets/pl1.png';
import projectTwoImg from '../../assets/pl2.png';
import projectThreeImg from '../../assets/pl3.png';
import projectFourImg from '../../assets/pl4.png';
import projectFiveImg from '../../assets/pl5.png';

// project screen shots
import nd1 from '../../assets/projects-ss/nd1.png';
import nd2 from '../../assets/projects-ss/nd2.png';
import nd3 from '../../assets/projects-ss/nd3.png';
import nd4 from '../../assets/projects-ss/nd4.png';
import nd5 from '../../assets/projects-ss/nd5.png';

import kbs1 from '../../assets/projects-ss/kbs1.png';
import kbs2 from '../../assets/projects-ss/kbs2.png';
import kbs3 from '../../assets/projects-ss/kbs3.png';
import kbs4 from '../../assets/projects-ss/kbs4.png';
import kbs5 from '../../assets/projects-ss/kbs5.png';

import ps1 from '../../assets/projects-ss/ps1.png';
import ps2 from '../../assets/projects-ss/ps2.png';
import ps3 from '../../assets/projects-ss/ps3.png';
import ps4 from '../../assets/projects-ss/ps4.png';
import ps5 from '../../assets/projects-ss/ps8.png';
import ps6 from '../../assets/projects-ss/ps6.png';
import ps7 from '../../assets/projects-ss/ps7.png';
import ps8 from '../../assets/projects-ss/ps5.png';

import gc1 from '../../assets/projects-ss/gc1.png';
import gc2 from '../../assets/projects-ss/gc2.png';
import gc3 from '../../assets/projects-ss/gc3.png';
import gc4 from '../../assets/projects-ss/gc4.png';
import gc5 from '../../assets/projects-ss/gc5.png';

export const experience = [
    {
        duration: '11/2020 - 06/2021',
        location: 'Mumbai, Maharastra',
        company: 'Sagar Tech Technical Solutions',
        role: 'Frontend Development Intern',
        jobDesc:
            'Developed user interfaces with modern JavaScript & CSS frameworks like React Js and MD Bootstrap, HTML and SCSS. Designed and Implemented web components across new and existing designs. Troubleshot and debugged code, ensuring browser compatibility. Gather and refine specifications and requirements based on technical needs.',
        websiteUrl: 'https://www.sagartech.co.in/',
        linkedInUrl:
            'https://www.linkedin.com/company/sagar-tech-technical-solutions/',
    },
    {
        duration: '07/2021 - 09/2021',
        location: 'Bangalore, Karnataka',
        company: 'Lirctek',
        role: 'React Js Developer',
        jobDesc:
            "Worked as frontend engineer on product named ETS (e-trucking-soft) which is a trucking management system. Worked closely with UI/UX and integrated several API's, bug fixing, making entire project responsive using React js and Ant Design. Worked on an entire module consisting of map plotting, graph plotting, time manipulation, data tables, forms etc. Tech used: React js, TypeScript, Ant Design, Moment js, GIT.",
        websiteUrl: 'http://www.etruckingsoft.com/',
        linkedInUrl: 'https://www.linkedin.com/company/lirctek/',
    },
    {
        duration: '12/2021 - Present',
        location: 'Mumbai, Maharastra',
        company: 'Trigyn Technologies',
        role: 'Associate Software Engineer',
        jobDesc:
            'Working on an Indian government project by digital india (DIC). A scholarship portal for PhD students, worked closely with the backend engineer and UI designer for developing the core frontend logic of the application in angular. Worked on several modules, bugs fixes, constant changing requirement and some custom API creation in strapi. Tech used: Typescript, Angular, Angular material, Ionic, Strapi,',
        websiteUrl: 'https://www.trigyn.com/',
        linkedInUrl: 'https://www.linkedin.com/company/trigyn-technologies/',
    },
    {
        duration: '03/2022 - 07/2022',
        location: 'Mumbai, Maharastra',
        company: 'Vocab Coderz',
        role: 'Frontend - Code Instructor',
        jobDesc:
            'Code Instructor teaching students front end technologies making them job ready. Technologies teaching: HTML5, CSS3, Bootstrap, Javascript, React js, Antd, Github, Typescript.',
        websiteUrl: null,
        linkedInUrl: 'https://www.linkedin.com/company/vocab-coderz',
    },
];

export const projectDetails = [
    {
        projectName: 'Al Nizami Darbar',
        projectDesc:
            'Developed an static restaurant website with four pages which are Home, About us, Menu, Contact us. Integrated Google Maps location, YouTube Video, Instagram Feed, Social Media Re-directs.',
        projectThumbnail: projectOneImg,
        duration: '3 Months',
        techstack: 'HTML5, CSS3, Javascript, MD Bootstrap',
        workDone: 'Frontend',
        requirements:
            'Static restaurant website with royal background theming and with social redirects.',
        images: [nd1, nd2, nd3, nd4, nd5],
        hostedUrl: 'https://alnizamidarbar.com/',
    },
    {
        projectName: 'Khooobsooorat',
        projectDesc:
            'Beauty products reviewing website. Products reviwed by influencers and then the reviwes is displayed on the website for the users. Also Latest products launch details with offers directly from the partnered brands.',
        projectThumbnail: projectTwoImg,
        duration: '3.5 Months',
        techstack: 'HTML5, SCSS, Javascript, JQuery, MD Bootstrap',
        workDone: 'Frontend',
        requirements:
            'ECommerce type project structure, login system, pixel perfect design conversion, lazy loading media etc.',
        images: [kbs1, kbs2, kbs3, kbs4, kbs5],
        hostedUrl: 'https://www.khooobsooorat.com/',
    },
    {
        projectName: 'E Trucking Soft',
        projectDesc:
            'E-Trucking Soft provides a web-based transportation management system. The system can be used for managing fleet operations, communication with drivers, get driving feedback like speeding, expense tracking and fuel logs, invoice generation and handling of preventive maintenance including inspections, and repairs. Customers can also post loads on different loadboards including Truckstop.com, DAT, and PostEverywhere. Additional features include e-logs, tracking, accounting and reports.',
        projectThumbnail: projectThreeImg,
        duration: '6 Months',
        techstack:
            'React Js, Typescript, Ant Design, Moment Js, React Leaflet Maps, GIT',
        workDone: 'Frontend',
        requirements:
            'bugs fixing, map plotting, graph plotting, time manipulation etc.',
        images: [],
        hostedUrl: 'https://ets.etruckingsoft.com/',
    },
    {
        projectName: 'Visvesvaraya PhD Scheme for Electronics & IT',
        projectDesc:
            'Ministry of Electronics & Information Technology (MeitY), Government of India has conceived a scheme to enhance the number of PhDs in the Electronic Design and Manufacturing (ESDM) and IT/IT enabled Services (ITES) sector. Cabinet Committee on Economic Affairs (CCEA) has approved the scheme over a period of nine years.',
        projectThumbnail: projectFourImg,
        duration: '6 Months',
        techstack: 'Typescript, Angular, Angular material, Ionic, Strapi, GIT',
        workDone: 'FullStack',
        requirements:
            'Core application logic development based on client requirements.',
        images: [ps1, ps2, ps3, ps4, ps5, ps6, ps7, ps8],
        hostedUrl: 'http://phduat.digitalindiacorporation.in/home',
    },
    {
        projectName: 'Genconnect Digital',
        projectDesc:
            'Genconnect Digital is a digital marketing firm for which I have developed the entire application using React, Strapi, MySql. Which is a completely dynamic website with entire blog fucntionality embedded in it.',
        projectThumbnail: projectFiveImg,
        duration: '3 Months',
        techstack: 'Typescript, React, Ant Design, Strapi, GIT, MySQL',
        workDone: 'FullStack',
        requirements:
            'Develop a website to showcase the bussiness on internet for a digital marketing agency',
        images: [gc1, gc2, gc3, gc4, gc5],
        hostedUrl: 'http://genconnectdigital.com/',
    },
];
