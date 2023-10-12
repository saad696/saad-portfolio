import { DownOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";
import useWindowDimensions from "../../hooks/use-window-dimensions";
import { Techstack } from "../index";

const About = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div
      className={`${
        width > 1350 ? "h-screen" : "h-max"
      } flex justify-center items-center`}
    >
      <span className="space-y-16">
        <Row justify="center">
          <Col xs={22} md={12} className="text-center space-y-16">
            <div>
              <h1 className="text-biscuit text-5xl text-stroke-primary">
                Bit About Me
              </h1>
            </div>
            <p className={`text-biscuit text-xl leading-6 text-justify`}>
              Experienced Full Stack Developer with a proven track record of 3
              years in diverse technology stacks, including MERN and MEAN.
              Flourished in both startup and MNC settings, showcasing effective
              leadership through team leadership, client engagement, and the
              consistent delivery of robust solutions.
            </p>
          </Col>
        </Row>
        <Row className="flex justify-center">
          <Col xs={22} md={12} className="text-white text-center">
            <Techstack />
          </Col>
        </Row>
      </span>
    </div>
  );
};

export default About;
