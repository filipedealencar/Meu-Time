import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import * as am5 from "@amcharts/amcharts5/index";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { MainMaps, WrapperMaps } from "./styles";
import { useContext, useEffect } from "react";
import { GlobalContext } from "@/Contexts/GlobalContext";

export const Maps: React.FC<IMaps> = ({ callBackIsCountry }) => {
  const { setFormData } = useContext(GlobalContext);
  useEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "translateY",
        projection: am5map.geoNaturalEarth1(),
      })
    );

    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      toggleKey: "active",
      interactive: true,
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: root.interfaceColors.get("primaryButtonHover"),
    });

    polygonSeries.mapPolygons.template.states.create("active", {
      fill: root.interfaceColors.get("primaryButtonActive"),
    });
    polygonSeries.mapPolygons.template.states.create("disabled", {
      fill: root.interfaceColors.get("primaryButtonActive"),
    });

    chart.chartContainer.get("background")?.events.on("click", function () {
      chart.goHome();
    });

    let zoomControl = chart.set(
      "zoomControl",
      am5map.ZoomControl.new(root, {})
    );
    let homeButton = zoomControl.children.moveValue(
      am5.Button.new(root, {
        paddingTop: 10,
        paddingBottom: 10,
        icon: am5.Graphics.new(root, {
          svgPath:
            "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8",
          fill: am5.color(0xffffff),
        }),
      }),
      0
    );

    homeButton.events.on("click", function () {
      chart.goHome();
    });

    polygonSeries.mapPolygons.template.events.on("click", function (ev) {
      setFormData({
        teams: { id: undefined, name: "", logo: "" },
        country: { name: "", code: "", image: "" },
        seasons: {
          value: undefined,
          label: undefined,
        },
        leagues: {
          id: undefined,
          name: "",
          type: "",
          logo: "",
        },
      });

      polygonSeries.mapPolygons.template._entities.map((country) => {
        if (
          (country.dataItem?.dataContext as any).id !==
          (ev?.target?.dataItem?.dataContext as any)?.id
        ) {
          country.set("active", false);
        }
      });

      callBackIsCountry((ev?.target?.dataItem?.dataContext as any)?.id);
    });
  }, []);
  return (
    <WrapperMaps>
      Selecione um país<MainMaps id="chartdiv"></MainMaps>
    </WrapperMaps>
  );
};
