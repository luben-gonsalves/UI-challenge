import { Col, Row } from "antd";
import React from "react";
import { FlexCol, FlexColCenter, FlexRow } from "../UIElements";
import {
  CustomFooter,
  FooterText,
  ImageContainer,
  SubText,
  Text,
} from "./style";

const Footer = () => {
  return (
    <>
      <ImageContainer>
        <Row justify="center">
          <Col lg={22} xl={22} md={22} sm={22} xs={22}>
            <FlexRow>
              <img
                src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/ec027519-geers-green-quotation-marks_102x02t000000000000000.png"
                alt="Quote"
                width="101px"
                height="101px"
                className="q-image"
              />
              <FlexCol>
                <Text>GEERS, DIE VERSTEHEN </Text>
                <Text>WAS VOM HÖREN.</Text>
                <SubText>Thomas Gottschalk</SubText>
              </FlexCol>
            </FlexRow>
          </Col>
        </Row>
      </ImageContainer>
      <CustomFooter>
        <FooterText>Impressum | Datenschutz</FooterText>
        <FooterText>Copyright © 2021 Sonova AG.All rights reserved.</FooterText>
        <FooterText>Gütesiegel für den GEERS Online Shop</FooterText>
      </CustomFooter>
    </>
  );
};

export default Footer;
