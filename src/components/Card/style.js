import styled from "styled-components";

export const CustomCard = styled.div`
  background: rgba(246, 246, 246, 1);
  border-style: solid;
  border-width: 1px;
  border-color: #dededd;
  padding: 40px 45px;
  text-align: center;
  height: 100%;
  @media only screen and (max-width: 767px) {
    padding: 10px 20px;
    text-align: center;
    height: revert;
    .rectangle-logo {
      height: 53px;
      width: 101px;
    }
    .circle-logo {
      height: 53px;
      width: 53px;
    }
    .rating-logo {
      width: 90px;
      height: 17px;
    }
  }
`;

export const CardTitle = styled.h1`
  font-size: 3.4rem;
  font-weight: bolder;
`;

export const CardButton = styled.button`
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  border-style: none;
  border-radius: 5px;
  width: 100%;
  height: 56px;
  background: rgba(89, 176, 47, 1);
  color: #ffff;
  cursor: pointer;
  &:hover {
    background: rgba(73, 167, 36, 1);
    box-shadow: none;
    color: #fff;
  }
`;

export const Rating = styled.p`
  font-weight: 400;
  font-size: 16px;
  font-weight: bolder;
  align-self: start;
`;
