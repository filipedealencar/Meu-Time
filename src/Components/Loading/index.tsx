import ContentLoader from "react-content-loader";
import { WrapperLoading } from "./styles";

export const Loading: React.FC<ILoading> = ({ type }) => {
  return type === "default" ? (
    <WrapperLoading>
      {" "}
      <ContentLoader
        speed={2}
        width={1200}
        height={160}
        viewBox="0 0 1200 160"
        backgroundColor="#1f2248"
        foregroundColor="#aaaaac"
      >
        <rect x="48" y="18" rx="3" ry="3" width="88000" height="16" />
        <rect x="48" y="46" rx="3" ry="3" width="52000" height="16" />
        <rect x="0" y="76" rx="3" ry="3" width="410000" height="16" />
        <rect x="0" y="102" rx="3" ry="3" width="380000" height="16" />
        <rect x="0" y="128" rx="3" ry="3" width="178000" height="16" />
      </ContentLoader>
    </WrapperLoading>
  ) : type === "chart" ? (
    <WrapperLoading>
      {" "}
      <ContentLoader
        speed={2}
        width={355}
        height={280}
        viewBox="0 0 365 260"
        backgroundColor="#1f2248"
        foregroundColor="#aaaaac"
      >
        <rect x="70" y="28" rx="3" ry="3" width="200" height="16" />
        <rect x="30" y="70" rx="3" ry="3" width="300" height="120" />
        <rect x="70" y="220" rx="3" ry="3" width="200" height="16" />
      </ContentLoader>
    </WrapperLoading>
  ) : type === "listX" ? (
    <WrapperLoading>
      {" "}
      <ContentLoader
        speed={2}
        width={740}
        height={370}
        viewBox="0 0 740 370"
        backgroundColor="#1f2248"
        foregroundColor="#aaaaac"
      >
        <rect x="0" y="18" rx="3" ry="3" width="740" height="50" />

        <rect x="40" y="90" rx="3" ry="3" width="100" height="16" />
        <rect x="220" y="90" rx="3" ry="3" width="100" height="16" />
        <rect x="400" y="90" rx="3" ry="3" width="100" height="16" />
        <rect x="600" y="90" rx="3" ry="3" width="100" height="16" />

        <rect x="40" y="120" rx="3" ry="3" width="100" height="16" />
        <rect x="220" y="120" rx="3" ry="3" width="100" height="16" />
        <rect x="400" y="120" rx="3" ry="3" width="100" height="16" />
        <rect x="600" y="120" rx="3" ry="3" width="100" height="16" />

        <rect x="40" y="150" rx="3" ry="3" width="100" height="16" />
        <rect x="220" y="150" rx="3" ry="3" width="100" height="16" />
        <rect x="400" y="150" rx="3" ry="3" width="100" height="16" />
        <rect x="600" y="150" rx="3" ry="3" width="100" height="16" />

        <rect x="40" y="180" rx="3" ry="3" width="100" height="16" />
        <rect x="220" y="180" rx="3" ry="3" width="100" height="16" />
        <rect x="400" y="180" rx="3" ry="3" width="100" height="16" />
        <rect x="600" y="180" rx="3" ry="3" width="100" height="16" />

        <rect x="40" y="210" rx="3" ry="3" width="100" height="16" />
        <rect x="220" y="210" rx="3" ry="3" width="100" height="16" />
        <rect x="400" y="210" rx="3" ry="3" width="100" height="16" />
        <rect x="600" y="210" rx="3" ry="3" width="100" height="16" />

        <rect x="40" y="240" rx="3" ry="3" width="100" height="16" />
        <rect x="220" y="240" rx="3" ry="3" width="100" height="16" />
        <rect x="400" y="240" rx="3" ry="3" width="100" height="16" />
        <rect x="600" y="240" rx="3" ry="3" width="100" height="16" />

        <rect x="40" y="270" rx="3" ry="3" width="100" height="16" />
        <rect x="220" y="270" rx="3" ry="3" width="100" height="16" />
        <rect x="400" y="270" rx="3" ry="3" width="100" height="16" />
        <rect x="600" y="270" rx="3" ry="3" width="100" height="16" />

        <rect x="40" y="300" rx="3" ry="3" width="100" height="16" />
        <rect x="220" y="300" rx="3" ry="3" width="100" height="16" />
        <rect x="400" y="300" rx="3" ry="3" width="100" height="16" />
        <rect x="600" y="300" rx="3" ry="3" width="100" height="16" />

        <rect x="40" y="330" rx="3" ry="3" width="100" height="16" />
        <rect x="220" y="330" rx="3" ry="3" width="100" height="16" />
        <rect x="400" y="330" rx="3" ry="3" width="100" height="16" />
        <rect x="600" y="330" rx="3" ry="3" width="100" height="16" />
      </ContentLoader>
    </WrapperLoading>
  ) : type === "listY" ? (
    <WrapperLoading>
      {" "}
      <ContentLoader
        speed={2}
        width={407}
        height={683}
        viewBox="0 0 407 683"
        backgroundColor="#1f2248"
        foregroundColor="#aaaaac"
      >
        <rect x="20" y="18" rx="3" ry="3" width="370" height="50" />
        <rect x="75" y="100" rx="3" ry="3" width="315" height="16" />
        <rect x="75" y="140" rx="3" ry="3" width="315" height="16" />
        <rect x="75" y="180" rx="3" ry="3" width="315" height="16" />
        <rect x="75" y="220" rx="3" ry="3" width="315" height="16" />
        <rect x="75" y="260" rx="3" ry="3" width="315" height="16" />
        <rect x="75" y="300" rx="3" ry="3" width="315" height="16" />
        <rect x="75" y="340" rx="3" ry="3" width="315" height="16" />
        <rect x="75" y="380" rx="3" ry="3" width="315" height="16" />
        <rect x="75" y="420" rx="3" ry="3" width="315" height="16" />
        <rect x="75" y="460" rx="3" ry="3" width="315" height="16" />
        <rect x="75" y="500" rx="3" ry="3" width="315" height="16" />
        <rect x="75" y="540" rx="3" ry="3" width="315" height="16" />
        <rect x="75" y="580" rx="3" ry="3" width="315" height="16" />
        <rect x="75" y="620" rx="3" ry="3" width="315" height="16" />
        <circle cx="40" cy="105" r="18" />
        <circle cx="40" cy="145" r="18" />
        <circle cx="40" cy="185" r="18" />
        <circle cx="40" cy="225" r="18" />
        <circle cx="40" cy="265" r="18" />
        <circle cx="40" cy="305" r="18" />
        <circle cx="40" cy="345" r="18" />
        <circle cx="40" cy="385" r="18" />
        <circle cx="40" cy="425" r="18" />
        <circle cx="40" cy="465" r="18" />
        <circle cx="40" cy="505" r="18" />
        <circle cx="40" cy="545" r="18" />
        <circle cx="40" cy="585" r="18" />
        <circle cx="40" cy="625" r="18" />
      </ContentLoader>
    </WrapperLoading>
  ) : (
    <WrapperLoading>
      {" "}
      <ContentLoader
        speed={2}
        width={1200}
        height={160}
        viewBox="0 0 1200 160"
        backgroundColor="#1f2248"
        foregroundColor="#aaaaac"
      >
        <rect x="48" y="18" rx="3" ry="3" width="88000" height="16" />
        <rect x="48" y="46" rx="3" ry="3" width="52000" height="16" />
        <rect x="0" y="76" rx="3" ry="3" width="410000" height="16" />
        <rect x="0" y="102" rx="3" ry="3" width="380000" height="16" />
        <rect x="0" y="128" rx="3" ry="3" width="178000" height="16" />
      </ContentLoader>
    </WrapperLoading>
  );
};
