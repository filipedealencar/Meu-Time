import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { MainChart, LabelChart, ContentCharts } from "./styles";

const Charts: React.FC<ICharts> = ({ options, type, data }) => {
  return (
    <MainChart>
      <ContentCharts>
        <LabelChart>{options?.label}</LabelChart>
        <ResponsiveContainer
          width={options?.responsiveContainer?.width}
          height={options?.responsiveContainer?.height}
        >
          {type === "radar" ? (
            <RadarChart
              outerRadius={options?.radar?.style?.container.outerRadius}
              width={options?.radar?.style?.container.width}
              height={options?.radar?.style?.container.height}
              data={data}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis
                angle={options?.radar?.style?.radius?.angle}
                domain={options?.radar?.style?.radius?.domain}
              />
              {options?.radar?.chart.map((chart, index) => (
                <Radar
                  key={index}
                  name={chart.name}
                  dataKey={chart.dataKey}
                  stroke={chart.stroke}
                  fill={chart.fill}
                  fillOpacity={chart.fillOpacity}
                />
              ))}
              <Legend />
            </RadarChart>
          ) : type === "line" ? (
            <LineChart
              width={options.line?.style?.container?.width}
              height={options.line?.style?.container?.height}
              data={data}
              margin={options.line?.style?.container?.margin}
            >
              <CartesianGrid
                strokeDasharray={options.line?.style?.strokeDasharray}
              />
              <XAxis dataKey={options?.line?.dataKey} />

              <YAxis />
              <Tooltip />
              <Legend />
              {options.line?.chart.map((line, index) => (
                <Line
                  key={index}
                  type={line.type}
                  dataKey={line.dataKeyLine}
                  stroke={line.lineColor}
                />
              ))}
            </LineChart>
          ) : type === "bar" ? (
            <BarChart
              width={options.bar?.style?.container?.width}
              height={options.bar?.style?.container?.height}
              data={data}
            >
              <CartesianGrid
                strokeDasharray={options.bar?.style?.strokeDasharray}
              />
              <XAxis
                label={options.bar?.style?.labelX}
                dataKey={options?.bar?.dataKey}
              />

              <YAxis label={options.bar?.style?.labelY} />
              <Tooltip />
              <Legend />
              {options.bar?.chart.map((bar, index) => (
                <Bar
                  key={index}
                  dataKey={bar.dataKeyLine}
                  fill={bar.lineColor}
                />
              ))}
            </BarChart>
          ) : (
            <div></div>
          )}
        </ResponsiveContainer>
      </ContentCharts>
    </MainChart>
  );
};

export default Charts;
