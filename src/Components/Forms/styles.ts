import { styled } from "styled-components";

export const WrapForms = styled.div`
  width: 25%;
  margin-top: -20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContentForms = styled.div<IContentFormsStyle>`
  color: #fff;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: ${({ $isVisible }) =>
    $isVisible
      ? "opacity 2s linear"
      : "visibility 0s 0.5s, opacity 0.5s linear"};

  div {
    color: #000;
    font-size: 14px;
  }
`;

export const ResetSearchButton = styled.span`
  text-align: end;
  font-size: 20px;
  margin-top: 14px;
  color: #ff2323;
  cursor: pointer;
`;
