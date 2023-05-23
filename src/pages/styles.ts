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
  display: flex;
  justify-content: center;
  border-radius: 20px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.24);
  box-shadow: 0 25px 20px -20px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.06);
`;

export default TemplateMain;
