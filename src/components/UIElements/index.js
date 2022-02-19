import styled from "styled-components";

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

export const FlexRowCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexRowSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexColSpaceBetween = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PrimaryButton = styled.button`
  font-size: 1.8rem;
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
