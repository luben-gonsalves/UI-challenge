import React from "react";
import { Col, Row } from "antd";
import { CardFooter, CardText, CustomCard } from "./style";

const Cards = () => {
  return (
    <Row justify="center" gutter={[16, 16]}>
      <Col xl={8} lg={8} md={8} sm={24} xs={24}>
        <CustomCard>
          <img
            src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/aa7c9767-brochure-woman-4_104g04g000000000000000.jpg"
            height="80px"
            width="80px"
            alt="profile"
            className="profileImage"
          />

          <CardText className="mb-40">
            Sehr netter Kontakt und super kompetent. Sie nehmen sich wirklich
            viel Zeit. Immer wieder Geers.
          </CardText>
          <CardFooter>
            <div className="mb-8">Birgit M.</div>
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/bc99e837-geers-gold-stars-4-7_104800r000000000000000.png"
              width="150px"
              height="26px"
              alt="stars"
            />
          </CardFooter>
        </CustomCard>
      </Col>
      <Col xl={8} lg={8} md={8} sm={24} xs={24}>
        <CustomCard>
          <img
            src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/5552e3b1-man-review-2_104g04g000000000000000.jpg"
            height="80px"
            width="80px"
            alt="profile"
            className="profileImage"
          />
          <CardText>
            Freundliche und vor allem kompetente Beratung. Seit 3 Tagen nehme
            ich die Welt und ihre Geräusche wieder wahr. Jetzt wird hören
            gelernt.
          </CardText>
          <CardFooter>
            <div className="mb-8">Thomas R.</div>
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/186c146e-gold-stars-customer-review-5_104800r000000000000000.png"
              width="150px"
              height="26px"
              alt="stars"
            />
          </CardFooter>
        </CustomCard>
      </Col>
      <Col xl={8} lg={8} md={8} sm={24} xs={24}>
        <CustomCard>
          <img
            src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/3e74a3fe-woman-review-1_104g04g000000000000000.jpg"
            height="80px"
            width="80px"
            alt="profile"
            className="profileImage"
          />
          <CardText>
            Ich kann nur sagen, ich bin begeistert. Handhabung, Klang, Qualität
            und Funktion sind top. Eine gute Investition für mehr Lebensfreude!
          </CardText>
          <CardFooter>
            <div className="mb-8">Susanne D.</div>
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/7e3b843c-gold-stars-customer-review-4_104800r000000000000000.png"
              width="150px"
              height="26px"
              alt="stars"
            />
          </CardFooter>
        </CustomCard>
      </Col>
    </Row>
  );
};

export default Cards;
