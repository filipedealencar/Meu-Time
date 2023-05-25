import { styled } from "styled-components";

const WrapperLogin = styled.section`
  align-items: center;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  justify-content: center;
  height: 100vh;
  background: rgb(2, 0, 36);
`;
export const CardContainer = styled.div`
  height: auto;
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  img {
    width: 250px;
    height: 200px;
  }
`;

export const FormTitle = styled.h1`
  font-size: 1.625rem;
  line-height: 1.5;
  margin-bottom: 0;

  @media only screen and (max-width: 500px) {
    text-align: center;
  }
`;

export const FormInput = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContentForms = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 500px) {
    align-items: center;
  }
`;

export const InputForm = styled.input`
  border: 1px solid #24292b;
  border-radius: 4px;
  height: 40px;
  padding: 0 12px;
  transition: border-color 0.3s ease-in-out;

  @media only screen and (max-width: 500px) {
    width: 60%;
  }
`;

export const ButtonsActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  @media only screen and (max-width: 500px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ButtonSubmit = styled.button`
  align-items: center;
  background: #24292b;
  border-radius: 4px;
  color: #fff;
  display: inline-flex;
  font-size: 0.75rem;
  height: 40px;
  justify-content: center;
  padding: 0 18px;
  cursor: pointer;

  @media only screen and (max-width: 500px) {
    width: 67%;
    height: 55px;
    font-size: 18px;
  }
`;

export default WrapperLogin;
