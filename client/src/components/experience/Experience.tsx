import {
    GlobalOutlined,
    LinkedinOutlined,
    LinkOutlined,
} from '@ant-design/icons';
import { Col, Row, Timeline } from 'antd';
import React from 'react';
import useWindowDimensions from '../../hooks/use-window-dimensions';
import { experience } from '../utils/data';

const Experience = () => {
    const { width, height } = useWindowDimensions();

    return (
        <div
            className={`flex justify-center items-center ${
                width > 1350 ? 'h-screen' : 'h-max'
            }`}
        >
            <Row className='text-center space-y-16' justify='center'>
                <Col xs={24}>
                    <h1 className=' text-biscuit text-5xl text-stroke-primary'>
                        My Experience
                    </h1>
                </Col>
                <Col xs={24} md={12} className={`${width < 900 && 'px-8'}`}>
                    <Timeline
                        mode='alternate'
                        className='!text-biscuit !text-base'
                    >
                        {experience.map((data, idx) => (
                            <Timeline.Item
                                key={idx}
                                label={
                                    <span className='text-white text-xs'>
                                        <p>{data.duration}</p>
                                        <p>{data.location}</p>
                                        <div className='space-x-5'>
                                            {data.websiteUrl && (
                                                <a
                                                    href={data.websiteUrl}
                                                    className='text-white text-lg'
                                                >
                                                    <GlobalOutlined />
                                                </a>
                                            )}
                                            {data.linkedInUrl && (
                                                <a
                                                    href={data.linkedInUrl}
                                                    className='text-white text-lg'
                                                >
                                                    <LinkedinOutlined />
                                                </a>
                                            )}
                                        </div>
                                    </span>
                                }
                            >
                                <h1
                                    className={`${
                                        width > 900 ? 'text-lg' : 'text-base'
                                    } text-white`}
                                >
                                    {data.role}
                                </h1>
                                <p className='text-sm text-white'>
                                    {data.company}
                                </p>
                                <p className='text-sm text-justify'>
                                    {data.jobDesc}
                                </p>
                            </Timeline.Item>
                        ))}
                    </Timeline>
                </Col>
            </Row>
        </div>
    );
};

export default Experience;
