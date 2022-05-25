import { DownOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React from 'react';
import useWindowDimensions from '../../hooks/use-window-dimensions';
import { Techstack } from '../index';

const About = () => {
    const { width, height } = useWindowDimensions();

    return (
        <div
            className={`${
                width > 1025 ? 'h-screen' : 'h-max'
            } flex justify-center items-center`}
        >
            <span className='space-y-16'>
                <Row justify='center'>
                    <Col xs={22} md={12} className='text-center space-y-16'>
                        <div>
                            <h1 className='text-biscuit text-5xl text-stroke-primary'>
                                Bit About Me
                            </h1>
                        </div>
                        <p className={`text-biscuit text-base leading-6 `}>
                            Hey there 👋, nice to have you on my page. Well im a
                            fullstack developer with almost 2 years of
                            experience in development. Mostly having experience
                            in frontend development. In this short period I've
                            worked on several project with different
                            technologies by writing efficient and maintainable
                            code also been dealing with constant changing
                            requirements. Deadline oriented, logical thinker,
                            good listener and a fun person in general to work
                            with. Well I prefer coffee over tea typical as a
                            developer but seems atypical as an Indian guy 😅.
                        </p>
                    </Col>
                </Row>
                <Row className='flex justify-center'>
                    <Col xs={22} md={12} className='text-white text-center'>
                        <Techstack />
                    </Col>
                </Row>
            </span>
        </div>
    );
};

export default About;
