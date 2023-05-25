import { useContext, useEffect, useState } from "react";
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
import CustomButtons from "@/Components/Buttons";
import { GlobalContext } from "@/Contexts/GlobalContext";
import { getUsers } from "@/Services/football";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const Login: React.FC<ILogin> = ({}) => {
  const { token, setUserData, setToken, setAuthenticatedUser } =
    useContext(GlobalContext);
  const [valueInput, setValueInput] = useState<string>("");
  const [loadingButton, setLoadingButton] = useState(false);
  const router = useRouter();
  const autenticationUser = (token: string) => {
    setLoadingButton(true);
    if (valueInput === "" || valueInput === undefined) {
      return setAuthenticatedUser(false);
    }
    return getUsers(token)
      .then((res: any) => {
        setUserData({
          name: res?.response?.account?.firstname,
          surname: res?.response?.account?.lastname,
        });
        setAuthenticatedUser(res?.response?.subscription?.active === true);
        if (res?.response?.subscription?.active) {
          setTimeout(() => {
            router.push("/");
          }, 2000);
          return toast.success(
            "Usuário autenticado! Aguarde, você será redirecionado em breve"
          );
        }
        return toast.error("Erro ao autenticar usuário. Tente novamente!");
      })
      .catch(() => {
        setAuthenticatedUser(false);
        toast.error("Erro ao autenticar usuário. Tente novamente!");
      })
      .finally(() => setLoadingButton(false));
  };

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
              <InputForm
                onChange={({ target }) => {
                  setToken(target.value);
                  setValueInput(target.value);
                }}
                placeholder="Digite o token de acesso"
              />
            </ContentForms>
          </ContainerForm>
          <ButtonsActions>
            <CustomButtons
              loading={loadingButton}
              buttonDisabled={
                valueInput === "" || valueInput === undefined || loadingButton
              }
              onClick={(e) => {
                autenticationUser(valueInput);
              }}
              type="submit"
            >
              {"Entrar"}
            </CustomButtons>
          </ButtonsActions>
        </FormInput>
      </CardContainer>
    </WrapperLogin>
  );
};

export default Login;
