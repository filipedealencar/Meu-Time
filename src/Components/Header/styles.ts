import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 80%;
  display: flex;
  height: 50px;
  justify-content: space-between;
  margin: 20px 20px 0px 80px;
`;

export const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  height: 50px;

  align-items: center;
  gap: 8px;
`;

export const UseName = styled.span`
  cursor: pointer;
`;

export const Separator = styled.span``;

export const Exit = styled.span`
  cursor: pointer;
  color: #f74d4d;
`;

export const SelectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  font-size: 30px;
`;

export const ContentSelection = styled.div<IContentSelectionStyle>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: ${({ $isVisible }) =>
    $isVisible
      ? "opacity 2s linear"
      : "visibility 0s 0.5s, opacity 0.5s linear"};
`;
