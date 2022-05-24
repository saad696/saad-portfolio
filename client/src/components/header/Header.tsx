import { Button, PageHeader } from 'antd';
import { useState } from 'react';

import { motion } from 'framer-motion';

import headerStyles from './header.module.css';

interface HeaderProps {
    menuLink: { menu: string; active: boolean };
    setMenuLink: any;
}

const Header: React.FC<HeaderProps> = ({ menuLink, setMenuLink }) => {
    const [isAnimate, setIsAnimate] = useState(false);

    const checkMenuClicked = (menuName: string) => {
        switch (menuName) {
            case 'home':
                setMenuLink({
                    menu: 'home',
                    active: true,
                });
                break;
            case 'about':
                setMenuLink({
                    menu: 'about',
                    active: true,
                });
                break;
            case 'exp':
                setMenuLink({
                    menu: 'exp',
                    active: true,
                });
                break;
            case 'project':
                setMenuLink({
                    menu: 'project',
                    active: true,
                });
                break;
            case 'contact':
                setMenuLink({
                    menu: 'contact',
                    active: true,
                });
                break;

            default:
                break;
        }
    };

    return (
        <>
            <PageHeader
                className='site-page-header'
                title={
                    <div
                        className='cursor-pointer'
                        onMouseEnter={() => setIsAnimate(true)}
                        onMouseLeave={() => setIsAnimate(false)}
                    >
                        <motion.div
                            animate={{ y: isAnimate ? -120 : 30 }}
                            transition={{
                                duration: 0.3,
                                type: 'spring',
                                stiffness: 80,
                            }}
                        >
                            <h1 className='water-brush text-4xl text-biscuit'>
                                SSS
                            </h1>
                        </motion.div>
                        <motion.div
                            key={'2'}
                            animate={{
                                y: isAnimate ? -20 : 100,
                            }}
                            transition={{
                                duration: 0.3,
                                type: 'spring',
                                stiffness: 60,
                            }}
                        >
                            <h1
                                className={`water-brush text-4xl ${
                                    isAnimate
                                        ? headerStyles.animatedLogo
                                        : 'text-white'
                                }`}
                            >
                                Saad Salman Shaikh
                            </h1>
                        </motion.div>
                    </div>
                }
                backIcon={false}
                extra={[
                    <Button
                        key='1'
                        type='link'
                        href='#home'
                        className={
                            menuLink.menu === 'home' && menuLink.active
                                ? 'active'
                                : 'in-active'
                        }
                        onClick={() => {
                            checkMenuClicked('home');
                        }}
                    >
                        Home
                    </Button>,
                    <Button
                        key='2'
                        type='link'
                        href='#about'
                        className={
                            menuLink.menu === 'about' && menuLink.active
                                ? 'active'
                                : 'in-active'
                        }
                        onClick={() => {
                            checkMenuClicked('about');
                        }}
                    >
                        About
                    </Button>,
                    <Button
                        key='3'
                        type='link'
                        href='#exp'
                        className={
                            menuLink.menu === 'exp' && menuLink.active
                                ? 'active'
                                : 'in-active'
                        }
                        onClick={() => {
                            checkMenuClicked('exp');
                        }}
                    >
                        Experience
                    </Button>,
                    <Button
                        key='4'
                        type='link'
                        href='#projects'
                        className={
                            menuLink.menu === 'project' && menuLink.active
                                ? 'active'
                                : 'in-active'
                        }
                        onClick={() => {
                            checkMenuClicked('project');
                        }}
                    >
                        Projects
                    </Button>,
                    <Button
                        key='5'
                        type='link'
                        href='#contact'
                        className={
                            menuLink.menu === 'contact' && menuLink.active
                                ? 'active'
                                : 'in-active'
                        }
                        onClick={() => {
                            checkMenuClicked('contact');
                        }}
                    >
                        Contact
                    </Button>,
                ]}
            />
        </>
    );
};

export default Header;
