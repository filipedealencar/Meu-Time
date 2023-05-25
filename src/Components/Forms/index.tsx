import { GlobalContext } from "@/Contexts/GlobalContext";
import { ContentForms, ResetSearchButton, WrapForms } from "./styles";
import Select from "react-select";
import { useContext, useEffect, useState } from "react";
import { getLeagues, getTeams } from "@/Services/football";
import toast from "react-hot-toast";

export const Forms: React.FC<IForms> = ({ placeholder, session }) => {
  const { formData, token, setFormData } = useContext(GlobalContext);
  const [leagues, setLeagues] = useState([]);
  const [teams, setTeams] = useState([]);
  const daylyLimitMsg =
    "You have reached the request limit for the day, Go to https://dashboard.api-football.com to upgrade your plan.";

  useEffect(() => {
    if (formData.seasons.value !== undefined) return;

    setLeagues([]);
    setTeams([]);
  }, [formData.seasons.value]);

  return (
    <WrapForms>
      <ContentForms
        $isVisible={
          formData.country.name !== "" && formData.country.name !== undefined
        }
      >
        Selecione uma temporada
        <Select
          placeholder={placeholder}
          options={session?.map((e) => {
            return { value: e, label: e };
          })}
          onChange={(e) => {
            setFormData((state) => {
              return {
                ...state,
                seasons: { label: e?.label, value: e?.value },
              };
            });

            getLeagues(token, formData.country.name, String(e?.value)).then(
              (res: any) => {
                if (res?.errors.requests === daylyLimitMsg) {
                  return toast.error(
                    "Você atingiu o limite de solicitações diárias. Tente novamente mais tarde"
                  );
                }
                return setLeagues(
                  res?.response.map((item: any) => {
                    return {
                      id: item?.league?.id,
                      name: item?.league?.name,
                      type: item?.league?.type,
                      logo: item?.league?.logo,
                    };
                  })
                );
              }
            );
          }}
        />
      </ContentForms>
      <ContentForms
        $isVisible={
          formData.country.name !== "" && formData.seasons.value !== undefined
        }
      >
        Selecione uma Liga
        <Select
          placeholder={placeholder}
          options={leagues?.map((e: any) => {
            return {
              id: e?.id,
              value: e?.name,
              label: e?.name,
              type: e?.type,
              logo: e?.logo,
            };
          })}
          onChange={(e) => {
            setFormData((state) => {
              return {
                ...state,
                leagues: {
                  id: e?.id,
                  logo: e?.logo,
                  name: e?.label,
                  type: e?.type,
                },
              };
            });

            getTeams(
              token,
              String(e?.id),
              String(formData?.seasons?.value)
            ).then((res: any) => {
              if (res?.errors.requests === daylyLimitMsg) {
                return toast.error(
                  "Você atingiu o limite de solicitações diárias. Tente novamente mais tarde"
                );
              }
              return setTeams(
                res?.response.map((item: any) => {
                  return {
                    id: item?.team?.id,
                    name: item?.team?.name,
                    code: item?.team?.code,
                    logo: item?.team?.logo,
                  };
                })
              );
            });
          }}
        />
      </ContentForms>
      <ContentForms
        $isVisible={
          formData.country.name !== "" &&
          formData.seasons.value !== undefined &&
          formData.leagues.name !== ""
        }
      >
        Selecione um Time
        <Select
          placeholder={placeholder}
          options={teams?.map((e: any) => {
            return {
              id: e?.id,
              value: e?.name,
              label: e?.name,
              type: e?.type,
              logo: e?.logo,
            };
          })}
          onChange={(e) => {
            setFormData((state) => {
              return {
                ...state,
                teams: {
                  id: e?.id,
                  logo: e?.logo,
                  name: e?.label,
                },
              };
            });
          }}
        />
      </ContentForms>
    </WrapForms>
  );
};
