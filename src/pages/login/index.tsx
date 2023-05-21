import { useState } from "react";
import logoImg from "../../../public/image/logo.png";
import Image from "next/image";
import WrapperLogin, {
  ButtonSubmit,
  ButtonsActions,
  CardContainer,
  ContainerForm,
  ContentForms,
  FormInput,
  FormTitle,
  InputForm,
  Logo,
} from "./styles";
import Buttons from "@/Components/Buttons";

const Login: React.FC<ILogin> = ({}) => {
  const [loadingButton, setLoadingButton] = useState(false);
  return (
    <WrapperLogin>
      <CardContainer>
        <Logo>
          <Image src={logoImg} alt={"Logo"} priority />
        </Logo>
        <FormTitle>Token</FormTitle>
        <FormInput>
          <ContainerForm>
            <ContentForms>
              <InputForm placeholder="Digite o token de acesso" />
            </ContentForms>
          </ContainerForm>
          <ButtonsActions>
            <Buttons
              loading={loadingButton}
              disabled={loadingButton}
              onClick={(e) => {
                e.preventDefault();
                setLoadingButton(true);
                setTimeout(() => {
                  setLoadingButton(false);
                }, 2000);
              }}
              type="submit"
            >
              {"Entrar"}
            </Buttons>
          </ButtonsActions>
        </FormInput>
      </CardContainer>
    </WrapperLogin>
  );
};

export default Login;
