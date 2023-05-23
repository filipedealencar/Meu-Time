import GridLayout from "react-grid-layout";
import TemplateMain, { ContainerHome, ContentHome, HomeCard } from "./styles";
import Charts from "@/Components/Charts";
import CustomTable from "@/Components/CustomTable";
import { createColumnHelper } from "@tanstack/react-table";
import { BadgePlayers } from "@/Components/CustomTable/BadgePlayers";

export const Home: React.FC = () => {
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

  return (
    <TemplateMain>
      <ContainerHome>
        <ContentHome>
          <GridLayout
            isDraggable={false}
            layout={layout}
            cols={4}
            rowHeight={80}
            width={1200}
          >
            <HomeCard style={{ alignItems: "end" }} key="a">
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
            </HomeCard>
            <HomeCard key="b">
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
            </HomeCard>
            <HomeCard key="c">
              {" "}
              <CustomTable
                columnsSize={[50, 25, 25]}
                columns={columns}
                dataDefault={defaultData}
              />
            </HomeCard>
            <HomeCard key="d">
              {" "}
              <CustomTable columns={columnsTwo} dataDefault={defaultDataTwo} />
            </HomeCard>
          </GridLayout>
        </ContentHome>
      </ContainerHome>
    </TemplateMain>
  );
};

export default Home;
