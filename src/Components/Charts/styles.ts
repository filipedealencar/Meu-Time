import { styled } from "styled-components";

export const MainChart = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentCharts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding-top: 34px;
  padding-bottom: 34px;
  width: 100%;
  height: 100%;
`;

export const LabelChart = styled.label`
  color: rgba(244, 244, 245, 0.9);
  font-weight: 300;
  line-height: 1;
`;
