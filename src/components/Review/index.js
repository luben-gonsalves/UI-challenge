import { Col, Row } from "antd";
import React from "react";
import { PrimaryButton } from "../UIElements";
import Cards from "./Cards";
import { Container, Heading, ProfileImage } from "./style";

const Review = () => {
  return (
    <Container>
      <Row justify="center">
        <Col lg={20} xl={20} md={22} sm={22} xs={22}>
          <Cards />

          <Row justify="center">
            <Col lg={16} xl={16} md={16} sm={24} xs={24}>
              <Heading className="mb-48">
                Einfach besser hören. In nur 3 Schritten.
              </Heading>
            </Col>
          </Row>

          <Row justify="center" className="mb-48">
            <Col lg={7} xl={7} md={7} sm={14} xs={14}>
              <ProfileImage
                src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/0e5efddc-step-1-desktop_100000005b05b01c000000.png"
                width="191px"
                height="191px"
                alt="profile"
              />
            </Col>
            <Col lg={7} xl={7} md={7} sm={14} xs={14}>
              <ProfileImage
                src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/d4b70dcc-lp-step2-better-hearing.jpg"
                width="191px"
                height="191px"
                alt="profile"
              />
            </Col>
            <Col lg={7} xl={7} md={7} sm={14} xs={14}>
              <ProfileImage
                src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/b7fc51df-step-3-desktop_100000005b05b01c000000.png"
                width="191px"
                height="191px"
                alt="profile"
              />
            </Col>
          </Row>

          <Row justify="center">
            <Col lg={8} xl={8} md={8} sm={24} xs={24}>
              <PrimaryButton className="mb-48">
                Beratungstermin vereinbaren
              </PrimaryButton>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Review;
