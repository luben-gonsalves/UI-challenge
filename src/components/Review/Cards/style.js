import styled from "styled-components";

export const CustomCard = styled.div`
  background: rgba(255, 255, 255, 1);
  border-style: solid;
  border-width: 1px;
  border-color: #dededd;
  border-radius: 0px;
  padding: 20px;
  height: 100%;
  width: 286px;
  .profileImage {
    border-radius: 50%;
    margin-bottom: 16px;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const CardText = styled.p`
  font-size: 16px;
`;

export const CardFooter = styled.div`
  font-size: 18px;
  font-weight: bolder;
`;
