import styled from "styled-components";

export const ImageContainer = styled.div`
  background-image: url("https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/0661db1f-gottschalk-footer_12yo0yf000000000000000.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px;
  height: 320px;
  .q-image {
    margin-right: 20px;
  }

  @media only screen and (max-width: 767px) {
    height: 228px;
    background-image: url("https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/bbdfbb90-gottschalk-verstehen-clean-1370-1.jpg");
    padding: 10px 5px;
    .q-image {
      margin-right: 20px;
      height: 48px !important;
      width: 48px !important;
    }
  }
`;

export const Image = styled.image`
  width: 101px;
  height: 101px;
`;

export const Text = styled.div`
  font-size: 2rem;
  color: rgb(255, 255, 255);
  font-weight: bolder;
`;

export const SubText = styled.div`
  font-size: 1.4rem;
  color: rgb(255, 255, 255);
  font-weight: 400;
  font-style: normal;
`;

export const CustomFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(76, 77, 80, 1);
  height: 97px;
`;

export const FooterText = styled.div`
  background: rgba(76, 77, 80, 1);
  color: rgb(255, 255, 255);
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
`;
