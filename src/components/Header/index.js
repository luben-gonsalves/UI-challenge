import React from "react";
import { Col, Row } from "antd";

import { ContactNumber, ContactText, Container } from "./style";

const Header = () => {
  return (
    <Container>
      <Row justify="center" align="middle" gutter={[0, 0]}>
        <Col lg={20} xl={20} md={20} sm={22} xs={22}>
          <Row justify="space-between" align="middle">
            <Col lg={18} xl={18} md={18} sm={6} xs={6}>
              <img
                src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/f496f71e-official-geers-logo_107s020000000000000000.png"
                alt="logo"
                className="logo"
              />
            </Col>
            <Col lg={6} xl={6} md={6} sm={12} xs={12}>
              <ContactText className="mobileHidden">
                Kostenlose Fachberatung
              </ContactText>
              <ContactNumber>030 3119 6940</ContactNumber>
              <ContactText className="mobileHidden">
                Mo - Fr &nbsp; 8 - 20 Uhr
              </ContactText>
              <ContactText className="mobileHidden">
                Sa &nbsp; 9 - 18 Uhr
              </ContactText>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
