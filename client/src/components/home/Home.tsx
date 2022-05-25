import { Button, Col, Row, Tooltip } from 'antd';
import { GithubFilled, LinkedinFilled } from '@ant-design/icons';
import { motion } from 'framer-motion';
import React from 'react';

import useWindowDimensions from '../../hooks/use-window-dimensions';

import img from '../../assets/portfolio.png';
import { LINKEDIN_URL, GITHUB_URL } from '../utils/functions';

const Home = () => {
    const { width, height } = useWindowDimensions();

    return (
        <>
            <Row className={`${width > 768 ? 'mt-24' : 'mt-20'}`}>
                <Col
                    xs={24}
                    className={`text-center ${
                        width > 768 ? 'space-y-10' : 'space-y-8'
                    }`}
                >
                    <p className='text-white text-xl'>Hi There,</p>
                    <h1
                        className={`text-white tracking-wide  ${
                            width > 768 ? 'text-6xl' : 'text-4xl'
                        }`}
                    >
                        I'm <span className='text-stroke-primary'>Saad </span>
                        Shaikh
                    </h1>
                    <h2
                        className={`text-biscuit tracking-wide  ${
                            width > 768 ? 'text-4xl' : 'text-2xl'
                        }`}
                    >
                        FullStack Developer
                    </h2>
                    <Button type='primary'>
                        <a
                            href='https://drive.google.com/file/d/1fv9BcyaXTuyh6s6zPusr_L780VImlYLT/view'
                            target='_blank'
                        >
                            View Resume
                        </a>
                    </Button>
                </Col>
            </Row>
            <Row className='text-right mr-3 mt-10'>
                <Col xs={24} className='space-y-4'>
                    <div>
                        <Tooltip placement='leftTop' title='LinkedIn'>
                            <a target='_blank' href={LINKEDIN_URL}>
                                <LinkedinFilled className='!text-biscuit text-2xl' />
                            </a>
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip placement='leftTop' title='Github'>
                            <a target='_blank' href={GITHUB_URL}>
                                <GithubFilled className='!text-biscuit text-2xl' />
                            </a>
                        </Tooltip>
                    </div>
                </Col>
            </Row>
            <div
                className={`flex justify-center ${
                    width > 768 ? '-mt-14' : '-mt-16'
                }`}
            >
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        ease: 'easeInOut',
                        repeat: Infinity,
                        duration: 2,
                    }}
                >
                    <img
                        src={img}
                        alt='home-image'
                        width={width > 768 ? '450' : '300'}
                    />
                </motion.div>
            </div>
        </>
    );
};

export default Home;
