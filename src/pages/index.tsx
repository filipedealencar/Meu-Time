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
import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { Maps } from "@/Components/Maps";
import { Header } from "@/Components/Header";
import { Loading } from "@/Components/Loading";
import { Forms } from "@/Components/Forms";
import {
  getCountries,
  getPlayers,
  getSeasons,
  getTeamsStatistics,
} from "@/Services/football";

export const Home: React.FC = () => {
  const {
    token,
    formData,
    authenticatedUser,
    setAuthenticatedUser,
    setFormData,
  } = useContext(GlobalContext);
  const tokenErrorMsg =
    "Error/Missing application key. Go to https://www.api-football.com/documentation-v3 to learn how to get your API application key.";
  const daylyLimitMsg =
    "You have reached the request limit for the day, Go to https://dashboard.api-football.com to upgrade your plan.";
  const [loadingRequest, setLoadinRequest] = useState(true);
  const [session, setSession] = useState([]);
  const router = useRouter();

  const [teamsStatistic, setTeamsStatistic] = useState({
    formation: [],
    players: [],
    goals: [],
  });

  const refDashboard = useRef<HTMLDivElement>(null);

  const [enableDashboard, setEnableDashboard] = useState({
    enable: true,
    loading: false,
  });

  useEffect(() => {
    if (formData.teams.name === "" || formData.teams.name === undefined) {
      return setEnableDashboard({
        enable: false,
        loading: true,
      });
    }
    getPlayers(
      token,
      String(formData.leagues.id),
      String(formData.teams.id),
      String(formData.seasons.value)
    ).then((res: any) => {
      console.log(res);
      setTeamsStatistic((statistic) => {
        return {
          ...statistic,
          players: res?.response?.map(({ player }: any) => ({
            Nome: {
              name: player.name,
              img: player.photo,
            },
            País: player.nationality,
            Idade: player.age,
          })),
        };
      });
    });
    getTeamsStatistics(
      token,
      String(formData.leagues.id),
      String(formData.teams.id),
      String(formData.seasons.value)
    ).then((res: any) => {
      setTeamsStatistic((statistic) => {
        return {
          ...statistic,
          formation: res?.response?.lineups.slice(0, 4).map((item: any) => {
            return {
              name: item?.formation,
              Formações: item?.played,
            };
          }),
          goals: Object.entries(res?.response?.goals?.for?.minute)
            .slice(0, 4)
            .map(([key, value]: any) => ({
              name: key,
              total: value?.total,
              Porcentagem: Number(value?.percentage.split("%")[0]),
            })) as any,
        };
      });
    });

    setEnableDashboard((state) => {
      return {
        ...state,
        enable: true,
      };
    });

    setTimeout(() => {
      setEnableDashboard((state) => {
        return {
          ...state,
          loading: false,
        };
      });
    }, 3000);
  }, [formData]);

  const smoothScrollToPosition = (targetPosition: number, duration: number) => {
    if (typeof window === "undefined") {
      return;
    }

    const startPosition = window?.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const easeOutQuad = (
      t: number,
      b: number,
      c: number,
      d: number
    ): number => {
      t /= d;
      return -c * t * (t - 2) + b;
    };

    const scrollAnimation = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsedTime = currentTime - startTime;
      const scrollProgress = easeOutQuad(
        elapsedTime,
        startPosition,
        distance,
        duration
      );
      window?.scrollTo(0, scrollProgress);

      if (elapsedTime < duration) {
        requestAnimationFrame(scrollAnimation);
      }
    };

    requestAnimationFrame(scrollAnimation);
  };

  console.log(teamsStatistic);

  useEffect(() => {
    if (formData.teams.name === "" || formData.teams.name === undefined) return;
    if (typeof window === "undefined") return;
    if (!refDashboard?.current) return;
    const targetPosition =
      refDashboard?.current?.getBoundingClientRect()?.top + window.pageYOffset;
    const duration = 1000;
    if (formData.teams.name !== "" && formData.teams.name !== undefined) {
      setTimeout(() => {
        smoothScrollToPosition(targetPosition, duration);
      }, 1000);
    }
  }, [formData.teams.id]);
  const layout = [
    { i: "a", x: 0, y: 0, w: 1.3, h: 3.2, static: true },
    { i: "b", x: 1.3, y: 0, w: 1.3, h: 3.2 },
    // { i: "c", x: 2, y: 0, w: 1, h: 2 },
    { i: "c", x: 3, y: 0, w: 1.4, h: 7.7 },
    { i: "d", x: 0, y: 1, w: 2.6, h: 4.5 },
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

  useEffect(() => {
    setTimeout(() => {
      setLoadinRequest(false);
    }, 2000);
  }, []);

  const getCurrentCountries = (name: string) => {
    return getCountries(token, name)
      .then((res: any) => {
        if (res?.errors.requests === daylyLimitMsg) {
          return toast.error(
            "Você atingiu o limite de solicitações diárias. Tente novamente mais tarde"
          );
        } else if (res.errors?.token === tokenErrorMsg) {
          setAuthenticatedUser(false);
          router.push("/login");
          return toast.error(
            "Não foi possível realizar a solicitação. Verifique seu token"
          );
        }
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
          } else if (res.errors?.token === tokenErrorMsg) {
            setAuthenticatedUser(false);
            router.push("/login");
            return toast.error(
              "Não foi possível realizar a solicitação. Verifique seu token"
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
        {enableDashboard.enable && (
          <ContainerHome ref={refDashboard}>
            <ContentHome>
              <GridLayout
                isDraggable={false}
                layout={layout}
                cols={4}
                rowHeight={80}
                width={1200}
              >
                <HomeCard style={{ alignItems: "end" }} key="a">
                  {enableDashboard.loading ? (
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
                      data={teamsStatistic.formation}
                    />
                  )}
                </HomeCard>
                <HomeCard key="b">
                  {enableDashboard.loading ? (
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
                      data={teamsStatistic.goals}
                    />
                  )}
                </HomeCard>
                <HomeCard key="c">
                  {" "}
                  {enableDashboard.loading ? (
                    <Loading type={"listY"} />
                  ) : (
                    <CustomTable
                      columnsSize={[30, 35, 35]}
                      columns={columns}
                      dataDefault={teamsStatistic.players}
                    />
                  )}
                </HomeCard>
                <HomeCard key="d">
                  {enableDashboard.loading ? (
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
          </ContainerHome>
        )}
      </TemplateMain>
    </>
  ) : null;
};

export default Home;
