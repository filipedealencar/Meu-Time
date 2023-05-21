import styled from "styled-components";

const TemplateMain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1 1;
  margin: 36px 73px 0px;
`;

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
`;

export const ContentHome = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const HomeCard = styled.div`
  border-radius: 20px;
  background: #fff;
`;

export default TemplateMain;
