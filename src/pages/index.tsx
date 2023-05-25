import GridLayout from "react-grid-layout";
import TemplateMain, {
  ContainerHome,
  ContentForm,
  ContentHome,
  HomeCard,
} from "./styles";
import Charts from "@/Components/Charts";
import CustomTable from "@/Components/CustomTable";
import { createColumnHelper } from "@tanstack/react-table";
import { BadgePlayers } from "@/Components/CustomTable/BadgePlayers";
import { GlobalContext } from "@/Contexts/GlobalContext";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { Maps } from "@/Components/Maps";
import { Header } from "@/Components/Header";
import { Loading } from "@/Components/Loading";
import { Forms } from "@/Components/Forms";
import { getCountries, getSeasons } from "@/Services/football";

export const Home: React.FC = () => {
  const { token, formData, authenticatedUser, setFormData } =
    useContext(GlobalContext);
  const daylyLimitMsg =
    "You have reached the request limit for the day, Go to https://dashboard.api-football.com to upgrade your plan.";
  const [loadingRequest, setLoadinRequest] = useState(true);
  const [session, setSession] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setLoadinRequest(false);
    }, 3000);
  }, []);
  const layout = [
    { i: "a", x: 0, y: 0, w: 1.3, h: 3.2, static: true },
    { i: "b", x: 1.3, y: 0, w: 1.3, h: 3.2 },
    // { i: "c", x: 2, y: 0, w: 1, h: 2 },
    { i: "c", x: 3, y: 0, w: 1.4, h: 7.7 },
    { i: "d", x: 0, y: 1, w: 2.6, h: 4.5 },
  ];

  const data = [
    {
      subject: "Gols",
      A: 120,
      fullMark: 150,
    },
    {
      subject: "Gols Perdidos",
      A: 98,
      fullMark: 150,
    },
    {
      subject: "Penaltis",
      A: 86,
      fullMark: 150,
    },
    {
      subject: "Defesas",
      A: 85,
      fullMark: 150,
    },
  ];

  const data1 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const data2 = [
    {
      name: "4-2-3-1",
      Formações: 32,
    },
    {
      name: "3-4-1-2",
      Formações: 4,
    },
    {
      name: "3-4-2-1",
      Formações: 1,
    },
    {
      name: "4-3-1-2",
      Formações: 1,
    },
  ];
  const data3 = [
    {
      name: "0-15",
      total: 4,
      Porcentagem: 6.06,
    },
    {
      name: "16-30",
      total: 4,
      Porcentagem: 25.76,
    },
    {
      name: "31-45",
      total: 4,
      Porcentagem: 16.67,
    },
  ];

  const defaultData = [
    {
      Nome: {
        name: "N. Bishop",
        img: "https://media.api-sports.io/football/players/20319.png",
      },
      País: 10,
      Idade: 4,
    },
  ];

  const columnHelper = createColumnHelper<any>();

  const columns = [
    columnHelper.accessor((row) => row.Nome, {
      id: "Nome",
      cell: (info) => (
        <BadgePlayers img={info.getValue().img} name={info.getValue().name} />
      ),
      header: () => <span>Nome</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.Idade, {
      id: "Idade",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Idade</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("País", {
      header: () => "País",
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
  ];
  const defaultDataTwo: Person[] = [
    {
      Jogos: 20,
      Vitórias: 10,
      Derrotas: 4,
      Empates: 6,
    },
  ];

  const columnsTwo = [
    columnHelper.accessor((row) => row.Vitórias, {
      id: "Jogos",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Jogos</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.Vitórias, {
      id: "Vitórias",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Vitórias</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("Empates", {
      header: () => "Empates",
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("Derrotas", {
      header: () => <span>Derrotas</span>,
      footer: (info) => info.column.id,
    }),
  ];
  useEffect(() => {
    if (!authenticatedUser) {
      toast.error("Usuário não autenticado.");
      router.push("/login");
    }
  }, [authenticatedUser]);

  const getCurrentCountries = (name: string) => {
    return getCountries(token, name)
      .then((res: any) => {
        if (res?.errors.requests === daylyLimitMsg) {
          return toast.error(
            "Você atingiu o limite de solicitações diárias. Tente novamente mais tarde"
          );
        }
        console.log(res);
        setFormData((state) => {
          return {
            ...state,
            country: {
              code: res?.response?.[0]?.code,
              image: res?.response?.[0]?.flag,
              name: res?.response?.[0]?.name,
            },
          };
        });
        getSeasons(token).then((season: any) => {
          if (res?.errors.requests === daylyLimitMsg) {
            return toast.error(
              "Você atingiu o limite de solicitações diárias. Tente novamente mais tarde"
            );
          }
          setSession(season?.response);
        });
      })
      .catch(() => {
        return setFormData({
          teams: { id: undefined, name: "", logo: "" },
          country: { name: "", code: "", image: "" },
          seasons: { label: 0, value: 0 },
          leagues: {
            id: undefined,
            name: "",
            type: "",
            logo: "",
          },
        });
      });
  };

  return authenticatedUser ? (
    <>
      <Header />
      <TemplateMain>
        <ContentForm>
          {loadingRequest ? (
            <Loading type={"default"} />
          ) : (
            <Maps
              callBackIsCountry={(country) => getCurrentCountries(country)}
            />
          )}
          <Forms session={session} placeholder="Selecione" />
        </ContentForm>
        {/* <ContainerHome>
          <ContentHome>
            <GridLayout
              isDraggable={false}
              layout={layout}
              cols={4}
              rowHeight={80}
              width={1200}
            >
              <HomeCard style={{ alignItems: "end" }} key="a">
                {loadingRequest ? (
                  <Loading type={"chart"} />
                ) : (
                  <Charts
                    options={{
                      label: "Formações mais utilizadas na temporada",
                      responsiveContainer: { width: "90%", height: "90%" },
                      bar: {
                        style: {
                          strokeDasharray: "3 3",
                          container: {
                            width: 300,
                            height: 200,
                          },
                        },
                        dataKey: "name",
                        chart: [
                          {
                            dataKeyLine: "Formações",
                            lineColor: "#8884d8",
                          },
                        ],
                      },
                    }}
                    type="bar"
                    data={data2}
                  />
                )}
              </HomeCard>
              <HomeCard key="b">
                {loadingRequest ? (
                  <Loading type={"chart"} />
                ) : (
                  <Charts
                    options={{
                      label: "Gols marcados por tempo de jogo",
                      responsiveContainer: { width: "90%", height: "90%" },
                      bar: {
                        style: {
                          strokeDasharray: "3 3",
                          container: {
                            width: 300,
                            height: 600,
                          },
                        },
                        dataKey: "name",
                        chart: [
                          {
                            dataKeyLine: "Porcentagem",
                            lineColor: "#84d88b",
                          },
                        ],
                      },
                    }}
                    type="bar"
                    data={data3}
                  />
                )}
              </HomeCard>
              <HomeCard key="c">
                {" "}
                {loadingRequest ? (
                  <Loading type={"listY"} />
                ) : (
                  <CustomTable
                    columnsSize={[50, 25, 25]}
                    columns={columns}
                    dataDefault={defaultData}
                  />
                )}
              </HomeCard>
              <HomeCard key="d">
                {loadingRequest ? (
                  <Loading type={"listX"} />
                ) : (
                  <CustomTable
                    columns={columnsTwo}
                    dataDefault={defaultDataTwo}
                  />
                )}
              </HomeCard>
            </GridLayout>
          </ContentHome>
        </ContainerHome> */}
      </TemplateMain>
    </>
  ) : null;
};

export default Home;
