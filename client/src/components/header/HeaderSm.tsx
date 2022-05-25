import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Menu } from 'antd';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { variantsForMenu, variantsForMenuItem } from './framer.variants';

const HeaderSm = () => {
    const [visible, setVisible] = useState(false);
    const [menuLink, setMenuLink] = useState<{ menu: string; active: boolean }>(
        { menu: 'home', active: true }
    );

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const checkMenuClicked = (menuName: string) => {
        switch (menuName) {
            case 'home':
                setMenuLink({
                    menu: 'home',
                    active: true,
                });
                setVisible(false);
                break;
            case 'about':
                setMenuLink({
                    menu: 'about',
                    active: true,
                });
                setVisible(false);
                break;
            case 'exp':
                setMenuLink({
                    menu: 'exp',
                    active: true,
                });
                setVisible(false);
                break;
            case 'project':
                setMenuLink({
                    menu: 'project',
                    active: true,
                });
                setVisible(false);
                break;
            case 'contact':
                setMenuLink({
                    menu: 'contact',
                    active: true,
                });
                setVisible(false);
                break;

            default:
                break;
        }
    };

    return (
        <>
            <motion.nav animate={visible ? 'open' : 'closed'}>
                <nav className='flex justify-between items-center'>
                    <div className='logo'>
                        <h1 className='uppercase water-brush text-4xl cursor-pointer text-biscuit p-3 !mb-0'>
                            sss
                        </h1>
                    </div>
                    <div>
                        <Button
                            icon={<MenuOutlined className='text-center' />}
                            type='text'
                            onClick={showDrawer}
                        >
                            <span className='barsBtn'></span>
                        </Button>
                        <Drawer
                            placement='right'
                            width='60%'
                            closable={false}
                            onClose={onClose}
                            visible={visible}
                        >
                            <Menu mode='vertical'>
                                <motion.ul variants={variantsForMenu}>
                                    <motion.li
                                        variants={variantsForMenuItem}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Menu.Item key='home'>
                                            <Button
                                                href='#home'
                                                type='link'
                                                className={
                                                    menuLink.menu === 'home' &&
                                                    menuLink.active
                                                        ? 'active'
                                                        : 'in-active'
                                                }
                                                onClick={() => {
                                                    checkMenuClicked('home');
                                                }}
                                            >
                                                Home
                                            </Button>
                                        </Menu.Item>
                                    </motion.li>

                                    <motion.li
                                        variants={variantsForMenuItem}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Menu.Item key='about'>
                                            <Button
                                                href='#about'
                                                type='link'
                                                className={
                                                    menuLink.menu === 'about' &&
                                                    menuLink.active
                                                        ? 'active'
                                                        : 'in-active'
                                                }
                                                onClick={() => {
                                                    checkMenuClicked('about');
                                                }}
                                            >
                                                About
                                            </Button>
                                        </Menu.Item>
                                    </motion.li>

                                    <motion.li
                                        variants={variantsForMenuItem}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Menu.Item key='exp'>
                                            <Button
                                                href='#exp'
                                                type='link'
                                                className={
                                                    menuLink.menu === 'exp' &&
                                                    menuLink.active
                                                        ? 'active'
                                                        : 'in-active'
                                                }
                                                onClick={() => {
                                                    checkMenuClicked('exp');
                                                }}
                                            >
                                                Experience
                                            </Button>
                                        </Menu.Item>
                                    </motion.li>

                                    <motion.li
                                        variants={variantsForMenuItem}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Menu.Item key='project'>
                                            <Button
                                                href='#projects'
                                                type='link'
                                                className={
                                                    menuLink.menu ===
                                                        'project' &&
                                                    menuLink.active
                                                        ? 'active'
                                                        : 'in-active'
                                                }
                                                onClick={() => {
                                                    checkMenuClicked('project');
                                                }}
                                            >
                                                Projects
                                            </Button>
                                        </Menu.Item>
                                    </motion.li>

                                    <motion.li
                                        variants={variantsForMenuItem}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Menu.Item key='contact'>
                                            <Button
                                                href='#contact'
                                                type='link'
                                                className={
                                                    menuLink.menu ===
                                                        'contact' &&
                                                    menuLink.active
                                                        ? 'active'
                                                        : 'in-active'
                                                }
                                                onClick={() => {
                                                    checkMenuClicked('contact');
                                                }}
                                            >
                                                Contact
                                            </Button>
                                        </Menu.Item>
                                    </motion.li>
                                </motion.ul>
                            </Menu>
                        </Drawer>
                    </div>
                </nav>
            </motion.nav>
        </>
    );
};

export default HeaderSm;
