import { GlobalOutlined } from '@ant-design/icons';
import { Button, Carousel, Image, Modal } from 'antd';
import React from 'react';
import { ProjectDetails } from './project.interface';

interface ProjectModalProps {
    projectData: ProjectDetails | undefined;
    setProjectData: any;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
    projectData,
    setProjectData,
}) => {
    return (
        <>
            <Modal
                title={projectData?.projectName}
                visible={projectData !== undefined}
                footer={null}
                onCancel={() => {
                    setProjectData(undefined);
                }}
            >
                <Carousel autoplay>
                    {projectData?.images.map((img, idx) => (
                        <div key={idx}>
                            <Image src={img} />
                        </div>
                    ))}
                </Carousel>

                <div className='project-modal-body-content'>
                    <h1 className='text-white text-xl'>
                        {projectData?.projectName}
                    </h1>
                    <p className='text-biscuit text-justify'>
                        {projectData?.projectDesc}
                    </p>
                    <div className='small-details'>
                        <small>
                            Project Duration: {projectData?.duration}.
                        </small>
                        <br />
                        <small>Tech Stack: {projectData?.techstack}.</small>
                        <br />
                        <small>Project Type: {projectData?.workDone}.</small>
                        <br />
                        <small>
                            Requirements: {projectData?.requirements}.
                        </small>
                        <br />
                        <Button
                            type='primary'
                            className='mt-4'
                            href={projectData?.hostedUrl}
                            target='_blank'
                        >
                            Visit Website
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ProjectModal;
