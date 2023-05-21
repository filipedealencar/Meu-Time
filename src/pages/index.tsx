import GridLayout from "react-grid-layout";
import TemplateMain, { ContainerHome, ContentHome, HomeCard } from "./styles";
import Charts from "@/Components/Charts";

export const Home: React.FC = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1.3, h: 2.5, static: true },
    { i: "b", x: 1.3, y: 0, w: 1.3, h: 2.5 },
    // { i: "c", x: 2, y: 0, w: 1, h: 2 },
    { i: "c", x: 3, y: 0, w: 1.4, h: 6.5 },
    { i: "d", x: 0, y: 1, w: 2.6, h: 4 },
  ];

  const data = [
    {
      subject: "Chutes",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "Passes",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Escanteios",
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Cruzamentos",
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "Defesas",
      A: 85,
      B: 90,
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
            <HomeCard key="a">
              {" "}
              <Charts
                options={{
                  bar: {
                    style: {
                      strokeDasharray: "3 3",
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
                  radar: {
                    chart: [
                      {
                        name: "Mike",
                        dataKey: "A",
                        stroke: "#8884d8",
                        fill: "#8884d8",
                        fillOpacity: 0.6,
                      },
                    ],
                    style: {
                      container: {
                        outerRadius: 70,
                        width: 30,
                        height: 10,
                      },
                      radius: {
                        angle: 70,
                        domain: [0, 150],
                      },
                    },
                  },
                }}
                type="radar"
                data={data}
              />
            </HomeCard>
            <HomeCard key="c"> </HomeCard>
            <HomeCard key="d">
              {" "}
              <Charts
                options={{
                  line: {
                    style: {
                      container: {
                        width: 100,
                        height: 50,
                        margin: { top: 40, right: 80, left: 20, bottom: 5 },
                      },
                      strokeDasharray: "3 3",
                    },
                    dataKey: "name",
                    chart: [
                      {
                        type: "monotone",
                        dataKeyLine: "pv",
                        lineColor: "#8884d8",
                      },
                      {
                        type: "monotone",
                        dataKeyLine: "uv",
                        lineColor: "#82ca9d",
                      },
                    ],
                  },
                }}
                type="line"
                data={data1}
              />
            </HomeCard>
          </GridLayout>
        </ContentHome>
      </ContainerHome>
    </TemplateMain>
  );
};

export default Home;
