import Image from "next/image";
import {
  ContainerHeader,
  ContentHeader,
  ContentSelection,
  Exit,
  SelectionHeader,
  Separator,
  UseName,
} from "./styles";
import avatar from "../../../public/image/avatar.png";
import { GlobalContext } from "@/Contexts/GlobalContext";
import { useContext } from "react";

export const Header: React.FC<IHeader> = ({}) => {
  const { userData, formData, setAuthenticatedUser } =
    useContext(GlobalContext);

  return (
    <ContainerHeader>
      <ContentHeader
        style={{
          fontFamily: "'VikingStencil', sans-serif",
          color: "#fff",
          fontSize: "40px",
          gap: "80px",
        }}
      >
        Meu Time
        <SelectionHeader>
          <ContentSelection
            $isVisible={
              formData.country.name !== "" &&
              formData.country.name !== undefined
            }
          >
            {" "}
            {formData.country.image !== "" &&
              formData.country.image !== undefined && (
                <Image
                  src={formData.country.image}
                  width={30}
                  height={30}
                  alt={"country"}
                  priority
                />
              )}
            {formData.country.name}
          </ContentSelection>

          <ContentSelection
            $isVisible={
              formData.leagues.name !== "" &&
              formData.leagues.name !== undefined
            }
          >
            {" "}
            {formData.leagues.logo !== "" &&
              formData.leagues.logo !== undefined && (
                <Image
                  src={formData.leagues.logo}
                  width={30}
                  height={30}
                  alt={"league"}
                  priority
                />
              )}
            {formData.leagues.name}
          </ContentSelection>
          <ContentSelection
            $isVisible={
              formData.teams.name !== "" && formData.teams.name !== undefined
            }
          >
            {" "}
            {formData.teams.logo !== "" &&
              formData.teams.logo !== undefined && (
                <Image
                  src={formData.teams.logo}
                  width={30}
                  height={30}
                  alt={"teams"}
                  priority
                />
              )}
            {formData.teams.name}
          </ContentSelection>
        </SelectionHeader>
      </ContentHeader>
      <ContentHeader style={{ justifyContent: "end" }}>
        <Image src={avatar} width={30} height={30} alt={"Avatar"} priority />
        <UseName>{`${userData?.name} ${userData?.surname}`}</UseName>
        <Separator>|</Separator>
        <Exit onClick={() => setAuthenticatedUser(false)}>Sair</Exit>
      </ContentHeader>
    </ContainerHeader>
  );
};
