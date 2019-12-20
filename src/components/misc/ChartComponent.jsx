import React from "react";
import Chart from "react-apexcharts";

const ChartComponent = props => {
  const { classes, graphType } = props;

  return (
    <div className={`chart ${classes}`} style={{ minHeight: 100 }}>
      {graphType === "line" && (
        <Chart
          options={props.graphOptions}
          series={props.graphSeries}
          type="line"
          height={props.chartHeight}
        />
      )}
      {graphType === "bar" && (
        <Chart
          options={props.graphOptions}
          series={props.graphSeries}
          type="bar"
          height={props.chartHeight}
        />
      )}
    </div>
  );
};

export default ChartComponent;
