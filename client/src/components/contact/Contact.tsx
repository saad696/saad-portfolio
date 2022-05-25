import { Button, Col, Form, Input, message, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useEffect, useState } from 'react';
import useWindowDimensions from '../../hooks/use-window-dimensions';
import { useForm } from '@formspree/react';
import { motion } from 'framer-motion';

import spherePng from '../../assets/sphere.png';
import handPng from '../../assets/hand.png';

const Contact = () => {
    const { width, height } = useWindowDimensions();
    const [state, handleSubmit] = useForm('xayvvyjn');

    const [contactForm] = Form.useForm();

    const [loading, setLoading] = useState(false);

    const submitContactForm = (values: {
        name: string;
        email: string;
        message: string;
    }) => {
        setLoading(true);
        handleSubmit(values)
            .then((res) => {
                if (res.response.status === 200) {
                    contactForm.resetFields();
                    message.success(
                        'Thanks for reaching out to me 👌, Will get back to you soon!',
                        4
                    );
                    setLoading(false);
                }
            })
            .catch((err) => {
                message.error('Something went wrong!');
                setLoading(false);
            });
    };

    return (
        <div className={`${width > 1025 ? 'h-screen px-40' : 'h-max'}`}>
            <div className='space-y-16'>
                <Row>
                    <Col xs={24} className='text-center'>
                        <h1 className='text-biscuit text-5xl text-stroke-primary'>
                            Have Something to say?
                        </h1>
                        <p className='text-white text-2xl'>
                            Let's have a chat!
                        </p>
                    </Col>
                </Row>
                <Row gutter={32} align='middle'>
                    <Col xs={24} md={12}>
                        <div className='flex justify-center'>
                            <span>
                                <div>
                                    <motion.div
                                        drag
                                        dragConstraints={{
                                            left: 0,
                                            right: 0,
                                            top: 0,
                                            bottom: 0,
                                        }}
                                        dragElastic={0.5}
                                        dragTransition={{
                                            bounceStiffness: 200,
                                            bounceDamping: 10,
                                        }}
                                        animate={{ y: [0, -30, 0] }}
                                        transition={{
                                            ease: 'easeInOut',
                                            repeat: Infinity,
                                            duration: 2,
                                        }}
                                    >
                                        <img
                                            src={spherePng}
                                            alt='sphere-img'
                                            width={300}
                                        />
                                    </motion.div>
                                    <img
                                        className='-mt-10'
                                        src={handPng}
                                        alt='hand-img'
                                        width={300}
                                    />
                                </div>
                            </span>
                        </div>
                    </Col>
                    <Col xs={24} md={12} className='w-max'>
                        <Form
                            form={contactForm}
                            name='contactForm'
                            layout='vertical'
                            onFinish={submitContactForm}
                        >
                            <Row className='px-10' align='middle'>
                                <Col xs={24}>
                                    <Form.Item
                                        label={
                                            <span className='text-biscuit'>
                                                Name
                                            </span>
                                        }
                                        name='name'
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please enter your name!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder='Your Name' />
                                    </Form.Item>
                                </Col>
                                <Col xs={24}>
                                    <Form.Item
                                        label={
                                            <span className='text-biscuit'>
                                                Email
                                            </span>
                                        }
                                        name='email'
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please enter your email!',
                                            },
                                            {
                                                type: 'email',
                                                message:
                                                    'The input is not valid E-mail!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            placeholder='Your Email'
                                            type='email'
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24}>
                                    <Form.Item
                                        label={
                                            <span className='text-biscuit'>
                                                Message
                                            </span>
                                        }
                                        name='message'
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please enter your reason for contactinga!',
                                            },
                                        ]}
                                    >
                                        <TextArea
                                            placeholder='Your Message'
                                            rows={5}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} className='text-right'>
                                    <Button
                                        type='primary'
                                        htmlType='submit'
                                        loading={loading}
                                    >
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Contact;
