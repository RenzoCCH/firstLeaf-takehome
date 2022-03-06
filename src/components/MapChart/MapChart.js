import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import './MapChart.css';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const MapChart = ({ setTooltipContent, onCountrySelected }) => {
  return (
    <div className="mapContainer">
      <ComposableMap
        data-tip=""
        projectionConfig={{ scale: 200 }}
      >
        {/*<ZoomableGroup>*/}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => onCountrySelected(geo)}
                onMouseEnter={() => {
                  const { NAME, POP_EST } = geo.properties;
                  setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#222",
                    outline: "none",
                    cursor: "pointer",
                  },
                  pressed: {
                    fill: "#222",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
        {/*</ZoomableGroup>*/}
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
