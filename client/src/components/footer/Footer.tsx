import { LinkedinFilled, GithubFilled } from '@ant-design/icons';
import { Col, Row, Tooltip } from 'antd';
import React from 'react';
import { LINKEDIN_URL, GITHUB_URL } from '../utils/functions';


const Footer = () => {
    return (
        <>
            <Row justify='center' className='py-16 space-y-8'>
                <Col xs={24} className='text-center space-x-10'>
                    <Tooltip placement='left' title='LinkedIn'>
                        <a target='_blank' href={LINKEDIN_URL}>
                            <LinkedinFilled className='!text-biscuit text-2xl' />
                        </a>
                    </Tooltip>

                    <Tooltip placement='right' title='Github'>
                        <a target='_blank' href={GITHUB_URL}>
                            <GithubFilled className='!text-biscuit text-2xl' />
                        </a>
                    </Tooltip>
                </Col>
                <Col xs={24} className='text-biscuit text-center'>
                    <p>Thanks For Visiting!</p>
                    <p>Saad Shaikh - {new Date().getFullYear()}</p>
                </Col>
            </Row>
        </>
    );
};

export default Footer;
