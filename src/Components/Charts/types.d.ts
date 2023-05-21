type chartTypes = "radar" | "line" | "bar" | "area";

interface Radar {
  subject: string;
  A: number;
  B: number;
  fullMark: number;
}
interface Line {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}
interface Bar {
  name: string;
  uv?: number;
  pv?: number;
}
interface Area {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

interface ICharts {
  type: chartTypes;
  data: Radar[] | Line[] | Bar[] | Area[];
  options: {
    responsiveContainer?: {
      width?: number | string;
      height?: number | string;
    };
    line?: {
      style?: {
        strokeDasharray?: number | string;
        container?: {
          margin: {
            top?: number;
            right?: number;
            bottom?: number;
            left?: number;
          };
          width: number;
          height: number;
        };
      };
      dataKey: string;
      chart: {
        dataKeyLine: string;
        lineColor: string;
        type:
          | "basis"
          | "basisClosed"
          | "basisOpen"
          | "linear"
          | "linearClosed"
          | "natural"
          | "monotoneX"
          | "monotoneY"
          | "monotone"
          | "step"
          | "stepBefore"
          | "stepAfter";
      }[];
    };
    radar?: {
      style: {
        container: { outerRadius: number; width: number; height: number };
        radius: { angle: number; domain: number[] };
      };
      chart: {
        name: string;
        dataKey: string;
        stroke: string;
        fill: string;
        fillOpacity: number;
      }[];
    };
    bar?: {
      style?: {
        strokeDasharray?: number | string;
        container?: {
          width: number;
          height: number;
        };
      };
      dataKey: string;
      chart: {
        dataKeyLine: string;
        lineColor: string;
      }[];
    };
    area?: Area[];
  };
}
