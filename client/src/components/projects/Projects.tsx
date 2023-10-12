import { EyeFilled, GlobalOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Tooltip } from 'antd';
import Meta from 'antd/lib/card/Meta';
import ProjectModal from './ProjectModal';
import useWindowDimensions from '../../hooks/use-window-dimensions';
import { useState } from 'react';
import { truncate } from '../utils/functions';
import { projectDetails } from '../utils/data';
import { ProjectDetails } from './project.interface';
import { motion } from 'framer-motion';

const Projects = () => {
    const { width, height } = useWindowDimensions();
    const [projectData, setProjectData] = useState<ProjectDetails>();
    return (
        <div
            className={`flex justify-center items-center px-20 ${
                width > 1350 ? 'h-[1200px]' : 'h-max'
            }`}
        >
            <div className='space-y-16'>
                <Row className='text-center'>
                    <Col xs={24}>
                        <h1 className='text-biscuit text-5xl text-stroke-primary'>
                            My Projects
                        </h1>
                    </Col>
                </Row>
                <Row
                    gutter={32}
                    className={`${width < 768 ? 'space-y-10' : 'space-y-0'}`}
                >
                    {projectDetails.map((project, idx) => (
                        <Col
                            xs={24}
                            md={12}
                            lg={12}
                            xl={6}
                            key={idx}
                            className={`${
                                idx === 3 ? '!mt-5' : 'mt-0' || idx === 4 ? '!mt-5' : 'mt-0'
                            }`}
                        >
                            <motion.div
                                className='flex justify-center'
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 200 }}
                            >
                                <Card
                                    bordered={false}
                                    style={{ width: 300 }}
                                    cover={
                                        // image size 500 x 500 px
                                        <img
                                            alt={project.projectName}
                                            src={project.projectThumbnail}
                                        />
                                    }
                                    actions={[
                                        <Tooltip
                                            key='view'
                                            title='View Details'
                                            placement='bottom'
                                        >
                                            <Button
                                                type='link'
                                                onClick={() => {
                                                    setProjectData(project);
                                                }}
                                            >
                                                <EyeFilled />
                                            </Button>
                                        </Tooltip>,
                                        <Tooltip
                                            title='Visit Website'
                                            key='website'
                                            placement='bottom'
                                        >
                                            <Button
                                                type='link'
                                                href={project.hostedUrl}
                                            >
                                                <GlobalOutlined />
                                            </Button>
                                        </Tooltip>,
                                    ]}
                                >
                                    <Meta
                                        title={
                                            <h1
                                                className='text-white cursor-pointer text-sm'
                                                onClick={() => {
                                                    setProjectData(project);
                                                }}
                                            >
                                                {truncate(
                                                    project.projectName,
                                                    30
                                                )}
                                            </h1>
                                        }
                                        description={
                                            <small className='text-biscuit'>
                                                {truncate(project.projectDesc)}
                                            </small>
                                        }
                                    />
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
                <ProjectModal
                    projectData={projectData}
                    setProjectData={setProjectData}
                />
            </div>
        </div>
    );
};

export default Projects;
