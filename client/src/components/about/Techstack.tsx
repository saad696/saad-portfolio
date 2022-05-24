import { List, Card, Tooltip } from 'antd';
import React from 'react';
import useWindowDimensions from '../../hooks/use-window-dimensions';
import { backend, frontend, tools } from './techstack-images';
import { motion } from 'framer-motion';

const Techstack = () => {
    const { width, height } = useWindowDimensions();

    return (
        <div className='space-y-16'>
            <h1 className='text-xl text-white'>
                Technologies Im Familiar With
            </h1>
            <div className='stack space-y-10'>
                <div className='frontend'>
                    <p
                        className={`${
                            width > 900 ? 'text-lg' : 'text-base'
                        } text-biscuit`}
                    >
                        Frontend
                    </p>
                    <List
                        grid={{ gutter: 12, xs: 6, md: 11 }}
                        className='flex justify-center'
                        dataSource={frontend}
                        renderItem={(item) => (
                            <List.Item>
                                <motion.div whileHover={{ y: -10 }}>
                                    <Tooltip
                                        title={item.title}
                                        placement='bottom'
                                    >
                                        <img
                                            src={item.url}
                                            alt={item.title}
                                            width='40'
                                        />
                                    </Tooltip>
                                </motion.div>
                            </List.Item>
                        )}
                    />
                </div>
                <div className='backend'>
                    <p
                        className={`${
                            width > 900 ? 'text-lg' : 'text-base'
                        } text-biscuit`}
                    >
                        Backend
                    </p>
                    <List
                        grid={{ gutter: 12, xs: 6, md: 11 }}
                        className='flex justify-center'
                        dataSource={backend}
                        renderItem={(item) => (
                            <List.Item>
                                <motion.div whileHover={{ y: -10 }}>
                                    <Tooltip
                                        title={item.title}
                                        placement='bottom'
                                    >
                                        <img
                                            src={item.url}
                                            alt={item.title}
                                            width='40'
                                        />
                                    </Tooltip>
                                </motion.div>
                            </List.Item>
                        )}
                    />
                </div>
                <div className='tools'>
                    <p
                        className={`${
                            width > 900 ? 'text-lg' : 'text-base'
                        } text-biscuit`}
                    >
                        Tools
                    </p>
                    <List
                        grid={{ gutter: 12, xs: 6, md: 11 }}
                        className='flex justify-center'
                        dataSource={tools}
                        renderItem={(item) => (
                            <List.Item>
                                <motion.div whileHover={{ y: -10 }}>
                                    <Tooltip
                                        title={item.title}
                                        placement='bottom'
                                    >
                                        <img
                                            src={item.url}
                                            alt={item.title}
                                            width='40'
                                        />
                                    </Tooltip>
                                </motion.div>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default Techstack;
