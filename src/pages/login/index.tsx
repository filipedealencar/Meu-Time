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

const Login: React.FC<ILogin> = ({}) => {
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
            <ButtonSubmit type="submit">Entrar</ButtonSubmit>
          </ButtonsActions>
        </FormInput>
      </CardContainer>
    </WrapperLogin>
  );
};

export default Login;
