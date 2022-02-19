import styled from "styled-components";

export const Container = styled.div``;

export const BgContainer = styled.div`
  background-image: url("https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/6697c9d2-zdf-hero-image-woman-virto-m-titanium-v1.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 500px;
  position: relative;
  margin-bottom: 70px;
  @media only screen and (max-width: 767px) {
    height: 200px;
    margin-bottom: 0px;
  }
`;

export const CardContainer = styled.div`
  position: absolute;
  height: 418px;
  width: 49.4rem;
  left: 50%;
  top: 45.222222328186035px;
`;

export const Heading = styled.h1`
  font-size: 3.2rem;
  font-weight: bolder;
  margin-bottom: 40px;
`;

export const Percentage = styled.span`
  font-size: 4.5rem;
  color: rgb(89, 176, 47);
  font-weight: bolder;
`;

export const PercentageText = styled.span`
  font-size: 1.8rem;
  font-weight: bolder;
  width: 275px;
`;

export const ImageContainer = styled.div`
  background-image: ${(props) =>
    `url(
      ${props.url}
    )`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 510px;
  width: 100%;
`;

export const ImageTextContainer = styled.div`
  background: rgba(246, 246, 246, 1);
  padding: 40px 30px;
  height: 100%;
`;

export const Text = styled.div`
  font-weight: 400;
  font-family: Arial, sans-serif;
  font-size: 18px;
  color: rgb(0, 0, 0);
  background-color: rgba(255, 255, 255, 0);
  font-style: normal;
  margin-top: 30px;
`;

export const PointText = styled.div`
  font-weight: bolder;
  font-size: 1.8rem;
  margin-left: 10px;
  line-height: 1.2;
`;

export const SubText = styled.div`
  font-size: 1.4rem;
  color: rgb(0, 0, 0);
  font-style: normal;
  margin-top: 50px;
`;
