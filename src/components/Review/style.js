import styled from "styled-components";

export const Container = styled.div`
  background: rgba(246, 246, 246, 1);
  padding-top: 70px;
`;

export const Heading = styled.h1`
  font-weight: bolder;
  font-size: 3.2rem;
  margin-top: 70px;
  @media only screen and (max-width: 767px) {
    font-size: 26px;
  }
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  @media only screen and (max-width: 767px) {
    height: 120px;
    width: 120px;
  }
`;
