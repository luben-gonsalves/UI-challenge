import React from "react";
import { Col, Row } from "antd";

import Card from "../Card";
import Review from "../Review";
import { FlexCol, FlexRow, PrimaryButton } from "../UIElements";

import {
  BgContainer,
  CardContainer,
  Container,
  Heading,
  ImageContainer,
  ImageTextContainer,
  Percentage,
  PercentageText,
  PointText,
  SubText,
  Text,
} from "./style";

const Content = () => {
  return (
    <Container>
      <BgContainer>
        <CardContainer className="mobileHidden ">
          <Card />
        </CardContainer>
      </BgContainer>

      <div className="mobileVisible mb-40">
        <Card />
      </div>

      <Row justify="center">
        <Col lg={20} xl={20} md={22} sm={22} xs={22}>
          <Heading>Das sagen Menschen mit Hörgerät:*</Heading>
          <Row className="mb-40" justify="center" gutter={[16]}>
            <Col lg={8} xl={8} md={8} sm={24} xs={24}>
              <FlexCol>
                <Percentage>97%</Percentage>
                <PercentageText>
                  erleben eine verbesserte Lebensqualität
                </PercentageText>
              </FlexCol>
            </Col>
            <Col lg={8} xl={8} md={8} sm={24} xs={24}>
              <FlexCol>
                <Percentage>95%</Percentage>
                <PercentageText>
                  empfinden Hörgeräte als wichtige Bereicherung im Beruf
                </PercentageText>
              </FlexCol>
            </Col>
            <Col lg={8} xl={8} md={8} sm={24} xs={24}>
              <FlexCol>
                <Percentage>82%</Percentage>
                <PercentageText>
                  gaben an, dass ihr Hörgerät besser oder wie erwartet
                  funktioniert
                </PercentageText>
              </FlexCol>
            </Col>
            <Col span={24}>
              <SubText> *EuroTrak-Studie 2018</SubText>
            </Col>
          </Row>

          <Row className="mb-48">
            <Col lg={12} xl={12} md={12} sm={24} xs={24}>
              <ImageContainer url="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/49437970-zdf-image-2.jpg"></ImageContainer>
            </Col>
            <Col lg={12} xl={12} md={12} sm={24} xs={24}>
              <ImageTextContainer>
                <Text>
                  10 Millionen Menschen leiden in Deutschland unter Hörverlust.
                  Meist erfolgt dieser schleichend und erschwert es Betroffenen
                  die Anzeichen rechtzeitig zu erkennen und zeitnah zu handeln.
                  Unbehandelt leiden oft Beziehungen, Gesundheit und Karriere.
                </Text>
                <Text>
                  Der Schritt zur ersten Hörhilfe ist zweifellos ein Großer.
                  Menschen mit Hörminderung zögern oft Jahre, bevor Sie sich für
                  ein Hörgerät entscheiden. Dabei sagen 82 Prozent, dass die
                  Erwartungen, die Sie an Ihr Hörgerät hatten, übertroffen
                  wurden.
                </Text>
                <Text>
                  Zwei von drei Hörgerätenutzern bereuen sogar nicht eher den
                  Schritt zur Hörhilfe gewagt zu haben.
                </Text>
              </ImageTextContainer>
            </Col>
          </Row>

          <Row justify="center" className="mb-48">
            <Col lg={8} xl={8} md={8} sm={24} xs={24}>
              <PrimaryButton>Hörgeräte unverbindlich Probetragen</PrimaryButton>
            </Col>
          </Row>

          <Row className="mb-70">
            <Col lg={12} xl={12} md={12} sm={24} xs={24}>
              <ImageTextContainer>
                <Text>
                  Bei GEERS steht der Mensch im Mittelpunkt. Seit 70 Jahren
                  begleiten wir Menschen mit Hörminderung auf dem Weg zum
                  „Wiederhören“.
                </Text>
                <Text>
                  In Deutschland sind wir mit über 740
                  Fachgeschäften Marktführer - kein anderes
                  Hörakustik-Unternehmen ist in Deutschland so gut vertreten.
                </Text>
                <Text>
                  Wir garantieren höchste Qualität, Zufriedenheit und Service.
                </Text>
              </ImageTextContainer>
            </Col>
            <Col lg={12} xl={12} md={12} sm={24} xs={24}>
              <ImageContainer url="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/b0c886af-zdf-image-geers-store-1.jpg"></ImageContainer>
            </Col>
          </Row>

          <Row className="mb-70" gutter={[, 40]}>
            <Col lg={12} xl={12} md={12} sm={24} xs={24}>
              <Row align="middle" gutter={[16, 32]}>
                <Col span={24}>
                  <FlexRow>
                    <img
                      src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/644a5b68-grey-tick-new_100z00z000000000000000.png"
                      width="35px"
                      height="35px"
                      alt="right"
                    />
                    <PointText>
                      Teil der Sonova Gruppe: weltweit Nr. 1 für innovative
                      Hörlosungen
                    </PointText>
                  </FlexRow>
                </Col>
                <Col span={24}>
                  <FlexRow>
                    <img
                      src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/644a5b68-grey-tick-new_100z00z000000000000000.png"
                      width="35px"
                      height="35px"
                      alt="right"
                    />
                    <PointText>
                      91,4 % Kundenzufriedenheit (mit sehr gut)
                    </PointText>
                  </FlexRow>
                </Col>
                <Col span={24}>
                  <FlexRow>
                    <img
                      src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/644a5b68-grey-tick-new_100z00z000000000000000.png"
                      width="35px"
                      height="35px"
                      alt="right"
                    />
                    <PointText>
                      91,2 % würden GEERS ihren Freunden oder Kollegen
                      weiterempfehlen
                    </PointText>
                  </FlexRow>
                </Col>
              </Row>
            </Col>
            <Col lg={12} xl={12} md={12} sm={24} xs={24}>
              <Row className="mb-40">
                <Col span={8}>
                  <img
                    src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/661e4500-geers-service-trust-symbol_103202t000000000000000.png"
                    alt=""
                    width="101"
                    height="101"
                  />
                </Col>
                <Col span={8}>
                  <img
                    src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/6e35485c-geers-best-price-trust-symbol_103202t000000000000000.png"
                    alt=""
                    width="101"
                    height="101"
                  />
                </Col>
                <Col span={8}>
                  <img
                    src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/ad67a67d-geers-satisfaction-trust-symbol_103202t000000000000000.png"
                    alt=""
                    width="101"
                    height="101"
                  />
                </Col>
              </Row>
              <PrimaryButton>Ja, ich will besser hören</PrimaryButton>
            </Col>
          </Row>
        </Col>
      </Row>

      <Review />
    </Container>
  );
};

export default Content;
